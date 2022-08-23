import { useEffect, useState } from "react";

export const PetList = () => {
    const [pets, setPets] = useState([])

    useEffect(
        () => {
            console.log("Initial state of pets")
        },
        []
    )
    return <h2>Pets</h2>
}