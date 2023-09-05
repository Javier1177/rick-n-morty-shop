import { useFetchMovies } from '../../hooks/useFetchMovies';
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';

import './productList.style.scss';

const baseClass = 'productList';

const ProductList = () => {
	const { isLoading, productList } = useFetchMovies();

	if (isLoading) return <Spinner />;

	return (
		<ul className={baseClass}>
			{productList.map(product => (
				<ProductCard product={product} key={product.id} />
			))}
		</ul>
	);
};

export default ProductList;
