import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import './NavBar.css'

function NavBar(){
    return (
        <div className="navbar">
            <CategoryList />
            <CartWidget />
        </div>
    )
}

export default NavBar;