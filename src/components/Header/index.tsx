import { useRef } from 'react';
import './header.styles.scss';
import { useProductList } from '../../store/productsList/productsList';
import { PriceOrder } from '../../store/productsList/types';

const baseClass = 'header';

const Header = () => {
	const searchRef = useRef<HTMLInputElement | null>(null);
	const setSearchBar = useProductList(state => state.setSearchBar);
	const setPriceOrder = useProductList(state => state.setPriceOrder);

	const handleSumbit = (event: React.FormEvent) => {
		event.preventDefault();
		const searchValue = searchRef.current?.value;
		setSearchBar(searchValue || '');
	};

	const onChangeOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault();
		const priceOrder = event.target.value as PriceOrder;
		if (priceOrder === 'DESC' || priceOrder === 'ASC') {
			setPriceOrder(priceOrder);
		}
	};

	return (
		<header className={baseClass}>
			<h1>Rick n&apos; Morty Shop</h1>
			<form className={`${baseClass}-filter`} onSubmit={handleSumbit}>
				<input ref={searchRef} placeholder="Search for a product..." />
				<button type="submit">Buscar</button>
			</form>
			<div className={`${baseClass}-price-order`}>
				<label htmlFor="priceOrder">Ordenar por precio:</label>
				<select onChange={onChangeOrder} defaultValue="ASC" id="priceOrder">
					<option value="ASC">Ascendente</option>
					<option value="DESC">Descendiente</option>
				</select>
			</div>
		</header>
	);
};

export default Header;
