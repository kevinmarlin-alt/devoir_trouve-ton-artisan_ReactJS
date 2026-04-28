import { useEffect, useState } from "react"
import { getTopArtisans, getArtisan, getArtisansByName } from "../services/artisans"

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

export const useArtisansByName = (name) => {
    const [artisansByName, setArtisansByName] = useState([])

    useEffect(() => {
        
        if(name !== null) getArtisansByName(name).then(setArtisansByName);
    }, [name]);

    return artisansByName
} 
