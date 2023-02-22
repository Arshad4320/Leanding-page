import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Sheard/Footer';
import Navbar from './Sheard/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;