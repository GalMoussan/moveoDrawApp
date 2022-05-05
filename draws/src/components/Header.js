import React from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from '../types/Routes'

const Header = () => {
    // Component meant for the building up proccess - helped me pass through the pages easily
    return (
        <header className="card">
            <nav>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <NavLink to={AppRoutes.Login}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >Login</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={AppRoutes.Welcome}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >Welcome</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={AppRoutes.Choice}
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}
                        >Choice</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={AppRoutes.Draw}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >Draw</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={AppRoutes.Wating}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >waiting</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={AppRoutes.Guess}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >Guess</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header