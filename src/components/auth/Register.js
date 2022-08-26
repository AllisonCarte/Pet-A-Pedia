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
                    navigate("/")
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
        <main style={styles.form}>
        <Form style={styles.form} onSubmit={handleReg}>
            <h1 style={styles.form}>Pet-A-Pedia</h1>
             <h2 style={styles.form} className="form--header">Please register</h2>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control style={styles.form} onChange={updateUser}
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name..."
                        required autoFocus />
            <Form.Text className="text-muted">
              We'll only share your name if you want us to.
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control style={styles.form}  onChange={updateUser}
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email Address..."
                        required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control style={styles.form} onChange={updateUser}
                        type="text"
                        id="password"
                        className="form-control"
                        placeholder="Password..."
                        required autoFocus />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Link  to="/login">Already have an account?</Link>
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