import './productCard.styles.scss';

const baseClass = 'productCard';

const ProductCard = () => {
	return (
		<div className={`${baseClass}-container`}>
			<img src={''} alt={``} />
			<div className={`${baseClass}-footer`}>
				<span className={`${baseClass}-name`}>name</span>
				<span className={`${baseClass}-price`}>price</span>
			</div>
		</div>
	);
};

export default ProductCard;
