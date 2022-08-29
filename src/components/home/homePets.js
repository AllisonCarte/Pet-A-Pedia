import { useEffect, useState } from "react";
import { Pet } from "./Pets";
import "./Pets.css"

/*'member how I said this would get its own module? here we are. I didn't plan well. Don't be like me. */
export const homeEdition = () => {
    const [pets, setPets] = useState([])

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


    return <>
        <article className="pets">
            {
                // iterating array with .map
                pets.map(
                    pet => <Pet petObject={pet} />
                )

            }

        </article>
    </>
}