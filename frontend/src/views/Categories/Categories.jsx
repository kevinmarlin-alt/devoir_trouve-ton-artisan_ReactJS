import { useParams } from "react-router";
import { useArtisansByCategory } from "../../hooks/categories"

import Title from '../../components/Title/Title'
import Cardlight from "../../components/Card_light/Card_light"

const Categories = (props) => {
    const { idCategory } = useParams();

    const artisans = useArtisansByCategory(idCategory)

    const [category] = props.categories.filter((category) => {
        return category.id === parseInt(idCategory)
    } )

    return (
        
        <main className="container-fluid">
            <Title 
                
                subTitle= "2. Chrosir un artisan."
                arianeList={['Choisir la catégorie', 'Choiri un artisan']}
            />
            <div className="container-lg">
                <h3 className="fs-6">Liste des artisans dans la catégorie {category.name}</h3>
                {artisans.map((artisan) => {
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

export default Categories