import Footer from './Footer';
import Header from './Header';
import "../../bootstrap/style.css"

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {children}
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Layout;