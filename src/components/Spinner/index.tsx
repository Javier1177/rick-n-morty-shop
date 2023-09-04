import './spinner.styles.scss';

const baseClass = 'spinner';

const Spinner = () => {
	return (
		<div className={`${baseClass}-container`}>
			<div className={`${baseClass}-overlay`}></div>
		</div>
	);
};

export default Spinner;
