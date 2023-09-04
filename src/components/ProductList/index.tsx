import ProductCard from '../ProductCard';

const baseClass = 'ProductList';

const ProductList = () => {
	return (
		<div className={`${baseClass}-container`}>
			<ProductCard />
		</div>
	);
};

export default ProductList;
