import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const UserEdit = () => {
    // Provide initial state for profile

    const { userId } = useParams()
    const navigate = useNavigate()
    const [user, updateUser] = useState({
        "image": "",
        "name": "",
        "email": "",
        "password": "",
        "location": "",
        "bio": ""

    })


    // Get info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/users/${userId}`)
            .then(response => response.json())
            .then((data) => {
                const userObject = data
                updateUser(userObject)
            })
    }, [userId])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //  PUT fetch() call here to update.

        return fetch(`http://localhost:8088/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/profile`)
            })
    }

    return (
        <section  style={{textAlign: "center", paddingLeft: "34.3vw" }}>

        <Form className="w-50">
            <h2 className="profile__title">Edit Profile</h2>
            <Form.Group>
               
                    <Form.Label htmlFor="image">Image:</Form.Label>
                    <Form.Control
                     style={{textAlign: "center"}} 
                        type="text"
                        className="form-control"
                        value={user?.image}
                        onChange={
                            (evt) => {
                                const clone = { ...user }
                                clone.image = evt.target.value
                                updateUser(clone)
                            }
                        } />
            </Form.Group>
            <Form.Group>
               
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control
                     style={{textAlign: "center"}} 
                        type="text"
                        className="form-control"
                        value={user?.name}
                        onChange={
                            (evt) => {
                                const clone = { ...user }
                                clone.name = evt.target.value
                                updateUser(clone)
                            }
                        } />
            </Form.Group>
            <Form.Group>
               
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                     style={{textAlign: "center"}} 
                        type="text"
                        className="form-control"
                        value={user?.email}
                        onChange={
                            (evt) => {
                                const clone = { ...user }
                                clone.email = evt.target.value
                                updateUser(clone)
                            }
                        } />
            </Form.Group>
            <Form.Group>
               
                    <Form.Label htmlFor="password">Password:</Form.Label>
                    <Form.Control
                     style={{textAlign: "center"}} 
                        type="text"
                        className="form-control"
                        value={user?.password}
                        onChange={
                            (evt) => {
                                const clone = { ...user }
                                clone.user = evt.target.value
                                updateUser(clone)
                            }
                        } />
            </Form.Group>
            <Form.Group>
               
                    <Form.Label htmlFor="location">Location:</Form.Label>
                    <Form.Control
                     style={{textAlign: "center"}} 
                        type="text"
                        className="form-control"
                        value={user?.location}
                        onChange={
                            (evt) => {
                                const clone = { ...user }
                                clone.location = evt.target.value
                                updateUser(clone)
                            }
                        } />
            </Form.Group>
            <Form.Group>
               
                    <Form.Label htmlFor="bio">Bio:</Form.Label>
                    <Form.Control
                     style={{textAlign: "center"}} 
                        type="text"
                        className="form-control"
                        value={user?.bio}
                        onChange={
                            (evt) => {
                                const clone = { ...user }
                                clone.bio = evt.target.value
                                updateUser(clone)
                            }
                        } />
            </Form.Group>
            <br></br>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save
            </button>
            <button className="btn btn-primary" onClick={() => {
                navigate(`/profile`)
            }}> Cancel</button>
        </Form>
        </section>

    )
}
