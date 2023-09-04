import { useEffect } from 'react';
import { useProductList } from './store/productsList/productsList';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
	const fetchProducts = useProductList(state => state.fetchProductList);

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<Layout>
				<Home />
			</Layout>
		</>
	);
}

export default App;
