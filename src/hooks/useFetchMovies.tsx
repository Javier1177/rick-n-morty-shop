import { useEffect, useMemo } from 'react';
import { useProductList } from '../store/productsList/productsList';

export const useFetchMovies = () => {
	const fetchProducts = useProductList(state => state.fetchProductList);
	const productList = useProductList(state => state.productList);
	const searchBar = useProductList(state => state.searchBar);
	const priceOrder = useProductList(state => state.priceOrder);

	useEffect(() => {
		fetchProducts();
	}, [searchBar]);

	const orderedProducts = useMemo(() => {
		if (priceOrder === 'DESC' && productList.length)
			return productList.slice().sort((a, b) => b.price - a.price);
		return productList.slice().sort((a, b) => a.price - b.price);
	}, [productList, priceOrder]);

	if (!productList.length) return { isLoading: true, productList };

	const filteredProducts = orderedProducts.filter(product =>
		product.name.toLocaleLowerCase().includes(searchBar.toLocaleLowerCase())
	);

	// Esto de aquí lo hago para desacoplar lo máximo posible de la API. De esta forma,
	// si en algún momento cambiase algúna propiedad o la estructura, podríamos modificarlo
	// aquí para no tener que cambiar nada del componente.
	const mappedProducts = filteredProducts.map(product => ({
		id: product.id,
		name: product.name,
		price: product.price,
		category: product.category,
		image: product.image,
		description: product.description,
	}));

	return { isLoading: false, productList: mappedProducts };
};
