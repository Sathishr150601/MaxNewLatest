import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Max Hair Clinic - Hair Defines You",
	description:
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iusto rem nulla. Rem, quo? Ut quos, debitis eveniet corrupti qui modi excepturi accusamus quisquam quidem ea, similique architecto perspiciatis optio?",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
