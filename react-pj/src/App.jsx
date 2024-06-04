import './App.css';
import Body from './layout/Body/Body';
import Leftpanel from './layout/Leftpanel/Leftpanel';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Header from './components/Header/Header';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';


function App() {

	const [items, SetItems] = useState([]);
	
	useEffect(()=> {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data){
			SetItems(data.map(item =>({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(()=> {
		if (items.length){
			localStorage.setItem('data', JSON.stringify(items));
		}
	},[items]);

	const addItem = item =>{
		SetItems(oldItem => [...oldItem, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id: oldItem.length > 0 ? Math.max(...oldItem.map(i => i.id)) + 1 : 1
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
				<JournalForm onSubmit={addItem} />
			</Body>	
		</div> 
	);
}

export default App;
