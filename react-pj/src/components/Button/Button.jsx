import style from './Button.module.css';

const Button = ({text, onClick}) => {
	return (
		<button className={style.button} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;