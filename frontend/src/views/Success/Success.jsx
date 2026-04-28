import { Link } from 'react-router'

import Title from "../../components/Title/Title"

const Success = () => {
    return (
        <>
            <meta
                name="description"
                content="Cette page vous informe de la réussite de l'envoie de votre message à l'artisan que vous avez souhaitez solicité."
            />
            <title>Trouve ton artisan ! - Message envoyé</title>
            <main className="container-fluid mb-5">
                <Title 
                    subTitle="4. Une réponse sera apportée sous 48h"
                    arianeList={['Choisir la catégorie', 'Choiri un artisan', 'Contacter un artisan', 'Message envoyé']}
                />
                <section className="container-lg ps-lg-5">
                    <hr className="hr hr-blue"/>
                    <h2 class="mb-4">4. Une réponse sera apportée sous 48h.</h2>
                    <img 
                        src="/assets/images/envoyer.jpg" 
                        alt="Illustration monochrome bleu d'une enveloppe avec deux personnages et un chat"
                        style={{width: '100%', maxWidth: 700}}
                        className='mx-auto'
                    />
                    <hr className="hr hr-green"/>
                    <p>Si vous le souhaitez, vous pouvez effectuer une nouvelle recherche, en cliquant <Link to="/">ici</Link>.</p>
                </section>

            </main>
        </>
    )
}

export default Success