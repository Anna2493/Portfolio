import './App.css';
import NavigationBar from './components/navigation_bar/NavigationBar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Projects from './components/pages/projects/Projects';


import QMethod_project from './components/pages/projects/QMethodology_project/QMethodology'
import AutoQSurvey_project from './components/pages/projects/autoQsurvey_project/AutoQsurvey_project'

//import Projects from './components/pages/Projects'

function App() {
  return (
    <div className='container'>
      <section>
        <Home/>
      </section>
      
      <section>
      <About/>
      </section>
      
      <section>
      <Projects/>
      </section>
      
    </div>
    
  );
}

// function App() {
//   return (
//     <Router>
//       <div>
        
//         {/* <Home />
//          <Projects /> */}
//         {/* <NavigationBar /> */}
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Projects/>
//           <Route path="/QMethodology" component={QMethod_project} />
//           <Route path="/autoQsurvey_project" component={AutoQSurvey_project} />
//         </Switch>

//         {/* <NavigationBar /> */}

        
//       </div>
//     </Router>
//   );
// }

export default App;
