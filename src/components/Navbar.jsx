// import React from 'react';
// import {Link, NavLink} from "react-router-dom";
//
// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             {/*<div className="container-fluid">*/}
//             {/*    <div className="collapse navbar-collapse">*/}
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <NavLink
//                         className={'nav-link'}
//                         to={'/'}
//                     >
//                         Main
//                     </NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink
//                         className={'nav-link'}
//                         to={'/todos'}
//                     >
//                         Todos
//                     </NavLink>
//                 </li>
//             </ul>
//             {/*    </div>*/}
//             {/*</div>*/}
//         </nav>
//     );
// };
//
// export default Navbar;


import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../styles/components/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.navBar}>
            <div className={classes.linksWrapper}>
                <span className={classes.linkItem}>
                    <NavLink
                        className={({isActive}) => isActive ? classes.navLinkActive : classes.navLink}
                        to={'/'}
                    >
                        Main
                    </NavLink>
                </span>
                <span className={classes.linkItem}>
                    <NavLink
                        className={({isActive}) => isActive ? classes.navLinkActive : classes.navLink}
                        to={'/todos'}
                    >
                        Todos
                    </NavLink>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;



