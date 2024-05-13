import './App.css';
import Body from './layout/Body/Body';
import Leftpanel from './layout/Leftpanel/Leftpanel';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Header from './components/Header/Header';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';


function App() {

	const INITIALIZATION_DATA = [
		// {
		// 	id: 1,
		// 	title: 'Подготовка к обновлению курсов',
		// 	text: 'Сегодня провёл весь день за..' ,
		// 	data: new Date()
		// },
		// {
		// 	id: 2,
		// 	title: 'Подготовка к обновлению курсов',
		// 	text: 'Сегодня провёл весь день за..' ,
		// 	data: new Date()
		// }
	];

	const [items, SetItems] = useState(INITIALIZATION_DATA);

	const addItem = (item) =>{
		SetItems(oldItem => [...oldItem, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id: Math.max(...oldItem.map(i => i.id)) + 1
		}]);
	};

	
	return (
		<div className='app'>
			<Leftpanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={items}/>				
			</Leftpanel>

			<Body>
				<p>Body</p>
				<JournalForm onSubmit={addItem} />
				
		
			</Body>	
			
		</div> 
	);
}

export default App;
