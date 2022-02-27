import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import "./styles.css"

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {children}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Layout;