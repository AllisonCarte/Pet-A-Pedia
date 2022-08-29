import { PetList } from "../pets/PetList"
import "./Users.css"

export const User = ({ userObject }) => {
    return <section className="user" key={`user--${userObject.id}`} style={{ alignContent: "center" }}>
        <ul>
             <h3>{userObject.name}</h3>
            <div className="image__container"><img className="user__image" src={userObject.image}></img></div>
            <div><p>{userObject.bio}</p></div>
           <div><p>{userObject.email}</p></div>
            <div><p>{userObject.location}</p></div>
            <PetList/>
            <br></br>
        </ul>
        
    </section>
}