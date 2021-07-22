import './App.css';

import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

	const hideNav = () => {
		document.getElementsByClassName('sidenav-overlay')[0].style.display = 'none'
		document.getElementsByClassName('sidenav-overlay')[0].style.opacity = '0'
		document.getElementsByClassName('sidenav')[0].style.transform = 'translateX(-105%)'
	}

	return (
		<div className="App">
			<Header />
			<Main />
			<div className="sidenav-overlay" onClick={hideNav} style={{display: 'none'}}></div>
		</div>
	);
}

export default App;
