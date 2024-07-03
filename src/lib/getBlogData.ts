import fs from "fs";
import path from "path";
import { Blog } from "@/types/blog";

export function getBlogData(): Blog[] {
	const filePath = path.join(process.cwd(), "src", "data", "blogs.json");
	const jsonData = fs.readFileSync(filePath, "utf-8");
	return JSON.parse(jsonData);
}
