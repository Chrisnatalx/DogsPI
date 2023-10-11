import { Routes, Route, useLocation } from 'react-router-dom';
import { WelcomeView } from './views/WelcomeView';
import { Detail } from './components/Detail/Detail';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Form } from './components/form/Form';
import { DeleteDog } from './components/form/DeleteDog';
import { UpdateDog } from './components/form/UpdateDog';
import './App.css'


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
				<Route path='/form' element={<Form />} ></Route>
				<Route path='/delete' element={<DeleteDog />} ></Route>
				<Route path='/update' element={<UpdateDog />} ></Route>

			</Routes>
		</>
	);
}

export default App;
