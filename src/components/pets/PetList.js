import { useEffect, useState } from "react";
import "./Pets.css"

export const PetList = () => {
    const [pets, setPets] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/pets`)
                .then(res => res.json())
                .then((petProfileArray) => {
                    setPets(petProfileArray)
                })
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