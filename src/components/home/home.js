import { useState } from "react";
import { styles } from "../styles/styles"


const PetListWithItems = () => {
    const [pet, setPet] = useState([])

}

export const Home = () => {

    return (
        <>

            <div className="main">
                <div style={styles.form}className="search">
                    <input type="text"
                        placeholder="Search"
        />
                </div>
            </div>




        </>
    )
}