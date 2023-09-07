import { FC } from 'react';
import Swal from 'sweetalert2';

import { ProductCardProps } from './productCard.types';
import { useCartPorducts } from '../../hooks/useCartProducts';

import './productCard.styles.scss';

const baseClass = 'productCard';

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { image, name, price } = product;
	const { addCartList } = useCartPorducts();

	const handleAddCartList = () => {
		addCartList(product);

		Swal.fire(
			'Producto añadido!',
			'Puedes revisarlo haciendo click en el carrito',
			'success'
		);
	};

	return (
		<li className={baseClass}>
			<h2>{name}</h2>
			<img src={image} alt={name} />
			<div className={`${baseClass}-footer`}>
				<span className={`${baseClass}-price`}>${price}</span>
				<button onClick={handleAddCartList}>Add to cart</button>
			</div>
		</li>
	);
};

export default ProductCard;
