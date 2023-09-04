import './header.styles.scss';

const baseClass = 'header';

const Header = () => {
	return (
		<header className={baseClass}>
			<h1>Buscador de productos</h1>
			<form className={`${baseClass}-filter`}>
				<input placeholder="Search for a product..." />
				<button type="submit">Buscar</button>
			</form>
		</header>
	);
};

export default Header;
