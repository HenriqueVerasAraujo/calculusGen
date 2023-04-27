import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculus from './pages/Calculus';
import TableGen from './pages/TableGen';
import TableGenHard from './pages/TableGenHard';
import TableUltra from './pages/TableUltra'

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route exact path="/" element={ <Calculus/> } />
			<Route exact path="/tables" element={ <TableGen/> } />
			<Route exact path="/hard" element={ <TableGenHard/> } />
			<Route exact path="/ultra" element={ <TableUltra/> } />
		</Routes>
	   </BrowserRouter>
	);
}
export default App;
