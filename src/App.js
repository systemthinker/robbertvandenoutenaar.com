import "./App.css";
import { StyledH1 } from "./App.sc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </Router>
      <section>
        <div style={{ height: "1000px" }}>
          <StyledH1>app</StyledH1>
        </div>
      </section>
    </div>
  );
}

export default App;
