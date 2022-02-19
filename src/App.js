import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import RoutesURL from "./Components/Router/Routes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <RoutesURL>
      </RoutesURL>
      <Footer />
    </div>
  );
}

export default App;
