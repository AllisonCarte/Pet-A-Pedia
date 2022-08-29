import { useEffect, useState } from "react";
import { HomePets } from "../pets/Pets";
import "../pets/Pets.css"

/*'member how I said this would get its own module? here we are. I didn't plan well. Don't be like me. */
export const HomeEdition = () => {
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

    const ascending = [...pets].sort((a, b) => b.upvotes - a.upvotes)

    return <>
        <article className="pets">
            {
                // iterating array with .map
               ascending.slice(0, 3).map(
                    pet => <HomePets petObject={pet} />
                )

            }

        </article>
    </>
}