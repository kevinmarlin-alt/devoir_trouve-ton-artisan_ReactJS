import { Link } from 'react-router'

import Title from "../../components/Title/Title"

const Error404 = () => {
    return (
        <>
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <title>Trouve ton artisan ! - Erreur 404</title>

            <main className="container-fluid mb-5">
                <Title 
                    subTitle="Page non trouvée"
                />
                <section class="container-lg">
                    <h2 class="mb-4">Page non trouvée.</h2>
                    <p>Cette page n'éxiste pas !</p>
                    <img 
                        src="/assets/images/404.jpg" 
                        alt="Illustration monochrome bleu de personnages qui portent le nombre 404" 
                    />
                    <hr />
                    <Link to="/"><button type='button' className='btn btn-primary'>Revenir à la page d'accueil</button></Link>
                </section>

            </main>
        </>
    )
}

export default Error404