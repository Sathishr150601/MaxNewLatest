import { Header, Footer, Template } from "@/components";

interface LayoutProps {
	children: React.ReactNode;
	showHeader?: boolean;
	showFooter?: boolean;
}

const PageLayout: React.FC<LayoutProps> = ({
	children,
	showHeader = false,
	showFooter = false,
}) => {
	return (
		<>
			{showHeader && <Header />}
			<Template>
				<main className="flex-grow">{children}</main>
			</Template>
			{showFooter && <Footer />}
		</>
	);
};

export default PageLayout;
