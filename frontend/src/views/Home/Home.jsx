import { useEffect, useState } from "react";

import Title from "../../components/Title/Title"
import Cardlight from "../../components/Card_light/Card_light"

const Home = (props) => {

    const [topArtisans, setTopArtisans] = useState([])
    
    useEffect(() => {
        const fetchTopArtisans= async () => {
        try {
            const response = await fetch("http://localhost:3000/artisans/top", {
                method: 'GET'
            })

            if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`)
            }

            const data = await response.json()
            console.log(data)
            setTopArtisans(data)

        } catch (err) {
            console.error(err.message)
        }
        }

        fetchTopArtisans()
    }, [])
    
    return (
        <main className="container-fluid">
            <Title 
                title= "Comment trouver mon artisan ?"
                subTitle= "1. Choisir la catégorie d’artisanat dans le menu"
                arianeList={['Choisir la catégorie']}
            />
            <div className="container-lg">
                <form action="#" method="GET" className="mb-4 col-lg-3">
                    <select name="categoriesSelection" id="categoriesSelection" className="form-select p-1 mb-4">
                        <option defaultValue='#' disabled>Sélectionez une catégorie</option>
                        {props.categories.map((category) => {
                            return (
                                <option value={category.id}>{category.name}</option>
                            )
                        })}
                        <option value="1">Alimentation</option>
                        <option value="2">Services</option>
                    </select>
                    <input type="submit" value="Rechercher" className="btn btn-primary"/>
                </form>
                <hr />
                <h3>Nos meilleurs artisans</h3>
                {topArtisans.map((artisan) => {
                    return (
                        <Cardlight 
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