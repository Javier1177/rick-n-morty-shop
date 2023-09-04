import './footer.styles.scss';

const baseClass = 'footer';

const Footer = () => {
	return (
		<footer className={`${baseClass}-container`}>
			&copy; 2023 Rick & Morty Shop. All Rights Reserved.
		</footer>
	);
};

export default Footer;
