import images from "@/images";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Data = {
	image: images.home.hero,
	preheading1: "MAX",
	preheading2: "Hair Clinic",
	title1: "Hair",
	title2: "Defines",
	title3: "You",
	desc1:
		"Max Hair Clinic incorporated in 2004 is a self-defined brand name in the modern world of hair transplant in India cascading excellence in delivery. We continue our operations in a class-apart OPD facilities environment.",
	desc2:
		"Max Hair Clinic incorporated in 2004 is a self-defined brand name in the modern world of hair transplant.",
};

const Hero: React.FC = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 4000], [0, -1500]);

	return (
		<section
			className="w-full h-[115vh] lg:h-[150vh] 2xl:h-[180vh] bg-secondary text-primary overflow-hidden"
			id="Hero"
		>
			<div className="heroWrapper">
				<div className="BgImg fixed z-0 lg:top-[-40vh] left-0 w-screen h-[115vh] lg:h-[190vh] 2xl:h-[220vh] overflow-hidden">
					<Image
						src={Data.image}
						alt="Background"
						layout="fill"
						objectFit="cover"
						className="pointer-events-none max-lg:opacity-80"
						loading="lazy"
					/>
				</div>

				<motion.div
					style={{ y }}
					className="Content relative z-10 w-full h-max pt-[25vh] sm:pt-[28vh] lg:py-[20vh] px-[2.5vw] sm:px-[3.5vw] lg:px-[10vw] 2xl:px-[15vw]"
				>
					<div className="w-full h-[40vh] lg:h-[75vh] 2xl:h-[100vh] flex flex-col justify-center items-start pb-10">
						<h1 className="text-[5.5vw] sm:text-[4.5vw] lg:text-[2.75vw] 2xl:text-[2vw] leading-snug mb-5 2xl:ml-4">
							<span>{Data.preheading1}</span>
							<span>{Data.preheading2}</span>
						</h1>

						<h2 className="text-[22vw] sm:text-[16vw] lg:text-[11vw] 2xl:text-[12vw] leading-none">
							<span>{Data.title1}</span>
							<span>{Data.title2}</span>
							<span>{Data.title3}</span>
						</h2>
					</div>

					<div className="w-full h-[45vh] lg:h-[75vh] 2xl:h-[80vh] flex flex-col justify-start items-start pt-10 gap-5 lg:items-end">
						<p className="text-[5vw] sm:text-[3.5vw] lg:text-[2.15vw] 2xl:text-[1.75vw] sm:w-5/6 lg:w-3/5">
							{Data.desc1}
						</p>

						<p className="text-[5vw] sm:text-[3.5vw] lg:text-[2.15vw] 2xl:text-[1.75vw] sm:w-5/6 lg:w-3/5">
							{Data.desc2}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
