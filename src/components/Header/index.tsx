import { useRef, useState } from 'react';

import { useSetFilters } from '../../hooks/useSetFilters';
import { PriceOrder } from '../../store/productsList/types';
import Modal from '../Modal';
import Cart from '../Cart';

import CartIcon from '../../assets/cart-white.svg';

import './header.styles.scss';

const baseClass = 'header';

const Header = () => {
	const searchRef = useRef<HTMLInputElement | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { setPriceOrder, setSearchBar } = useSetFilters();

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
			<div className={`${baseClass}-cart`}>
				<img
					width="50px"
					height="50px"
					src={CartIcon}
					alt="My SVG"
					onClick={() => setIsModalOpen(true)}
				/>
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<Cart />
				</Modal>
			</div>
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
