import { useEffect, useState } from "react";
import "./Pets.css"

export const PetList = () => {
    const [pets, setPets] = useState([])
    const [filteredPets, setFilteredPets] = useState([])

    const localPAPUser = localStorage.getItem("PAP_user")
    const PAPUserObject = JSON.parse(localPAPUser)



    useEffect(
        () => {
            // fetching what we need from the database. in this case, pets.
            fetch(`http://localhost:8088/pets`)
                .then(res => res.json())
                .then((petProfileArray) => {
                    setPets(petProfileArray)
                })
        },
        []
    )

    useEffect(
        () => {
            // filtering pets based on the logged-in user
           const myPets = pets.filter(pet => pet.userId === PAPUserObject.id)
           setFilteredPets(myPets)
        },
        [pets]
    )

    return <>
        <h2>Pet Profiles</h2>
        <article className="pets">
            {
                // iterating array with .map
                filteredPets.map(
                    pet => {
                        return <section className="pet" key={`pet--${pet.id}`}>
                            <ul>
                                <div className="image__container"><img className="pet__image" src={pet.image}></img></div>
                                <h3>{pet.name}</h3>
                                <p>{pet.description}</p>
                                <footer>{pet.notes}</footer>
                                <br></br>
                            </ul>
                        </section>
                    }
                )

            }

        </article>
    </>
}