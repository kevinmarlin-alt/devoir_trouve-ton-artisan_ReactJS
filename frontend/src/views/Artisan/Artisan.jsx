import { useParams } from "react-router";
import { useArtisan } from '../../hooks/artisans'
import { specialities } from "../../services/data";

import Title from '../../components/Title/Title'

const Artisan = () => {
    const { id } = useParams();
    const artisan = useArtisan(id)

    const [speciality] = specialities.filter((speciality) => speciality.name === artisan?.speciality?.name)
    console.log(artisan)

    if (!artisan) {
        return (
            <main className="container-fluid">
                <Title 
                    subTitle="3. Le contacter via le formulaire de contact."
                    arianeList={['Choisir la catégorie', 'Choiri un artisan', 'Contacter un artisan']}
                />
                <div className="container-lg">
                    <p>Chargement en cours...</p>
                </div>
            </main>
        )
    }

    return (
        <main className="container-fluid">
            <Title 
                subTitle="3. Le contacter via le formulaire de contact."
                arianeList={['Choisir la catégorie', 'Choiri un artisan', 'Contacter un artisan']}
            />
            <div className="container-lg mb-5">
               <div className="card" >
                    <img src={`/assets/images/artisans/${speciality?.src}`} className="card-img-top" alt={speciality?.alt}/>
                    <div className="card-body">
                        <div className="mb-3">
                            {[...Array(5)].map((value, index) => (
                                <img 
                                    key={index}
                                    src={
                                        index < artisan?.rate 
                                        ? "/assets/icons/star-solid.svg"
                                        : "/assets/icons/star-regular.svg"
                                    }
                                    alt="étoile"
                                    height="24"
                                    width="24"
                                    className="me-1"
                                />
                            ))}
                            <span className="badge text-secondary p-0">({artisan?.rate})</span>
                        </div>
                        <h3 className="card-title">{artisan?.name}</h3>
                        <p className="card-text">{artisan?.speciality?.name}</p>
                        <p className="card-text">{artisan?.city}</p>
                        <p>A propos</p>
                        <p className="card-text">{artisan?.about}</p>
                        {artisan?.website && (
                            <a 
                                href={artisan.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Voir le site internet
                            </a>
                        )}
                    </div>
                </div>
                <hr />
                <h4 className="text-primary">Formulaire de contact</h4>
                <form action="#" method="GET">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nom</label>
                        <input type="text" name="name" id="name" class="form-control" placeholder="Votre nom"/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" id="email" class="form-control" placeholder="Votre adresse email"/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Object</label>
                        <select name="subject" id="subject" className="form-select">
                            <option defaultValue="0" disabled>Choisissez un objet dans la liste</option>
                            <option value="1">Demande de renseignements</option>
                            <option value="2">Demande de prestation</option>
                            <option value="3">Demande de devis</option>
                        </select>
                    </div>
                    <input type="submit" value="Envoyer" className="btn btn-primary"/>
                </form>
            </div>        
        </main>
    )
}

export default Artisan