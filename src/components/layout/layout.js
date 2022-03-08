import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import "./styles.css"

<<<<<<< HEAD
function Layout({ children }) {
    return (
        <>
            <Header></Header>
=======
function Layout({ children, ...props }) {
    return (
        <>
            <Header {...props}/>
>>>>>>> authenticate
            <section className="py-5">

                {children}

            </section>
            <Footer></Footer>
        </>
    )
}

export default Layout;