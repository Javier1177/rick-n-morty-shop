import { create } from 'zustand';
import { PriceOrder, Product, ProductListState } from './types.d';

// Aquí creo la store del listado de productos junto con sus "reducers/actions" que podríamos encontrar en Redux.
// Al hacer el fetch decido controlar si hay un error con el try/catch.

export const useProductList = create<ProductListState>(set => ({
	productList: [],
	searchBar: '',
	priceOrder: 'ASC',

	setSearchBar: value => {
		set({ searchBar: value });
	},

	setPriceOrder: (value: PriceOrder) => {
		set({ priceOrder: value });
	},

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
