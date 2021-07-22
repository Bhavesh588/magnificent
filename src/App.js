import './App.css';

import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
}

export default App;
