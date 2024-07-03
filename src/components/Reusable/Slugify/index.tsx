const Slugify = (text: string) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-") // Replace spaces with hyphens
		.replace(/[^\w-]+/g, ""); // Remove all non-word characters except hyphens
};

export default Slugify;
