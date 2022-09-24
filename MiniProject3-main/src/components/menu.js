import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Outlet, Link} from "react-router-dom";
import "./css/bootstrap.min.css"
import "./css/owl.carousel.min.css"
import "./css/flaticon.css"
import "./css/bootstrap.min.css"
import "./css/slick.css"
import "./css/nice-select.css"
import "./css/fontawesome-all.min.css"
import "./css/style.css"
import "./css/slicknav.css"
import "./css/logOutbutton.css"

export function Menu() {

    const user = JSON.parse(localStorage.getItem('user'));
    const localFirstName = user?.firstName ?? '';

    function logOut() {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return <>

        <header>

            <div className="header-area">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper">

                            <div className="logo">
                                <a href="/"><img src="https://i.imgur.com/GzS1pvl.png" alt=""/></a>
                            </div>

                            <div className="main-menu d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/productlist">Products</Link></li>
                                       
                                        <li className="hot"><a href="/newarrivals">New Arrivals</a>
                                           
                                        </li>
                                        <li><a href="#">Categories</a>
                                            <ul className="submenu">
                                                <li><a href="/drinks">Drinks</a></li>
                                                
                                                <li><a href="/meals">Meals</a></li>
                                                <li><a href="/snacks">Snacks</a></li>
                                            </ul>
                                        </li>
                                      
                                        
                                        <li>{localFirstName}</li>


                                        {!user ?
                                            <li><a href="#"><span className="flaticon-user"></span></a>
                                                <ul className="submenu">
                                                    <li><span>You are not logged in</span></li>
                                                    <li><Link to="/login" id="logIn">Login</Link></li>
                                                </ul>
                                            </li> :
                                            <li><a href="#"><span className="flaticon-user"></span></a>
                                                <ul className="submenu">
                                                    <li><span>You are logged in</span></li>
                                                    <li>
                                                        <button onClick={logOut} id="logOut">Sign out</button>
                                                    </li>
                                                </ul>
                                            </li>
                                        }
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul>


                                    <li><Link to="/cart"><span className="flaticon-shopping-cart"></span></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Outlet/>
    </>
}
