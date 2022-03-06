import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuLeftContainer from "./Components/Admin/Container/MenuLeftContainer";
import Header from "./Components/Admin/Header/Header";
import LoadingForm from "./Components/Admin/LoadingForm/LoadingForm";
import { CheckRouter } from "./Components/CheckRouter/CheckRouter";
import Footer from "./Components/Footer/Footer";
// import HomePage from "./Components/HomePage/HomePage";
import RoutesURL from "./Components/Router/Routes";
import HeaderContainer from "./Containers/HeaderContainer";

function App() {
  const router = useLocation();


  return (
    <>
      {
        CheckRouter(router.pathname) ?
          <div className="wrapper">
            <HeaderContainer />
            <RoutesURL>
            </RoutesURL>
            <Footer />
          </div>
          :
          <>
            {/* <LoadingForm /> */}
            <div id="admin-root" className="wrapper-admin">
              <Header />
              <div className="bd-inw-op">
                <MenuLeftContainer />
                <div className="info-root-wq">
                  <RoutesURL>
                  </RoutesURL>
                </div>

              </div>

            </div>
          </>
      }
    </>
  );
}

export default App;
