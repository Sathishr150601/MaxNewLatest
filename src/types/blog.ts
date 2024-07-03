export interface BlogContent {
	heading?: string;
	text?: string;
	list?: string[];
}

export interface Blog {
	title: string;
	desc: string;
	banner: string;
	categories: string[];
	date: string;
	readtime: string;
	image: string;
	content: BlogContent[];
	popular: boolean;
	tags: string[];
	meta: string[];
}
