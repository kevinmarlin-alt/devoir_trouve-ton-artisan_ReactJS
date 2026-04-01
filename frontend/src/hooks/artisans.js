import { useEffect, useState } from "react"
import { getTopArtisans, getArtisan } from "../services/artisans"

export const useTopArtisans = () => {
    const [topArtisans, setTopArtisans] = useState([])

    useEffect(() => {
        getTopArtisans().then(setTopArtisans);
    }, []);

    return topArtisans
} 

export const useArtisan = (id) => {
    const [artisan, setArtisan] = useState({})

    useEffect(() => {
        getArtisan(id).then(setArtisan);
    }, [id]);

    return artisan
} 
