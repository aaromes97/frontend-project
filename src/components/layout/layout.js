import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import "./styles.css"

function Layout({ children, ...props }) {
    return (
        <>
            <Header {...props}/>
            <section className="py-5">

                {children}

            </section>
            <Footer></Footer>
        </>
    )
}

export default Layout;