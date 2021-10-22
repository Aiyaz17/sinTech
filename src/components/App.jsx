import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";
import Contact from "./contact/Contact";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "5px",
    transition: transitions.SCALE,
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div>
              <Hero />
              <Services />
              <Footer />
            </div>
          </Route>
          <Route path="/contact">
            <AlertProvider template={AlertTemplate} {...options}>
              <Contact />
            </AlertProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
