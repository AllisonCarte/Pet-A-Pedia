import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SinglePet } from "./Pets";


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
    <article className="pets">
        {
            // iterating array with .map
          
                <SinglePet petObject={profilePet} />
          

        }

    </article>
</>

    }