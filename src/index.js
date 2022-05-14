import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Products from './components/products';
import Stocks from './components/stocks';
import NotFoundComponent from './components/NotFound';

import { BrowserRouter as Router, Switch, Route,Link,NavLink } from 'react-router-dom';
import Customer from './components/customer';
import Form from './components/Form';
import Enquires from './components/Enquires';




const routing = (
      <Router>
          <section>
                <h2> React Routing Navigation Menu</h2>
                <ul>
                <button type="button" className="btn btn-deafult" >
                  <li><NavLink exact activeClassName="active" to="/home">Home</NavLink ></li>
                  </button>
                  <button type="button" className="btn btn-deafult" >
                  <li><NavLink exact activeClassName="active" to="/products">Products</NavLink ></li>
                  </button>
                  <button type="button" className="btn btn-deafult">
                  <li><NavLink  exact activeClassName="active" to="/stocks">Stocks</NavLink ></li>
                  </button>
                  <button type="button" className="btn btn-deafult">
                  <li><NavLink  exact activeClassName="active" to="/customer/1/max">customer1</NavLink ></li>
                  </button>
                  <button type="button" className="btn btn-deafult">
                  <li><NavLink  exact activeClassName="active" to="/customer/2/david">customer2</NavLink ></li>
                  </button>
                  <button type="button" className="btn btn-deafult">
                  <li><NavLink  exact activeClassName="active" to="/customer/3
                  ">customer3</NavLink ></li>
                  </button>
                  <button type="button" className="btn btn-deafult">
                  <li><NavLink  exact activeClassName="active" to="/user">User Registeration</NavLink ></li>
                  </button>
                  <button type="button" className="btn btn-deafult">
                  <li><NavLink  exact activeClassName="active" to="/enquire">Enquires Form</NavLink ></li>
                  </button>
              
                </ul>
          </section>

          <Switch>
              <Route exact={true} path="/" component={App} /> 
              <Route path="/home" component={App} />
              {/* router parmas are mandatory if we dont supply route params we will get error or router configuration will redirect to error page */}
              <Route path="/customer/:id/:name?" component={Customer} />
              <Route path="/products" component={Products} />
              <Route path="/user" component={Form} />
              <Route path="/enquire" component={Enquires} />
              <Route path="/stocks" component={Stocks} />
              <Route component={NotFoundComponent}/>
          </Switch>
      </Router>
    )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routing
);


