import './spinner.styles.scss';

const baseClass = 'spinner';

const Spinner = () => {
	return (
		<div className={baseClass}>
			<div className={`${baseClass}-container`}>
				<div className={`${baseClass}-overlay`}></div>
			</div>
		</div>
	);
};

export default Spinner;
