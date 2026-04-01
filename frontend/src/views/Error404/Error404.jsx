import { Link } from 'react-router'

import Title from "../../components/Title/Title"

const Error404 = () => {
    return (
        <main className="container-fluid mb-5">
            <Title 
                subTitle="Page non trouvée"
            />
            <div class="container-lg">
                <p>Cette page n'éxiste pas !</p>
                <img 
                    src="/assets/images/404.jpg" 
                    alt="Illustration monochrome bleu de personnages qui portent le nombre 404" 
                />
                <hr />
                <Link to="/"><button type='button' className='btn btn-primary'>Revenir à la page d'accueil</button></Link>
            </div>

        </main>
    )
}

export default Error404