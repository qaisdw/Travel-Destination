import {Link} from "react-router-dom";
import "./Navbar.css";

function NavFun(){
    return(
        <nav class="nav">
            <h1>Travel</h1>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default NavFun;