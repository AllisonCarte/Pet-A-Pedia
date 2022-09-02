import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/styles";
import {useParams } from "react-router-dom"
export const Delete = () => {
    const [pets, setPets] = useState([])
    const navigate = useNavigate()
const {petId} = useParams()
const getPets = () => {
    return (
        fetch(`http://localhost:8088/pets`)
                .then(res => res.json())
                .then((petProfileArray) => {
                    setPets(petProfileArray)
                })
    )
}

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
        <Button style={styles.button} onClick={() => {
            fetch(`http://localhost:8088/pets/${petId}`, {
                method: "DELETE"
            })
                .then(() => {
                   getPets()
                })
                .then((
                    navigate('/mypets')
                ))

        }} className="pet__delete">Delete Profile</Button>
    </>
}