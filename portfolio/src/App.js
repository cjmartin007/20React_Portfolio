import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./routes/Contact";
import About from "./routes/About";
import './App.css';
import ButtonAppBar from "./Nav/Nav";
import HomeStory from "./component/homeStory";


function App() {


  return (

    <Router>
    <div className="App">
      <ButtonAppBar/>
      <header className="App-header">
        <img src="/images/profile2.jpg" alt=""/>
        <HomeStory/>
      </header>
        <Switch>
          <Route exact path={["/"]}></Route>

          <Route exact path="./About"><About/></Route>
          
          <Route exact path="./Contact"><Contact/></Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
