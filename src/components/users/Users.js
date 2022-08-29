import { PetList } from "../pets/PetList"
import { styles } from "../styles/styles"

export const User = ({ userObject }) => {
    return <section className="user" key={`user--${userObject.id}`} style={{ alignContent: "center" }}>
        <ul>
             <h3>{userObject.name}</h3>
            <div style={styles.usersImageContainer} className="image__container"><img style={styles.usersImageWidth} className="user__image" src={userObject.image}></img></div>
            <div><p>{userObject.bio}</p></div>
           <div><p>{userObject.email}</p></div>
            <div><p>{userObject.location}</p></div>
            <PetList/>
            <br></br>
        </ul>
        
    </section>
}