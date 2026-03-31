const Card_light = (props) => {
    const rate = Math.round(parseFloat(props.rate))
    return (
        <div className="container border-start border-primary border-2 mx-0 mb-4 py-2 ">
            <div className="mb-3">
                {[...Array(5)].map((_, i) => (
                    <img 
                        key={i}
                        src={
                            i < rate 
                            ? "./assets/icons/star-solid.svg"
                            : "./assets/icons/star-regular.svg"
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