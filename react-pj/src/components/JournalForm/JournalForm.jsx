import {useState} from 'react';
import classnames from 'classnames';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';


const JournalForm = ({onSubmit}) => {
	let cn = classnames;

	const [formValidState, SetFormValidState] = useState({
		title: true,
		date: true,
		text: true
	});
	

	const addJournalItem = (e) => {
		e.preventDefault();
		const fromData = new FormData(e.target);
		const fromProps = Object.fromEntries(fromData);
		let isFormValid = true;
		if (!fromProps.title?.trim().length) {
			SetFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		} else{
			SetFormValidState(state => ({...state, title: true}));
		}
		if (!fromProps.text?.trim().length) {
			SetFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		} else{
			SetFormValidState(state => ({...state, text: true}));
		}
		if (!fromProps.date) {
			SetFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		} else{
			SetFormValidState(state => ({...state, date: true}));
		}
		if (!isFormValid){
			return ;
		}
		onSubmit(fromProps);

	};
	

	return (
		
		<form className={styles.form} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' placeholder='Заголовок для новй записи'
					className={cn(styles.title, styles.input,{[styles.invalid]: !formValidState.title })}/>
			</div>
            
			<div className={styles['form-info']}>
				<div className={styles['form-row']}>
					<label htmlFor='date' className={styles['form-label']}>
						<img src="/date.svg" alt='Иконка календаря'/>
						<span>Дата</span>
					</label>
					<input type='date' name='date' id='date'
						className={cn(styles['input-label'], {[styles.invalid]: !formValidState.date })}/> 
				</div>


				<div className={styles['form-row']}>
					<label htmlFor='tag' className={styles['form-label']}>
						<img src="/tag.svg" alt='Иконка Метки'/>
						<span>Метки</span>
					</label>
					<input type='text'  name='tag' id='tag' className={cn(styles['input-label'])}/>
				</div>

			</div>
			
			<textarea name='text' placeholder='Здесь будет текст ...'
				className={cn(styles.text, styles.input, styles['input-text'], {[styles.invalid]: !formValidState.text })}></textarea>
			<div>
				<Button text='Сохранить'/>
			</div>
			
		</form>
			
	
	);
};

export default JournalForm;