import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Error from './components/Error/Error';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
