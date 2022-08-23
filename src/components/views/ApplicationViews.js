import { Outlet, Route, Routes } from "react-router-dom"
import { PetList } from "../pets/PetList"

export const ApplicationViews = () => {
    const localPAPUser = localStorage.getItem("PAP_user")
    const PAPUserObject = JSON.parse(localPAPUser)

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Pet-A-Pedia</h1>
                    
                    <Outlet />
                </>

            }>
<Route path="/pets" element={<PetList/>}/>
            </Route>
        </Routes>
    )

}