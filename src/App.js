import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculus from './pages/Calculus';
import TableGen from './pages/TableGen';

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route exact path="/" element={ <Calculus/> } />
			<Route exact path="/tables" element={ <TableGen/> } />
		</Routes>
	   </BrowserRouter>
	);
}
export default App;
