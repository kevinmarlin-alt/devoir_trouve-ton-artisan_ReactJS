import { useEffect, useState } from "react"
import { Link, NavLink } from 'react-router'
import { useArtisansByName } from "../../hooks/artisans"

import Cardlight from "../Card_light/Card_light"

import "./Header.css"

const Header = (props) => {
	const [name, setName] = useState(null)

	useEffect(() => {
		const searchElement = document.getElementById('search')
		const handleSearch = (e) => {
			console.log(e.target.value)
			// if(e.target.value !== "") {
				setName(e.target.value)
			// 	return
			// }
			
		}
		searchElement.addEventListener('input', handleSearch)
		
		return () => {
			searchElement.removeEventListener('input', handleSearch)
		}
	}, []);
	
	const artisansByName = useArtisansByName(name)
	const collapseSearch = document.getElementById('navbarSearch')
	const btnMenu = document.getElementById('nav__img-menu')
	const searchWrapper = document.getElementById('searchWrapper')
	const searchInput = document.getElementById('search')
	
	function clearSearch(e) {
		searchWrapper.innerHTML = ""
		searchInput.value = ""
	}


	function HandleClickMenu() {
		btnMenu.classList.toggle("open")

		btnMenu.classList.contains("open") 
			? btnMenu.src = '/assets/icons/cross-blue.svg' 
			: btnMenu.src = "/assets/icons/menu-blue.svg"
		
		if(collapseSearch.classList.contains('show')) collapseSearch.classList.remove('show')

		clearSearch()
		
	}

	const collapseLinks = document.getElementById('navbarLinks')
	function handleClickSearch() {
		if(collapseLinks.classList.contains('show')) {
			collapseLinks.classList.remove('show')
			btnMenu.src = "/assets/icons/menu-blue.svg"
			btnMenu.classList.remove("open")
		}
		clearSearch()
		
	}

	return (
		<header className="shadow mb-4 bg-white">
			<div className="container-lg p-3">
				<nav className="navbar navbar-expand-lg nav-underline p-0 mb-lg-4">
					{/* navbar */}
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							<img
								src="assets/images/logo_light.png"
								alt="Trouve ton artisan ! Avec la région Auvergne-Rhône-Alpes"
								height="40px"
								// width= "208"
							/>
						</Link>
		
						<div className="d-flex align-items-center gap-3 d-lg-none">
							<img
								data-bs-toggle="collapse"
								data-bs-target="#navbarSearch"
								aria-controls="navbarSearch"
								role="button"
								src="/assets/icons/search-blue.svg"
								alt=""
								height="40"
								width="40"
								onClick={handleClickSearch}
							/>
							<div
								className="d-flex flex-column align-items-center "
								data-bs-toggle="collapse"
								data-bs-target="#navbarLinks"
								aria-controls="navbarLinks"
								role="button"
							>
								<img
									id="nav__img-menu"
									src="/assets/icons/menu-blue.svg"
									alt=""
									height="24"
									width="24"
									onClick={HandleClickMenu}
								/>
								<p className="mb-0 pt-1" style={{fontSize: '0.8rem', color: '#0074c7'}}>Menu</p>
							</div>
						</div>
					</div>
					{/* collapse search & links */}
					<div className="container-fluid">
						<div className="container-fluid p-0">
							{/* collapse search */}
							<div
								className="collapse navbar-collapse justify-content-end pt-2 mb-4 mb-lg-0"
								id="navbarSearch"
							>
								<div className="position-relative ">
									<form
										id="search__form"
										className="d-flex align-items-center border-bottom border-end border-primary-subtle py-1 px-2"
										role="search"
									>
										<input
											id="search"
											className="border-0 me-2 flex-grow-1"
											type="search"
											placeholder="Rechercher par nom"
											aria-label="Search"
										/>
										<label htmlFor="search">
											<img
											src="/assets/icons/search-blue.svg"
											alt=""
											height="20"
											width="20"
											/>
										</label>
									</form>
								
								</div>
							</div>
							{/* colapse links */}
							<div
							className="w-auto collapse navbar-collapse justify-content-end mb-4 mb-lg-0"
							id="navbarLinks"
							>
								<div>
									<ul className="nav navbar-nav nav-underline  mb-2 mb-lg-0 flex-nowrap">
										{props.categories.map((category) => {
											return (
											<li className="nav-item m-2" key={category.id}>
												<NavLink to={`/categories/${category.id}`} className="nav-link text-black fw-normal px-0" >{category.name}</NavLink>
											</li>)
										})}
									</ul>
								</div>
							</div>

						</div>
					</div>
				</nav>
				<div className="container-fluid">
					<ul className="nav row row-cols-1 row-cols-lg-2 g-4" id="searchWrapper">
						{artisansByName.length > 0 && (
								artisansByName.map((artisan) => {
									const idCategory = artisan.speciality.category.id
									return (
									<li className="nav-item" onClick={HandleClickMenu}>
										<Cardlight
											key={artisan.id}
											name={artisan.name}
											speciality={artisan.speciality.name}
											city={artisan.city}
											rate={artisan.rate}
											idCategory={idCategory}
											idArtisan={artisan.id}
										/>
									</li>
								)
							})
						)}
					</ul>
				</div>
			</div>
		</header>
	);

};

export default Header;
