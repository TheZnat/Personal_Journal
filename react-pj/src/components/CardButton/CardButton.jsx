import'./CardButton.css';

const CardButton = ({children, className}) => {
	const cl = 'cardButton' + (className ? ' ' + className : '');
	return (
		<button className={cl}>
			{children}
		</button>
	);
};

export default CardButton;