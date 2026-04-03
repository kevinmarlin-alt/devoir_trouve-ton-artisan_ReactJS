import { Link } from 'react-router'

import Title from "../../components/Title/Title"

const Pending = () => {
    return (
        <main 
            className="d-flex flex-column justify-content-center align-items-center my-5"
        >
            <Title titleVisible={false} />
            <p>Page en construction</p>
            <Link to="/"><button type="button" className="btn btn-primary">Revenir à la page d'accueil</button></Link>

        </main>
    )
}

export default Pending