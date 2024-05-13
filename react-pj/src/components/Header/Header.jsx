import styles from './Header.module.css';

const Header = () => {
	return (
		<div>
			<img src='/logo.svg' alt='logo' className={styles.logo}/>
		</div>
	);
};

export default Header;