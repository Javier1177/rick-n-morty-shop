import { FC } from 'react';
import { LayoutProps } from './layout.types';
import Footer from './Footer';
import Header from './Header';

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
