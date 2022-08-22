import "./Loader.scss";

const Loader = () => {
	return (
		<div className='loader flex justify-center my-10'>
			<div className='loading-icon'></div>
			<div className='loading-icon'></div>
			<div className='loading-icon'></div>
			<div className='loading-icon'></div>
		</div>
	);
};

export default Loader;
