import style from './body.module.css';

const Body = ({children}) => {
	return (
		<div className={style.container}>{children}

            
		</div>
	);
};

export default Body;