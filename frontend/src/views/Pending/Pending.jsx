import { Link } from 'react-router'

import Title from "../../components/Title/Title"

const Pending = () => {
    return (
        <>
            <meta
                name="description"
                content="Cette page des mentions légales est en construction."
            />
            <main className="container-fluid mb-5">
                <Title titleVisible={false} />
                <div class="container-lg ps-lg-5 d-flex flex-column justify-content-center align-items-center my-5">
                    <p>Page en construction</p>
                    <Link to="/"><button type="button" className="btn btn-primary">Revenir à la page d'accueil</button></Link>
                </div>
            </main>
        </>
    )
}

export default Pending