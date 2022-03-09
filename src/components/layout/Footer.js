import React, { Component } from 'react';
import "../../bootstrap/style.css"

class Footer extends Component {
    render() {
        return (
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
            </footer>
        )
    }
}
export default Footer;