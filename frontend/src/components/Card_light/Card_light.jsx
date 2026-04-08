import { useNavigate } from "react-router";

import './Card_light.css'

const Card_light = (props) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.stopPropagation()
        navigate(`/categories/${props.idCategory}/artisans/${props.idArtisan}`);
    };

    const rate = Math.round(parseFloat(props.rate))

    return (
        <div role="button" className="card-light border-start border-dark-blue border-3 px-4 py-2" onClick={handleClick}>
            <div className="mb-3">
                {/* Note avec 5 étoiles maximum */}
                {[...Array(5)].map((_, index) => (
                    <img 
                        key={`${props.name}${index}`}
                        src={
                            index < rate 
                            ? "/assets/icons/star-solid-blue.svg"
                            : '/assets/icons/star-regular-blue.svg'
                        }
                        alt="étoile"
                        height="24"
                        width="24"
                        className="me-1"
                    />
                ))}
                <span className="badge text-secondary p-0">({props.rate}/5)</span>
            </div>
            <div>
                <p className="mb-0 fs-2 fw-bold">{props.name}</p>
                <p>{props.speciality}</p>
            </div>
            <p className="mb-0">{props.city}</p>
        </div>
    )
}

export default Card_light