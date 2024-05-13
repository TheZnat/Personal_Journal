
import styles from './JournalForm.module.css';
import Button from '../Button/Button';

const JournalForm = ({onSubmit}) => {
	

	const addJournalItem = (e) => {
		e.preventDefault();
		const fromData = new FormData(e.target);
		const fromProps = Object.fromEntries(fromData);
		onSubmit(fromProps);

	};
	

	return (
		<form className={styles.form} onSubmit={addJournalItem}>
			<input type='text' name='title'/>
			<input type='date' name='date'/> 
			<input type='text'  name='tag' />
			<textarea name='text'></textarea>
			<Button text='Сохранить'/>
		</form>
	);
};

export default JournalForm;