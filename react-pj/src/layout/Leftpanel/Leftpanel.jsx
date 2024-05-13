import styles from './Leftpanel.module.css';

const Leftpanel = ({children}) => {
	return (
		<div className={styles.panel}>
			{children}
		</div>
	);
};

export default Leftpanel;