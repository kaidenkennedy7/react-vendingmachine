import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chocolate from './Chocolate';
import Chips from './Chips';
import Icecream from './Icecream';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/chocolate' element={<Chocolate/>} />
					<Route path='/chips' element={<Chips/>} />
					<Route path='/icecream' element={<Icecream/>}/>
					<Route exact path='/' element={<VendingMachine/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;