import { FC } from 'react';
import './productCard.styles.scss';
import { ProductCardProps } from './productCard.types';

const baseClass = 'productCard';

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { image, name, price } = product;

	return (
		<>
			<h2>{name}</h2>
			<img src={image} alt={name} />
			<span className={`${baseClass}-price`}>${price}</span>
			{/* <button onClick={() => console.log('hey')}>Add to card</button> */}
		</>
	);
};

export default ProductCard;
