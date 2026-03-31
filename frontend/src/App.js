import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Categories from "./views/Categories/Categories";

import "./App.css";

function App() {

	const [categories, setCategories] = useState([])
	
	useEffect(() => {
		const fetchCategories= async () => {
		try {
			const response = await fetch("http://localhost:3000/categories", {
				method: 'GET'
			})

			if (!response.ok) {
			throw new Error(`Erreur HTTP : ${response.status}`)
			}

			const data = await response.json()
			setCategories(data)

		} catch (err) {
			console.error(err.message)
		}
		}

		fetchCategories()
	}, [])

	return (
		<>
			<Header categories={categories} />
				<Routes>
					<Route path="/" element={<Home categories={categories} />} />
					<Route path="/categories/:idCategory" element={<Categories categories={categories} />} />
				</Routes>
			<Footer />
		</>
	);
}

export default App;
