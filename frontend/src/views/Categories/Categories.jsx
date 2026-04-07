import { useParams } from "react-router";
import { useArtisansByCategory } from "../../hooks/categories"

import Title from '../../components/Title/Title'
import Cardlight from "../../components/Card_light/Card_light"

const Categories = (props) => {
    const { idCategory } = useParams();

    const artisans = useArtisansByCategory(idCategory)
    console.log(artisans)
    const [category] = props.categories.filter((category) => {
        return category.id === parseInt(idCategory)
    } )

    return (
        <>
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <title>Trouve ton artisan ! - Categories</title>
            
            <main className="container-fluid">
                <Title 
                    
                    subTitle= "2. Chrosir un artisan."
                    arianeList={['Choisir une catégorie', 'Choisir un artisan']}
                />
                <div className="container-lg ps-lg-5">
                    <hr className="hr hr-blue"/>
                    <h2 class="mb-4">2. Choisir un artisan.</h2>
                    <section>
                        <h3 className="fs-6 mb-4">Liste des artisans dans la catégorie {category.name}</h3>
                        <div className="container-fluid row row-cols-1 row-cols-md-2 g-4 mb-5">
                            {artisans.map((artisan) => {
                                return (
                                    <Cardlight
                                        key={artisan.id}
                                        name={artisan.name}
                                        speciality={artisan.speciality.name}
                                        city={artisan.city}
                                        rate={artisan.rate}
                                        idCategory={artisan.speciality.category.id}
                                        idArtisan={artisan.id}
                                    />
                                )
                            })}
                        </div>
                    </section>
                </div>
                
            </main>
        </>
    )
}

export default Categories