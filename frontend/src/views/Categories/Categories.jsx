import { useParams } from "react-router";
import { useEffect, useState } from "react";

import Title from '../../components/Title/Title'
import Cardlight from "../../components/Card_light/Card_light"

const Categories = (props) => {
    const { idCategory } = useParams();

    const [artisans, setArtisans] = useState([])
    
    useEffect(() => {
        const fetchCategories= async () => {
        try {
            const response = await fetch("http://localhost:3000/categories/"+idCategory+"/artisans", {
                method: 'GET'
            })

            if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`)
            }

            const data = await response.json()
            setArtisans(data)

        } catch (err) {
            console.error(err.message)
        }
        }

        fetchCategories()
    }, [idCategory])

    const [category] = props.categories.filter((category) => {
        return category.id === parseInt(idCategory)
    } )

    return (
        
        <main className="container-fluid">
            <Title 
                subTitle= "2. Chrosir un artisan."
                arianeList={['Choisir la catégorie', 'Choiri un artisan']}
            />
            <div class="container-lg">
                <h3 className="text-primary">Liste des artisans dans la catégorie {category.name}</h3>
                {artisans.map((artisan) => {
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

export default Categories