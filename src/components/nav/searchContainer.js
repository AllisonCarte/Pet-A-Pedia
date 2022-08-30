import { useState } from "react"
import { PetSearch } from "./PetSearchList"
import { PetSearching } from "./PetSearch"



export const SearchContainer = () => {
    const [searchTerms, setSearchTerms] = useState('')

    return <> 
    <PetSearching setterFunction={setSearchTerms}/>
    <PetSearch searchTermState={searchTerms} />
    </>
}