import { useEffect } from 'react';
import { useProductList } from '../store/productsList/productsList';

export const useFetchMovies = () => {
	const fetchProducts = useProductList(state => state.fetchProductList);
	const productList = useProductList(state => state.productList);

	useEffect(() => {
		fetchProducts();
	}, []);

	if (!productList.length) return { isLoading: true, productList };

	// Esto de aquí lo hago para desacoplar lo máximo posible de la API. De esta forma,
	// si en algún momento cambiase algúna propiedad o la estructura, podríamos modificarlo
	// aquí para no tener que cambiar nada del componente.

	const mappedProducts = productList.map(product => ({
		id: product.id,
		name: product.name,
		price: product.price,
		category: product.category,
		image: product.image,
		description: product.description,
	}));

	return { isLoading: false, productList: mappedProducts };
};
