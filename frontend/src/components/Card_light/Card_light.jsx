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
        <div role="button" id="card_light" className="container border-start border-primary border-2 mx-0 mb-4 py-2" onClick={handleClick}>
            <div className="mb-3">
                {/* Note avec 5 étoiles maximum */}
                {[...Array(5)].map((_, i) => (
                    <img 
                        key={`${props.name}${i}`}
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
                <span className="badge text-secondary p-0">({props.rate})</span>
            </div>
            <div>
                <p className="m-0">{props.name}</p>
                <p>{props.speciality}</p>
            </div>
            <p className="mb-0">{props.city}</p>
        </div>
    )
}

export default Card_light