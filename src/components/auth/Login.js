import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { styles } from "../styles/styles";
import { Form, Button } from "react-bootstrap";


export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("PAP_user", JSON.stringify({
                        id: user.id,
                        email: user.email,
                        password: user.password
                    }))

                    navigate("/home")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }






    return (
        <main  >
        <Form style={styles.form} onSubmit={handleLogin}>
            <h1 >Pet-A-Pedia</h1>
            <h2 >Please sign in</h2>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="inputemail">Email address</Form.Label>
                <Form.Control type="email"
               style={{textAlign: "center"}}
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email"
                            required autoFocus />
                
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label  htmlFor="inputPassword">Password</Form.Label>
                <Form.Control type="password"
                           style={{textAlign: "center"}}
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required autoFocus />
                            <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Button style={styles.button} variant="primary" type="submit">
                Sign in
            </Button>
        </Form>
        <section style={styles.form} className="link--register">
                <Link className="text-muted" to="/register">Don't have an account?</Link>
            </section>
        </main>
    );
    /* return (
        <main className="container--login" style={{ textAlign: "center" }}>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Pet-A-Pedia</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputemail"> email </label>
                        <input type="email"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="email"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> password </label>
                        <input type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="password"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Don't have an account?</Link>
            </section>
        </main>
    ) */
}
