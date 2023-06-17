import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";
import CookieConsent from "./Components/CookieConsent";

function App() {
  return (
    <>
      <Header />
      <div className="content container">
        <div className="row">
          <div className="col-lg-4 col-xl-4  ">
            <SideMenu />
          </div>
          <div className="col-lg-8 col-xl-8">
            <Content />
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
