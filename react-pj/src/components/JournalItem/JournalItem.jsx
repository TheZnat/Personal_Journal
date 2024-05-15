import styles from'./JournalItem.module.css';

const JournalItem = ({title, text, data }) => {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(data);
	return (
		<div>
			<h2 className={styles.header}>{title}</h2>
			<div className={styles.body}>
				<div className={styles.date}>{formatedDate}</div>
				<div className={styles.text}>{text}</div>
			</div>
		</div>
	);
};

export default JournalItem;