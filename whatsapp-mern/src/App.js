import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className="App">
			<h1>lets build a whatsapp clone</h1>
			<Sidebar />
			<Chat />
		</div>
	);
}

export default App;
