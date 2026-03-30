import { Routes, Route } from "react-router";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";

import "./App.css";

function App() {
	return (
		<>
			<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			<Footer />
		</>
	);
}

export default App;
