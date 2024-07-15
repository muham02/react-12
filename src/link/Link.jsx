import { NavLink } from "react-router-dom";
import {FiPackage} from 'react-icons/fi'

export const SIDEBAR = [
    {
        name:"Products",
        label:<NavLink end to='/admin'>Products</NavLink>,
        icon:<FiPackage/>,
        key:"products"
    },
    {
        name:"Users",
        label:<NavLink end to='/admin/users'>Users</NavLink>,
        icon:<FiPackage/>,
        key:"Users"
    }
]