import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
