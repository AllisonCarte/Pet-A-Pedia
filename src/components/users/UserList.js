import { useEffect, useState } from "react";
import { User } from "./Users";

export const UserList = () => {
    const [users, setUsers] = useState([])
    const [filteredUser, setFilteredUser] = useState([])
    const localPAPUser = localStorage.getItem("PAP_user")
    const PAPUserObject = JSON.parse(localPAPUser)

    useEffect(
        () => {
            // fetching what we need from the database. in this case, users.
            fetch(`http://localhost:8088/users`)
                .then(res => res.json())
                .then((userProfile) => {
                    setUsers(userProfile)
                })
        },
        []
    )

    useEffect(
        () => {
            // filtering pets based on the logged-in user
           const myProfile = users.filter(user => user.id === PAPUserObject.id)
           setFilteredUser(myProfile)
        },
        [users]
    )


    return <>
    <h2>User Profile</h2>
    <article>
        {
            // iterating array with .map
            filteredUser.map(
                user => <User key={`user--${user.id}`} userObject = {user}/>
            )
        }
    </article>
    
    </>
}