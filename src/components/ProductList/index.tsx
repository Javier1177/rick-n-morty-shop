import { useFetchMovies } from '../../hooks/useFetchMovies';
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';

import './productList.style.scss';

const baseClass = 'productList';

const ProductList = () => {
	const { isLoading, productList } = useFetchMovies();

	if (isLoading) return <Spinner />;

	return (
		<ul className={`${baseClass}-container`}>
			{productList.map(product => (
				<li key={product.id}>
					<ProductCard product={product} />
				</li>
			))}
		</ul>
	);
};

export default ProductList;
