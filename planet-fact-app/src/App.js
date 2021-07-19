import { Component } from "react";
import NavBar from "./Components/NavBar";
// import ContentSelection from "./Components/ContentSelection";
// import Content from "./Components/Content";
// import Planet from "./Components/Planet";
// import FactCards from "./Components/FactCards";
// import { ContentLayout } from "./Components/ContentLayout.style";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContent from "./Components/AppContent";

const planetData = require("./data.json");

class App extends Component {
  state = {
    currentPlanet: "",
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path={`/:id`} component={AppContent} />
        </div>
      </Router>
    );
  }
}

export default App;
