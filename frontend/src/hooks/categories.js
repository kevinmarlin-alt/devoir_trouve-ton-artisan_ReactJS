import { useEffect, useState } from "react"
import { getCategories, getArtisansByCategory } from "../services/categories"

export const useCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    return categories
} 

export const useArtisansByCategory = (idCategory) => {
    const [artisansByCategory, setArtisansByCategory] = useState([])

    useEffect(() => {
        getArtisansByCategory(idCategory).then(setArtisansByCategory);
    }, [idCategory]);

    return artisansByCategory
} 
