import { useCartPorducts } from '../../hooks/useCartProducts';
import TrashIcon from '../../assets/trash-white.svg';

import './cart.styles.scss';

const baseClass = 'cart';

const Cart = () => {
	const { getTotalCart, cartList, deleteCartItem } = useCartPorducts();

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
							<span>
								{product.quantity} x ${product.price}
							</span>
							<button
								className={`${baseClass}-element-delete`}
								onClick={() => deleteCartItem(product.id)}
							>
								<img
									width="15px"
									height="15px"
									src={TrashIcon}
									alt="Delete icon"
								/>
							</button>
						</div>
					</div>
				</div>
			))}
			<div className={`${baseClass}-total`}>Total: ${getTotalCart()}</div>
		</div>
	);
};

export default Cart;
