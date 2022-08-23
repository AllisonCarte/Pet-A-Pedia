import { useEffect, useState } from "react";

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            console.log("Initial state of users")
        },
        []
    )
    return <h2>User Profile</h2>
}