import { Link } from 'react-router'

import Title from "../../components/Title/Title"

import "./Error404.css"

const Error404 = () => {
    return (
        <main>
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <title>Trouve ton artisan ! - Erreur 404</title>

            <div className="container-fluid mb-5">
                <Title 
                    title="Erreur 404"
                />
                <section class="container-lg ps-lg-5">
                    <hr className="hr hr-blue"/>
                    <h2 class="mb-4">Page non trouvée.</h2>
                    <p>Vérifiez l'adresse ou retournez à l'accueil</p>
                    <img
                        id='img404'
                        src="/assets/images/404.jpg"
                        alt="Illustration monochrome bleu de personnages qui portent le nombre 404"
                        width="1482"
                        height="854"
                    />
                    <hr />
                    <Link to="/"><button type='button' className='btn btn-primary'>Revenir à la page d'accueil</button></Link>
                </section>
            </div>
        </main>
    )
}

export default Error404