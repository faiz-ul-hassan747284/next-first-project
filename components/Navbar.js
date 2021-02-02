import React from 'react';
import Image from 'next/image';
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                         Next app
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="ml-auto navbar-nav">
                        <li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={router.pathname == "/about" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;