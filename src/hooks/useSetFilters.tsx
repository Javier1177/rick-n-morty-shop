import { useProductList } from '../store/productsList/productsList';

export const useSetFilters = () => {
	const setSearchBar = useProductList(state => state.setSearchBar);
	const setPriceOrder = useProductList(state => state.setPriceOrder);

	return { setSearchBar, setPriceOrder };
};
