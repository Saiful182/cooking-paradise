import './App.css';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './component/About/About';
import Home from './component/Home/Home';
import Instractors from './component/Instractors/Instractors';
import Service from './component/Service/Service';
import './generated.json';
import Footer from './component/Footer/Footter';



function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home ></Home>
          </Route>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/instractors">
            <Instractors></Instractors>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
