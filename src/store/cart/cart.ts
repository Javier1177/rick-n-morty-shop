import { create } from 'zustand';
import { CartState } from './types.d';
import { Product } from '../productsList/types';

export const useCart = create<CartState>((set, get) => ({
	cartList: [],

	addCartList: (product: Product) => {
		const cart = get().cartList;

		const alreadyAdded = cart.find(
			cartProduct => cartProduct.id === product.id
		);

		if (alreadyAdded) {
			const arrayToSave = cart.map(cartProduct =>
				cartProduct.id === product.id
					? { ...cartProduct, quantity: cartProduct.quantity + 1 }
					: cartProduct
			);
			set({ cartList: arrayToSave });

			return;
		}

		set({ cartList: [...cart, { ...product, quantity: 1 }] });
	},
	getTotalCart: () => {
		const cartList = get().cartList;
		const totalPrice = cartList.reduce((total, product) => {
			const productTotal = product.price * product.quantity;
			return total + productTotal;
		}, 0);
		return totalPrice;
	},
}));
