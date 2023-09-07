import { create } from 'zustand';
import { CartState } from './types.d';
import { Product } from '../productsList/types';

// Aquí creo la store del Carrito junto con sus "reducers/actions" que podríamos encontrar en Redux.
// Además decido crear los metodos para seleccionar/modificar la info de la store, para no tener que hacerla dentro del componente.
// Así evito tocar el componente si cambia algo de la lógica.

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
