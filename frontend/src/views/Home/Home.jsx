import { useNavigate } from "react-router";
import { useTopArtisans } from "../../hooks/artisans"

import Title from "../../components/Title/Title"
import Cardlight from "../../components/Card_light/Card_light"

const Home = (props) => {
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const select = document.querySelector('select')
        const idCategory  = select.value

        navigate(`categories/${idCategory}`);
    };
    const topArtisans = useTopArtisans()
    
    return (
        <>
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <title>Trouve ton artisan ! - Accueil</title>
            <main className="container-fluid">
                <Title 
                    arianeList={['Choisir une catégorie']}
                />
                <section className="container-lg ps-lg-5">
                        <hr className="hr hr-blue"/>
                        <h2 className="mb-4">1. Choisir la catégorie d’artisanat dans le menu.</h2>
                        <form onSubmit={handleSubmit} action="#" method="GET" className="mb-4 col-lg-3">
                            <select name="idCategory" id="idCategory" className="form-select p-1 mb-4">
                                <option defaultValue='#' disabled>Sélectionez une catégorie</option>
                                {props.categories.map((category) => {
                                    return (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    )
                                })}
                            </select>
                            <input type="submit" value="Rechercher" className="btn btn-primary"/>
                        </form>
                        <hr className="hr hr-green"/>
                        <section>
                            <h3 className="fs-6 mb-4">Nos meilleurs artisans</h3>
                        
                            <div className="container-fluid">
                                <ul className="nav row row-cols-1 row-cols-md-2 g-4 mb-5">
                                    {topArtisans.map((artisan) => {
                                        const idCategory = artisan.speciality.category.id
                                        return (
                                            <li className="nav-item px-0" key={artisan.id}>
                                                <Cardlight
                                                    name={artisan.name}
                                                    speciality={artisan.speciality.name}
                                                    city={artisan.city}
                                                    rate={artisan.rate}
                                                    idCategory={idCategory}
                                                    idArtisan={artisan.id}
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        
                        </section>
                </section>
            </main>
        
        </>
    )
}

export default Home