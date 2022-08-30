import { useNavigate } from "react-router-dom"
import { PetList } from "../pets/PetList"
import { styles } from "../styles/styles"
import Button from 'react-bootstrap/Button';

export const User = ({ userObject }) => {
const navigate = useNavigate()

    return <><section className="user" key={`user--${userObject.id}`} style={{ alignContent: "center" }}>
        <ul>
            <h3>{userObject.name}</h3>
            <div style={styles.usersImageContainer} className="image__container"><img style={styles.usersImageWidth} className="user__image" src={userObject.image}></img></div>

            <div>{userObject.email}</div>
            <div>{userObject.location}</div>
            <br></br>
            <section> <input type="text" placeholder={userObject.bio}/> <div></div></section>
            <br></br>
            <section>
                <PetList />
                <Button variant="primary" style={styles.button} onClick={() => {
                            navigate(`/editUserDetails/${userObject.id}`)
                        }}> Edit Profile</Button>
            </section>
        </ul>

    </section>

    </>
}