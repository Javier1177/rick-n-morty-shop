import { useCart } from '../store/cart/cart';

export const useCartPorducts = () => {
	const addCartList = useCart(state => state.addCartList);
	const cartList = useCart(state => state.cartList);
	const getTotalCart = useCart(state => state.getTotalCart);

	return { addCartList, cartList, getTotalCart };
};
