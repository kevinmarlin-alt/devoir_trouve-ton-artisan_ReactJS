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
        <main className="container-fluid">
            <Title 
                
                subTitle= "1. Choisir la catégorie d’artisanat dans le menu."
                arianeList={['Choisir la catégorie']}
            />
            <div className="container-lg">
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
                <hr />
                <h3 className="fs-6">Nos meilleurs artisans</h3>
                {topArtisans.map((artisan) => {
                    return (
                        <Cardlight 
                            key={artisan.id}
                            name={artisan.name}
                            speciality={artisan.speciality.name}
                            city={artisan.city}
                            rate={artisan.rate}
                        />
                    )
                })}
            </div>  
        </main>
    )
}

export default Home