import React , {Fragment}  from "react";

//ROUTING
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './componentes/layouts/Header';
import Home from './componentes/home/Home';
import Blog from './componentes/blog/Blog';


function App() {
  return (
    <Fragment>
      <Router>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog/:name" component={Blog}/>
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        
      </Router>
    </Fragment>
  );
}

function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}

export default App;
