import React from 'react';
import BootstrapImport from "./Bootstrap Import";
import Navbar from "./Navbar";
const Layout = ({children}) => {
    return (
        <div>
            <BootstrapImport/>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;