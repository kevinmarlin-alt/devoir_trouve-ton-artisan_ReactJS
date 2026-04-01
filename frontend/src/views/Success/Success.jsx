import { Link } from 'react-router'

import Title from "../../components/Title/Title"

const Success = () => {
    return (
        <main className="container-fluid mb-5">
            <Title 
                subTitle="4. Une réponse sera apportée sous 48h"
                arianeList={['Choisir la catégorie', 'Choiri un artisan', 'Contacter un artisan', 'Message envoyé']}
            />
            <div className="container-lg">
                <img 
                    src="/assets/images/envoyer.jpg" 
                    alt="Illustration monochrome bleu d'une enveloppe avec deux personnages et un chat"
                />
                <hr />
                <p>Si vous le souhaitez, vous pouvez effectuer une nouvelle recherche, en cliquant <Link to="/">ici</Link>.</p>
            </div>

        </main>
    )
}

export default Success