import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { styles } from "../styles/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        <section  style={{textAlign: "center", paddingLeft: "34.3vw" }}>
        
        <Form className=" w-50">
            <h2 className="profile__title">Edit Profile</h2>
            <Form.Group>
                    <Form.Label htmlFor="image">Image:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
               
            </Form.Group>
            <Form.Group>
               
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
               
            </Form.Group>
            <Form.Group>
              
                    <Form.Label htmlFor="breed">Breed:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
              
            </Form.Group>
            <Form.Group>
               
                    <Form.Label htmlFor="species">Species:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
               
            </Form.Group>
            <Form.Group>
                    <Form.Label htmlFor="description">Description:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
             
            </Form.Group>

            <Form.Group>
             
                    <Form.Label htmlFor="restrictions">Restrictions:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
              
            </Form.Group>

            <Form.Group>
                    <Form.Label htmlFor="records">Records:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
               
            </Form.Group>

            <Form.Group>
               
                    <Form.Label htmlFor="notes">Notes:</Form.Label>
                    <Form.Control
                        style={{ textAlign: "center" }}
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
               
            </Form.Group>
            <br></br>
            <Button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save
            </Button>
            <Button className="btn btn-primary"  onClick={() => {
                navigate(`/pets/${pet.id}`)
            }}> Cancel</Button>
        </Form>
        </section>
    )
}
