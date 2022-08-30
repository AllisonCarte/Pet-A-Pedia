import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "./Pets";


export const PetDetails = () => {
    const [profilePet, setProfilePet] = useState([])
    const {petId} = useParams()
    useEffect(
        () => {
            fetch(`http://localhost:8088/pets?id=${petId}`)
                .then(res => res.json())
                .then((petProfileArray) => {
                    const petObject = petProfileArray[0]
                    setProfilePet(petObject)
                })
        },
        []
    )

    
    return <>
    <h2>Pet Profiles</h2>
    <article className="pets">
        {
            // iterating array with .map
          
                <Pet petObject={profilePet} />
          

        }

    </article>
</>

    }