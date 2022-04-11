import{BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./Components.js/Home.jsx"

import Page4 from "./Components.js/page4.jsx"

import Hello from "./Components.js/Hello.jsx"

import Bluered from "./Components.js/bluered.jsx"

export default function App() {
  return (
    <BrowserRouter>
        
            <p>
              <Link to="/home">Home</Link>
              <Link to="/4">Page4</Link>
              <Link to="/hello">Hello</Link>
              <Link to="/hello/blue/red">bluered</Link>
            </p>
            <div>Hello World</div>
            <Switch>
            <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/4">
                  <Page4/>
                </Route>
                <Route  path="/hello/blue/red">
                  <Bluered />
                </Route>
                <Route exact path="/hello">
                  <Hello/>
                </Route>
              
            </Switch>
    </BrowserRouter>
  );
}
