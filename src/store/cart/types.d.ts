import { Product } from '../productsList/types';

export interface CartProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	category: string;
	image: string;
	quantity: number;
}

export interface CartState {
	cartList: CartProduct[];
	addCartList: (product: Product) => void;
	getTotalCart: () => number;
	deleteCartItem: (id: number) => void;
}
