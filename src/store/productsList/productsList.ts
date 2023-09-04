import { create } from 'zustand';
import { Product } from './types.d';

interface State {
	productList: Product[];
	fetchProductList: () => Promise<void>;
}

export const useProductList = create<State>(set => ({
	productList: [],
	fetchProductList: async () => {
		try {
			const response = await fetch('http://localhost:5173/products.json');

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const productList: Product[] = (await response.json()) as Product[];
			set({ productList });
		} catch (error) {
			console.error('Error:', error);
		}
	},
}));
