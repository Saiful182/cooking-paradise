import './App.css';
import Header from './component/Header/Header';
import { NotFound } from 'http-errors';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './component/About/About';
import Home from './component/Home/Home';
import Instractors from './component/Instractors/Instractors';
import Service from './component/Service/Service';
import './generated.json';



function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home ></Home>)
          </Route>
          <Route exact path="/">
            <Home ></Home>)
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/instractors">
            <Instractors></Instractors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
