import Home from "../../HomeArea/Home/Home";
import Links from "../Links/Links";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="Layout">
        <header>
          <Header />
        </header>
        <aside>
          <Links />
        </aside>
        <main>
          <Routing />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
