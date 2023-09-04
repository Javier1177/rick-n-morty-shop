import { FC } from 'react';
import './productCard.styles.scss';
import { ProductCardProps } from './productCard.types';

const baseClass = 'productCard';

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { image, name, price } = product;

	return (
		<div className={`${baseClass}-container`}>
			<img src={image} alt={name} />
			<div className={`${baseClass}-footer`}>
				<span className={`${baseClass}-name`}>{name}</span>
				<span className={`${baseClass}-price`}>${price}</span>
			</div>
			<button onClick={() => console.log('hey')}>Add to card</button>
		</div>
	);
};

export default ProductCard;
