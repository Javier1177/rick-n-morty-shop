import { useProductList } from '../../store/productsList/productsList';
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';

import './productList.style.scss';

const baseClass = 'productList';

const ProductList = () => {
	const productList = useProductList(state => state.productList);
	if (!productList.length) return <Spinner />;

	return (
		<div className={`${baseClass}-container`}>
			<div>asdad</div>
			<div className={`${baseClass}-cards`}>
				{productList.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
