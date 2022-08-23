import { useEffect, useState } from "react";

export const PetList = () => {
    const [pets, setPets] = useState([])

    useEffect(
        () => {
            console.log("Initial state of pets")
        },
        []
    )
    return <>
        <h2>Pet Profiles</h2>
        <article className="pets">
            {
                pets.map(
                    pet => {
                        return <section>
                            <header>{pet.name}</header>
                            <p>{pet.description}</p>
                            <footer>{pet.notes}</footer>
                        </section>
                    }
                )

            }

        </article>

    </>
}