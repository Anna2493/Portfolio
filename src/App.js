import './App.css';
import NavigationBar from './components/navigation_bar/NavigationBar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
