import Footer from "./Footer";
import Header from "./Header";
import "../../bootstrap/style.css";

<<<<<<< HEAD
function Layout({ children, ...props }) {
    return (
        <>
            <Header {...props} />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {children}
                </div>
            </section>
            <Footer></Footer>
        </>
    )
=======
function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">{children}</div>
      </section>
      <Footer></Footer>
    </>
  );
>>>>>>> 1186fc6b170023b9a9a8b98e9521b5edb8a47f86
}

export default Layout;
