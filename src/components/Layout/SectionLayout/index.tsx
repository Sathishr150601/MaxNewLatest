import React, { ReactNode } from "react";

interface SectionLayoutProps {
	children: ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
	return <section className="SectionLayout p-[5%]">{children}</section>;
};

export default SectionLayout;
