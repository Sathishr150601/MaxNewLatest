import { Hero, PageLayout } from "@/components";

const Home: React.FC = () => {
	return (
		<PageLayout>
			<Hero />

			<Dummy />
		</PageLayout>
	);
};

export default Home;

function Dummy() {
	return (
		<h1 className="w-screen h-screen flex justify-center items-center">
			Dummy Page
		</h1>
	);
}
