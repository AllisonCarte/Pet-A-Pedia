import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { styles } from "../styles/styles";
import "./Login.css"

export const Register = (prop) => {
    const [user, setUser] = useState()


    let navigate = useNavigate()

    const registerNew = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(created => {
                if (created.hasOwnProperty("id")) {
                    localStorage.setItem("PAP_user", JSON.stringify({
                        id: created.id,
                        password: created.password,
                        email: created.email
                    }))
                    navigate("/home")
                }
            })
    }

    const handleReg = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    window.alert("Account with that email already exists")
                }
                else {
                    registerNew()
                }
            })
    }

    const updateUser = (event) => {
        const copy = { ...user }
        copy[event.target.id] = event.target.value
        setUser(copy)
    }
    return (
        <main >
        <Form style={styles.form} onSubmit={handleReg}>
            <h1>Pet-A-Pedia</h1>
             <h2  className="form--header">Please register</h2>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control style={{textAlign: "center"}} onChange={updateUser}
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required autoFocus />
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{textAlign: "center"}}  onChange={updateUser}
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email Address"
                        required />
            <Form.Text className="text-muted">
           
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control style={{textAlign: "center"}} onChange={updateUser}
                        type="text"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required autoFocus />
          </Form.Group>
          <Button style={styles.button} variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <section style={styles.form}>
        <Link className="text-muted" to="/login">Already have an account?</Link>
        </section>
        </main>
      );

      // old return
    /* return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleReg}>
                <h1 className="form--header">Please register for Pet-a-Pedia</h1>
                <fieldset>
                    <label htmlFor="name">Your Name</label>
                    <input onChange={updateUser}
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email Address</label>
                    <input onChange={updateUser}
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email Address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input onChange={updateUser}
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register</button>
                </fieldset>
            </form>
        </main>
    )*/
}