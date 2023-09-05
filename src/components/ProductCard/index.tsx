import { FC } from 'react';
import './productCard.styles.scss';
import { ProductCardProps } from './productCard.types';

const baseClass = 'productCard';

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { image, name, price } = product;

	return (
		<li className={baseClass}>
			<h2>{name}</h2>
			<img src={image} alt={name} />
			<div className={`${baseClass}-footer`}>
				<span className={`${baseClass}-price`}>${price}</span>
				<button onClick={() => console.log('hey')}>Add to cart</button>
			</div>
		</li>
	);
};

export default ProductCard;
