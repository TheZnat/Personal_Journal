import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

const JournalList = ({items}) => {
	if(items.length === 0){
		return <p>Записей пока нет, добавть первую</p>;
	}
	
	const sortItem = (a,b)=>{
		if (a.date < b.date){
			return 1;
		} else{
			return -1;
		}
	};
	
	return (
		<div className={styles.list}>
			{items.sort(sortItem).map(el =>(
				<CardButton key={el.id}>
					<JournalItem
						{...el}
					/>
				</CardButton>
			))}
		</div>
	);
};

export default JournalList;