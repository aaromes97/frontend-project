import Footer from "./Footer";
import Header from "./Header";
import "../../bootstrap/style.css";

function Layout({ children, ...props }) {
  return (
    <>
      <Header {...props} />
      <section className="pb-5">
        <div className="container px-4 px-lg-5 mt-2">{children}</div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Layout;
