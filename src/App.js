import {HashRouter,Route} from "react-router-dom"
import Navigation from "./components/Navigation";
import About from "./routers/About";
import Detail from "./routers/Detail";
import Home from "./routers/Home";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
