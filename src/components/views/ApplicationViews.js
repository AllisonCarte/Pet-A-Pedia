import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../home/home"
import { NewProfile } from "../pets/PetForm"
import { PetList } from "../pets/PetList"
import { UserList } from "../users/UserList"
import { PetDetails } from "../pets/PetDetails"
import { SearchContainer } from "../nav/searchContainer"

export const ApplicationViews = () => {
    const localPAPUser = localStorage.getItem("PAP_user")
    const PAPUserObject = JSON.parse(localPAPUser)

    return (
        <Routes>
            <Route path="/" element={
                <>


                    <Outlet />
                </>

            }>
                <Route path="/search" element={<SearchContainer />} />
                <Route path="/pets/:petId" element={<PetDetails />} />
                <Route path="/home" element={<Home />} />
                <Route path="/pets" element={<PetList />} />
                <Route path="/new" element={<NewProfile />} />
                <Route path="/profile" element={<UserList />} />
            </Route>
        </Routes>
    )

}