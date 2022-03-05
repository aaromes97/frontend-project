import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import "../../bootstrap/style.css"

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <section className="py-5">

                {children}

            </section>
            <Footer></Footer>
        </>
    )
}

export default Layout;