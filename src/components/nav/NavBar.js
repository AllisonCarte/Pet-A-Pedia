import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/pets">My Pets</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/new">New Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            {
                localStorage.getItem("PAP_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("PAP_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}