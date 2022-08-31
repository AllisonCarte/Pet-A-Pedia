import { useEffect, useState } from "react";
import { Pet } from "./Pets";


/*All of PetList is literally just to get the pets on their owner's page at this point.
 There will likely be a separate module for getting things on the home page. */
export const PetList = () => {
    const [pets, setPets] = useState([])
    const [filteredPets, setFilteredPets] = useState([])

    //Me, naming it PAP and going, "hehe, zombies reference" because pack-a-punch? nah, never. didn't happen.
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
        <div style={{display: 'flex', flexDirection: 'row'}}> 
            {
                // iterating array with .map
                filteredPets.map(
                    pet => <Pet key={`pet--${pet.id}`} petObject={pet} />
                )

            }
            </div>
        </article>
    </>
}