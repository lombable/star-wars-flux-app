import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./views/Home.jsx";
import Characters from "./views/Characters.jsx"
import Navbar from './components/Navbar.jsx';
import Planets from './views/Planets.jsx'
import injectContext from './store/appContext';

function App() {
  return (
    <Router>
      <div style={{height: "100vh", width: "100vw", backgroundImage: `url(${process.env.PUBLIC_URL + '/img/starry-wallpaper.jpg'})` }}>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/planets" component={Planets} />
        </Switch>
      </div>
    </Router>
  );
}

export default injectContext(App);