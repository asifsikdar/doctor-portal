import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div style={{height:"70px"}} className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul style={{ gap:"40px",marginRight:"95px"}} className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Dental Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;