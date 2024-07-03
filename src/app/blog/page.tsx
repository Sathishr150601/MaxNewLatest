import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogData } from "@/lib/getBlogData";
import { Blog } from "@/types/blog";
import images from "@/images";
import Head from "next/head";
import { Slugify } from "@/components";

const AllBlogsPage: FC = () => {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		setBlogs(getBlogData());
	}, []);

	return (
		<>
			{blogs.map((blog, index) => (
				<div key={index} className="container mx-auto p-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<Link
							href={`/blog/${Slugify(blog.title)}`}
							className="relative block p-5 border rounded-3xl hover:bg-gray-100"
						>
							<>
								<Image
									src={images.blog[blog.image]}
									alt={blog.title}
									layout="responsive"
									width={400}
									height={200}
									className="rounded-t-3xl"
								/>

								<div className="absolute top-0 px-4 py-10 mb-2">
									{blog.categories.map((category, idx) => (
										<Link
											href={`/blog/category/${Slugify(category)}`}
											key={idx}
											className="bg-orange-400 text-black rounded-full px-2 py-1 mr-2"
										>
											{category}
										</Link>
									))}
								</div>
							</>

							<h2 className="text-2xl font-semibold mt-2">{blog.title}</h2>

							<p className="text-gray-600">
								<span>{blog.date}</span> | <span>{blog.readtime}</span>
							</p>

							<p className="mt-2">
								<Link href={`/blog/${Slugify(blog.title)}`}>{blog.desc}</Link>
							</p>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default AllBlogsPage;
