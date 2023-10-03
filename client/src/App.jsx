import { Routes, Route, useLocation } from 'react-router-dom';
import { WelcomeView } from './views/WelcomeView';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Detail } from './components/Detail/Detail';



function App() {
	const location = useLocation();
	return (
		// <div className="App">
		// 	<WelcomeView />
		// </div>
		<>
			{location.pathname !== "/" && (
				<Navbar />
			)}
			<Routes>
				<Route path='/' element={<WelcomeView />}></Route>
				<Route path='/home' element={<Home />} ></Route>
				<Route path='/detail/:id' element={<Detail />} ></Route>
			</Routes>
		</>
	);
}

export default App;
