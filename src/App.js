import './App.scss'
import {StyledH1 } from './App.sc'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home.js'
import About from './components/About/About.js'

function App() {
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
         <Route path="/" component={Home} />
         <Route path="/about" component={About} />
          
         
         
        </Routes>
      </div>
    </Router> 
    <div>
      <StyledH1>
      app
      </StyledH1>
    </div>
    </div>
  );
}

export default App;
