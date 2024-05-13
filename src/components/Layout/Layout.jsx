import "./Layout.css"
import Brand from "../Brand/Brand";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="header">
        <Brand />
        <NavBar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
