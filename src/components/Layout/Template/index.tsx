"use client";

import { useEffect, useCallback } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const scrollY = useMotionValue(0);
	const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 20 });

	const handleScroll = useCallback(() => {
		scrollY.set(window.scrollY);
	}, [scrollY]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	const y = useTransform(smoothScrollY, (value) => -value * 0.9);

	return (
		<motion.div style={{ y }}>
			<motion.div
				className="relative z-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Template;
