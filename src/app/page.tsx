"use client";

import { PreLoader } from "@/components";
import { useEffect, useState } from "react";
import Home from "./home";

function Landing() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => setIsLoading(false);

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	return isLoading ? <PreLoader /> : <Home />;
}

export default Landing;
