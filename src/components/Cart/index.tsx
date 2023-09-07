import { useCartPorducts } from '../../hooks/useCartProducts';

import './cart.styles.scss';

const baseClass = 'cart';

const Cart = () => {
	const { getTotalCart, cartList } = useCartPorducts();

	if (!cartList.length)
		return (
			<div className={`${baseClass}-no-products`}>
				No hay productos en el carrito :(
			</div>
		);

	return (
		<div className={baseClass}>
			{cartList.map(product => (
				<div key={product.id} className={`${baseClass}-element`}>
					<img
						src={product.image}
						alt={product.name}
						width={100}
						height={100}
					/>
					<div>
						<h2 className={`${baseClass}-element-name`}>{product.name}</h2>
						<div>
							{product.quantity} x ${product.price}
						</div>
					</div>
				</div>
			))}
			<div className={`${baseClass}-total`}>Total: ${getTotalCart()}</div>
		</div>
	);
};

export default Cart;
