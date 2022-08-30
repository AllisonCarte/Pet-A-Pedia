import { useState } from "react"
import { PetSearch } from "./PetSearch"
import { PetSearching } from "./search"



export const SearchContainer = () => {
    const [searchTerms, setSearchTerms] = useState('')

    return <> 
    <PetSearching setterFunction={setSearchTerms}/>
    <PetSearch searchTermState={searchTerms} />
    </>
}