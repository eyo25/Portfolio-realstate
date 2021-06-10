import Navigation from './Components/Navigation'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
