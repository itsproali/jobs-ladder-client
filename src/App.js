import "./App.css";
import RoutesIndex from "./components/Routes-Setup/Router";
import Contact from "./pages/Home/Contact/Contact";
import Footer from "./pages/Home/Footer/Footer";

function App() {
  return (
    <div>
      <RoutesIndex></RoutesIndex>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
