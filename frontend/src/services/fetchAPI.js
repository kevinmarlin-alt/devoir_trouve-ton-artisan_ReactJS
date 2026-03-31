import { useEffect, useState } from "react";

export const useFetchCategories = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:3000/categories", {
                    method: 'GET'
                })

                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`)
                }

                const data = await response.json()
                setCategories(data)

            } catch (err) {
                console.error(err.message)
            }
        }

        fetchCategories()
    }, [])

    return categories
};