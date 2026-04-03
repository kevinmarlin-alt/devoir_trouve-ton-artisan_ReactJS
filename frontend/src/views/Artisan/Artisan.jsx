import { useParams, useNavigate } from "react-router";
import { useArtisan } from "../../hooks/artisans";
import { specialities } from "../../services/data";

import Title from "../../components/Title/Title";

const Artisan = () => {
    const navigate = useNavigate()
	const { idArtisan, idCategory } = useParams();
	const artisan = useArtisan(idArtisan);

	const [speciality] = specialities.filter(
		(speciality) => speciality.id === artisan?.speciality?.id,
	);

    const rate = Math.round(parseFloat(artisan.rate))
	console.log(artisan);

	if (!artisan) {
		return (
			<main className='container-fluid'>
				<Title
					subTitle='3. Le contacter via le formulaire de contact.'
					arianeList={[
						"Choisir la catégorie",
						"Choiri un artisan",
						"Contacter un artisan",
					]}
				/>
				<div className='container-lg'>
					<p>Chargement en cours...</p>
				</div>
			</main>
		);
	}

    function handleClickSend(e) {
        e.preventDefault()
        navigate(`/categories/${idCategory}/artisans/${idArtisan}/success`)
    }

	return (
        <>
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            <title>Trouve ton artisan ! - Artisan</title>
            <main className='container-fluid'>
                <Title
                    arianeList={[
                        "Choisir la catégorie",
                        "Choiri un artisan",
                        "Contacter un artisan",
                    ]}
                />
                <div className='container-lg mb-5 px-lg-5'>
                    <hr
                        className=''
                        style={{
                            width: "2rem",
                            borderColor: "#0074c7",
                            margin: 0,
                            marginBottom: "1.5rem",
                            borderWidth: 6,
                            opacity: 100,
                        }}
                    />
                        
                    <section>
                        <h2 className='mb-4'>
                            3. Le contacter via le formulaire de contact.
                        </h2>
                        <div className='mb-5'>
                            <div className='row g-5'>
                                <div className='col-lg-5'>
                                    <img
                                        src={`/assets/images/artisans/${speciality?.src}`}
                                        className=' object-fit-cover'
                                        alt={speciality?.alt}
                                        style={{ width: "100%", maxHeight: "350px" }} // a remplacer par une feuille de style
                                    />
                                </div>
                                <div className='col-lg-7 ps-4 py-3'>
                                
                                        <div className='mb-4'>
                                            {/* Note avec 5 étoiles maximum */}
                                            {[...Array(5)].map((_, i) => (
                                                <img 
                                                    key={i}
                                                    src={
                                                        i < rate 
                                                        ? "/assets/icons/star-solid.svg"
                                                        : '/assets/icons/star-regular.svg'
                                                    }
                                                    alt="étoile"
                                                    height="24"
                                                    width="24"
                                                    className="me-1"
                                                />
                                            ))}
                                            <span className='badge text-secondary p-0'>
                                                ({artisan?.rate})
                                            </span>
                                        </div>
                                        <p className=''>{artisan?.name}</p>
                                        <p className=''>
                                            {artisan?.speciality?.name}
                                        </p>
                                        <p className=''>{artisan?.city}</p>
                                        <p>A propos</p>
                                        <p className=''>{artisan?.about}</p>
                                        {artisan?.website && (
                                            <a
                                                href={artisan.website}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='btn btn-primary py-1 px-3'
                                            >
                                                <div className='d-flex align-items-center'>
                                                    <p className='mb-0'>
                                                        Voir le site internet
                                                    </p>
                                                    <img
                                                        src='/assets/icons/extern-white.svg'
                                                        alt='test'
                                                        className='ms-3'
                                                    />
                                                </div>
                                            </a>
                                        )}
                                
                                </div>
                            </div>
                        </div>
                    
                        <hr
                            className=''
                            style={{
                                width: "2rem",
                                borderColor: "#82b864",
                                margin: 0,
                                marginBottom: "1.5rem",
                                borderWidth: 6,
                                opacity: 100,
                            }}
                        />
                        <section>
                            <h3 className=''>Formulaire de contact</h3>
                            <form action="#" method='GET' className='col-lg-8' onSubmit={handleClickSend}>
                                <div className='mb-4'>
                                    <label htmlFor='name' className='form-label'>
                                        Nom
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        className='form-control'
                                        placeholder='Votre nom'
                                        // required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='form-label'>
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='form-control'
                                        placeholder='Votre adresse email'
                                        // required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='form-label'>
                                        Object
                                    </label>
                                    <select
                                        name='subject'
                                        id='subject'
                                        className='form-select'
                                        // required
                                    >
                                        <option defaultValue='0' disabled>
                                            Choisissez un objet dans la liste
                                        </option>
                                        <option value='1'>Demande de renseignements</option>
                                        <option value='2'>Demande de prestation</option>
                                        <option value='3'>Demande de devis</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='message' className='form-label'>
                                        Message
                                    </label>
                                    <textarea
                                        className='form-control mb-4'
                                        name='message'
                                        id='message'
                                        rows='15'
                                        placeholder='Votre message...'
                                        // required
                                    ></textarea>
                                </div>
                                <input
                                    type='submit'
                                    value='Envoyer'
                                    className='btn btn-primary'
                                />
                            </form>
                        </section>
                    </section>
                </div>
            </main>
        </>
	);
};

export default Artisan;
