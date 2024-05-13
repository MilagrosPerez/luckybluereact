import { NavLink } from 'react-router-dom';
import './CategoryList.css'
const misrutas = [
    {
    path: '/categoria/arneses',
    label: "Arneses" 
    },
    {
        path: '/categoria/correas',
        label: "Correas" 
    },
    {
        path: '/categoria/collares',
        label: "Collares" 
    },
    {
        path: '/categoria/abrigos',
        label: "Abrigos" 
    },
]  

function CategoryList() {
    return (
        <nav>
            <ul className="categorylist">
                {misrutas.map((ruta)=>(
                    <li key={ruta.path}>
                        <NavLink className={({isActive})=>(isActive ? "isActive" : "noActive")} to={ruta.path}>
                            {ruta.label}
                        </NavLink>
                    </li>
                ) )}
            </ul>
        </nav>
    )
};

export default CategoryList;