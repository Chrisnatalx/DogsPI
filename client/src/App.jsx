import { Routes, Route } from 'react-router-dom';
import { WelcomeView } from './views/WelcomeView';
import { Home } from './components/Home/Home';


function App() {
	return (
		// <div className="App">
		// 	<WelcomeView />
		// </div>
		<>
			<Routes>
				<Route path='/' element={<WelcomeView />}></Route>
				<Route path='/home' element={<Home />} ></Route>
			</Routes>
		</>
	);
}

export default App;
