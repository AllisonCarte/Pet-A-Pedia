import { useState } from "react"
export const Message = ({ bio, changeState }) => {
    const [canEdit, setCanEdit] = useState(false)
    const [updateBio, setUpdateBio] = useState(bio)
    const loggedInUser = JSON.parse(localStorage.getItem("PAP_user"))
    return (
        canEdit && loggedInUser.id === bio.userId ?
            <section className="bio" key={`bio--${bio.id}`}>
                <form onSubmit={event => {
                    event.preventDefault();
                    return fetch(`http://localhost:8088/users/${loggedInUser.id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(updateBio)
                        })
                       
                }}>
                    <input value={updateBio.bio}
                        onChange={
                            (event) => {
                                const copy = { ...updateBio }
                                copy.bio = event.target.value
                                setUpdateBio(copy)
                            }
                        } />
                </form>
            </section>
            :
            <section className="bio" key={`bio--${bio.id}`}>
                <div onDoubleClick={() => setCanEdit(true)}>
                    {bio.bio}
                </div>
            </section>
    )
}