import { Routes, Route } from "react-router";
import { useCategories } from "./hooks/categories"

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Categories from "./views/Categories/Categories";
import Artisan from "./views/Artisan/Artisan";
import Success from "./views/Success/Success";
import Error404 from "./views/Error404/Error404";
import Pending from "./views/Pending/Pending";

import './styles/main.css'

function App() {

	const categories = useCategories()
	
	return (
		<>
			<Header categories={categories} />
				<Routes>
					<Route path="/" element={<Home categories={categories} />} />
					<Route path="/categories/:idCategory" element={<Categories categories={categories} />} />
					<Route path="/categories/:idCategory/artisans/:idArtisan" element={<Artisan />} />
					<Route path="/categories/:idCategory/artisans/:idArtisan/success" element={<Success />} />
					<Route path="/pending" element={<Pending />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			<Footer />
		</>
	);
}

export default App;
