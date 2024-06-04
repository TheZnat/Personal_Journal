import styles from'./JournalItem.module.css';

const JournalItem = ({title, text, date }) => {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
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