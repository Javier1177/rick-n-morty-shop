import { create } from 'zustand';
import { Product } from './types.d';
import productsData from '../../../public/products.json';

interface State {
	productList: Product[];
	fetchProductList: () => Promise<void>;
}

export const useProductList = create<State>(set => ({
	productList: [],
	fetchProductList: async () => {
		set({ productList: productsData });
	},
}));
