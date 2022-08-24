import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewProfile = () => {
    const [pet, updatePet] = useState({
        image: "",
        name: "",
        species: "",
        description: ""
    })

    const navigate = useNavigate()

    const localPAPUser = localStorage.getItem("PAP_user")
    const PAPUserObject = JSON.parse(localPAPUser)

    const handleSave = (e) => {
        e.preventDefault()

        const sendToAPI = {
            userId: PAPUserObject.id,
            image: pet.image,
            name: pet.name,
            species: pet.species,
            description: pet.description
        }
        return fetch(`http://localhost:8088/pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/pets")
            })
    }
    return (
        <form>
            <h2>New Pet Profile</h2>
            <fieldset>
                <label htmlFor="image"> Image </label>
                <input type="text"
                    className="form-control"
                    placeholder="Image URL..."
                    value={pet.image}
                    onChange={
                        (evt) => {
                            const clone = { ...pet }
                            clone.image = evt.target.value
                            updatePet(clone)
                        }
                    }
                />
            </fieldset>
            <fieldset>
                <label htmlFor="name"> Name </label>
                <input type="text"
                    className="form-control"
                    placeholder="Pet name..."
                    value={pet.name}
                    onChange={
                        (evt) => {
                            const clone = { ...pet }
                            clone.name = evt.target.value
                            updatePet(clone)
                        }
                    }
                />
            </fieldset>
            <fieldset>
                <label>Species </label>
                <input type="text"
                className="form-control"
                placeholder="Pet species..."
                onChange={
                    (evt) => {
                        const clone = {...pet}
                        clone.species = evt.target.value
                        updatePet(clone)
                    }
                }
                />
            </fieldset>
            <fieldset>
                <label>Description </label>
                <input type="text"
                className="form-control"
                placeholder="Pet description..."
                onChange={
                    (evt) => {
                        const clone = {...pet}
                        clone.description = evt.target.value
                        updatePet(clone)
                    }
                }
                />
            </fieldset>
            <button
                onClick={(clickEvent) => handleSave(clickEvent)}
            >Submit Profile</button>
        </form>
    )
}