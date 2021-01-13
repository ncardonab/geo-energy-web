import React from "react";
import Main from "./components/Main/Main";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Team from "./components/Team/Team";
import Activities from "./components/Activities/Activities";
import WhatIsGeothermalEnergyExtended from "./components/Main/WhatIsGeothermalEnergy/WhatIsGeothermalEnergyExtended/WhatIsGeothermalEnergyExtended";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/team" component={Team} />
        <Route path="/activities" component={Activities} />
        <Route
          path="/WhatIsGeothermalEnergy"
          component={WhatIsGeothermalEnergyExtended}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
