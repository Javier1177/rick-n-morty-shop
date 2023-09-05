export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	category: string;
	image: string;
}

export type PriceOrder = 'ASC' | 'DESC';

export interface ProductListState {
	productList: Product[];
	searchBar: string;
	priceOrder: PriceOrder;
	setSearchBar: (value: string) => void;
	setPriceOrder: (value: PriceOrder) => void;
	fetchProductList: () => Promise<void>;
}
