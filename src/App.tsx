import { useEffect } from 'react';
import './App.css';
import { useProductList } from './store/productsList/productsList';

function App() {
	const fetchProducts = useProductList(state => state.fetchProductList);
	const productList = useProductList(state => state.productList);

	useEffect(() => {
		fetchProducts();
	}, []);

	return <>hey</>;
}

export default App;
