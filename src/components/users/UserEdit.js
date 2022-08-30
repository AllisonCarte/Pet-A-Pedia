import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

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
        <form className="profile">
            <h2 className="profile__title">Edit Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
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
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
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
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
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
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
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
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
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
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bio">Bio:</label>
                    <input
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
                </div>
            </fieldset>
            <br></br>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save
            </button>
            <button className="btn btn-primary" onClick={() => {
                navigate(`/users/${user.id}`)
            }}> Cancel</button>
        </form>
    )
}
