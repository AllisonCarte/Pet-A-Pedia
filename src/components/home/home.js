import { useState } from "react";
import { styles } from "../styles/styles"
import { PetSearch } from "../pets/PetSearch";
import { PetList } from "../pets/PetList.js"
import { PetContainer } from "../pets/PetContainer";
import { HomeEdition } from "./homePets";

export const Home = () => {


    return (<>

        <PetContainer />
        <HomeEdition/>

    </>
    )
}

