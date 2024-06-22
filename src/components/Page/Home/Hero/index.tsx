import homeData from "@/data/home.json";

const Hero: React.FC = () => {
	const hero = homeData.hero[0];

	return (
		<div className="" id="Hero">
			<div className="">
				<p className="PreHeading">
					<span className="">{hero.preHeading1}</span>
					<span className="">{hero.preHeading2}</span>
				</p>
			</div>
			<div className="">
				<h1 className="Title">
					<span className="">{hero.title1}</span>
					<span className="">{hero.title2}</span>
					<span className="">{hero.title3}</span>
				</h1>
			</div>
			<div className="">
				<p className="Description">
					<span className="">{hero.desc1}</span>
					<span className="">{hero.desc2}</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;
