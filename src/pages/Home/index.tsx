import ProductList from '../../components/ProductList';

import './home.styles.scss';

const baseClass = 'Home';

const Home = () => {
	return (
		<main className={baseClass}>
			<ProductList />
		</main>
	);
};

export default Home;
