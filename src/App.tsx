import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import './styles/App.scss';

const App = () => {
	return (
		<Router>
			<Header />
			<AppRouter />
		</Router>
	)
}

export default App;
