import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div>   

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/service">Service</Link>
            <Link to="/help">Help</Link>

           
        </div>
    );
}

export default Navbar;