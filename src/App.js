import RoutesIndex from "./components/Routes-Setup/Router";
import ScrollTopOnRouteChange from "./components/ScroolTopOnRouteChange/RouteChangeFromTop";

function App() {
  return (
    <div>
      <RoutesIndex></RoutesIndex>
      <ScrollTopOnRouteChange />
    </div>
  );
}

export default App;
