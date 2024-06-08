import {useEffect, useReducer, useRef} from 'react';
import classnames from 'classnames';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { INITIAL_STATE, formReducer } from './JournalForm.state';



const JournalForm = ({onSubmit}) => {
	let cn = classnames;

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef();

	let focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;		
		}

	};
	

	useEffect(() => {
		let timerId;
		if(!isValid.date || !isValid.text || !isValid.title){
			focusError(isValid);
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
			dispatchForm({type:'CLEAR'});
		}
	},[isFormReadyToSubmit, values, onSubmit]);
	

	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({type:'SUBMIT'});
	};

	const onChange = (e) => {
		dispatchForm({type:'SET_VALUE', payload:{ [e.target.name] : e.target.value}});

	};
	

	return (
		
		<form className={styles.form} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' ref={titleRef} 
					value={values.title} onChange={onChange} placeholder='Заголовок для новй записи'
					className={cn(styles.title, styles.input,{[styles.invalid]: !isValid.title })}/>
			</div>
            
			<div className={styles['form-info']}>
				<div className={styles['form-row']}>
					<label htmlFor='date' className={styles['form-label']}>
						<img src="/date.svg" alt='Иконка календаря'/>
						<span>Дата</span>
					</label>
					<input type='date' name='date' id='date' value={values.date} onChange={onChange}
						className={cn(styles['input-label'], {[styles.invalid]: !isValid.date })}/> 
				</div>

				<div className={styles['form-row']}>
					<label htmlFor='tag' className={styles['form-label']} value={values.tag} onChange={onChange} >
						<img src="/tag.svg" alt='Иконка Метки'/>
						<span>Метки</span>
					</label>
					<input type='text'  name='tag' id='tag' className={cn(styles['input-label'])} ref={dateRef}/>
				</div>

			</div>
			
			<textarea name='text' value={values.text} placeholder='Здесь будет текст ...' ref={textRef}
				onChange={onChange} className={cn(styles.text, styles.input, styles['input-text'], {[styles.invalid]: !isValid.text })}>
			</textarea>
			<div>
				<Button text='Сохранить'/>
			</div>
			
		</form>
			
	
	);
};

export default JournalForm;