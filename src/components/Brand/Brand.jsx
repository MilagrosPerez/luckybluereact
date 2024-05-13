import { NavLink } from "react-router-dom";
import './Brand.css';

function Brand() {
    return (
        <div>
            <NavLink to={"/"} className={"nombreMarca"}><h1>Lucky Blue</h1></NavLink>
        </div>
    )
}

export default Brand;