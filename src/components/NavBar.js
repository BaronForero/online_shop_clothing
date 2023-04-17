import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <div className="narBar">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}
export default NavBar;