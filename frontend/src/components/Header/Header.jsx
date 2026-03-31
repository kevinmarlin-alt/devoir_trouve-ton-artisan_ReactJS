import { Link, NavLink } from 'react-router'



const Header = (props) => {

		
	return (
		<header className="shadow mb-4">
			<div className="container-lg">
				<nav className="navbar navbar-expand-lg p-0">
					{/* navbar */}
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							src="assets/images/logo_light.png"
							alt="Trouve ton artisan ! Avec la région Auvergne-Rhône-Alpes"
							height="54"
							// width= "208"
						/>
					</Link>
	
				<div className="d-flex align-items-center gap-4 d-lg-none">
					<img
						data-bs-toggle="collapse"
						data-bs-target="#navbarSearch"
						aria-controls="navbarSearch"
						role="button"
						src="assets/icons/search.svg"
						alt=""
						height="32"
						width="32"
					/>
					<div
						className="d-flex flex-column align-items-center "
						data-bs-toggle="collapse"
						data-bs-target="#navbarLinks"
						aria-controls="navbarLinks"
						role="button"
					>
						<img
							src="assets/icons/menu.svg"
							alt=""
							height="32"
							width="32"
						/>
						<p className="fs-6 mb-0">Menu</p>
					</div>
				</div>
			</div>
			{/* collapse search & links */}
			<div className="container-fluid">
				<div className="container-fluid p-0">
					<div
						className="collapse navbar-collapse justify-content-end pt-2 mb-4 mb-lg-0"
						id="navbarSearch"
					>
						<form
							className="d-flex align-items-center border-bottom border-end border-primary-subtle py-1 px-2"
							role="search"
						>
							<input
								id="search"
								className="border-0 me-2"
								type="search"
								placeholder="Rechercher"
								aria-label="Search"
							/>
							<label htmlFor="search">
								<img
								src="assets/icons/search.svg"
								alt=""
								height="20"
								width="20"
								/>
							</label>
						</form>
					</div>
					<div
					className="collapse navbar-collapse justify-content-end mb-4 mb-lg-0"
					id="navbarLinks"
					>
						<div>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								{props.categories.map((category) => {
									return (
									<li className="nav-item m-2" key={category.id}>
										<NavLink to={'/categories/'+category.id} className="text-decoration-none text-black" >{category.name}</NavLink>
									</li>)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
		</div>
		</header>
	);

};

export default Header;
