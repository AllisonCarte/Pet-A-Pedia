import { useEffect, useState } from "react";

import { PetsForSearch } from "./PetS";


/*All of PetList is literally just to get the pets on their owner's page at this point.
 There will likely be a separate module for getting things on the home page. */
export const PetSearch = ({searchTermState}) => {
    const [pets, setPets] = useState([])
    const [filteredPets, setFilteredPets] = useState([])

    //Me, naming it PAP and going, "hehe, zombies reference" because pack-a-punch? nah, never. didn't happen.
    const localPAPUser = localStorage.getItem("PAP_user")
    const PAPUserObject = JSON.parse(localPAPUser)

useEffect(
    () => {
const searchedPets = pets.filter(pet => pet.name.startsWith(searchTermState))
setFilteredPets(searchedPets)
    },
    [searchTermState]
)

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

    return <>
        <article className="pets">
            {
                // iterating array with .map
                filteredPets.map(
                    pet => <PetsForSearch key={`pet--${pet.id}`} petObject={pet} />
                )

            }

        </article>
    </>
}