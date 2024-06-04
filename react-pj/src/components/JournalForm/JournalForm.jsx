import {useEffect, useReducer} from 'react';
import classnames from 'classnames';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { INITIAL_STATE, formReducer } from './JournalForm.state';



const JournalForm = ({onSubmit}) => {
	let cn = classnames;

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;

	useEffect(() => {
		let timerId;
		if(!isValid.date || !isValid.text || !isValid.title){
			timerId = setInterval(() => {
				dispatchForm({type:'RESET_VALIDATION'});
			},1700);
		}
		return() =>{
			clearTimeout(timerId);
		};

	},[isValid]);
	
	useEffect(() => {
		if(isFormReadyToSubmit){
			onSubmit(values);
		}
	},[isFormReadyToSubmit]);
	

	const addJournalItem = (e) => {
		e.preventDefault();
		const fromData = new FormData(e.target);
		const fromProps = Object.fromEntries(fromData);
		dispatchForm({type:'SUBMIT', payload:fromProps});
	

	};
	

	return (
		
		<form className={styles.form} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' placeholder='Заголовок для новй записи'
					className={cn(styles.title, styles.input,{[styles.invalid]: !isValid.title })}/>
			</div>
            
			<div className={styles['form-info']}>
				<div className={styles['form-row']}>
					<label htmlFor='date' className={styles['form-label']}>
						<img src="/date.svg" alt='Иконка календаря'/>
						<span>Дата</span>
					</label>
					<input type='date' name='date' id='date'
						className={cn(styles['input-label'], {[styles.invalid]: !isValid.date })}/> 
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
				className={cn(styles.text, styles.input, styles['input-text'], {[styles.invalid]: !isValid.text })}></textarea>
			<div>
				<Button text='Сохранить'/>
			</div>
			
		</form>
			
	
	);
};

export default JournalForm;