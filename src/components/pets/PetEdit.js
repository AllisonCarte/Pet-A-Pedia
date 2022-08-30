import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const PetEdit = () => {
    // Provide initial state for profile

    const { petId } = useParams()
    const navigate = useNavigate()
    const [pet, updatePet] = useState({
        "image": "",
        "name": "",
        "breed": "",
        "species": "",
        "description": "",
        "restrictions": "",
        "records": "",
        "notes": "",
        "upvotes": 0,
        "userId": 0

    })


    // Get info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/pets/${petId}`)
            .then(response => response.json())
            .then((data) => {
                const petObject = data
                updatePet(petObject)
            })
    }, [petId])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //  PUT fetch() call here to update.

        return fetch(`http://localhost:8088/pets/${pet.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pet)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/pets/${pet.id}`)
            })
    }

    return (
        <form className="profile">
            <h2 className="profile__title">Edit Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.image}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.image = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.name}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.name = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Breed:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.breed}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.breed = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="species">Species:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.species}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.species = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.description}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.description = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="restrictions">Restrictions:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.restrictions}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.restrictions = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="records">Records:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.records}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.records = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pet?.notes}
                        onChange={
                            (evt) => {
                                const clone = { ...pet }
                                clone.notes = evt.target.value
                                updatePet(clone)
                            }
                        } />
                </div>
            </fieldset>
            <br></br>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save
            </button>
            <button className="btn btn-primary" onClick={() => {
                navigate(`/pets/${pet.id}`)
            }}> Cancel</button>
        </form>
    )
}
