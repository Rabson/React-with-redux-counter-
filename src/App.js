import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layouts/Layout';
import Home from './containers/Home/Home';
import ShowTodo from './containers/ShowTodo/ShowTodo';
import AddTodo from './containers/AddTodo/AddTodo';
import Header from './components/Header/Header';
import Siginup from './components/Signup/Siginup';
import Login from './components/Login/Login';
// import AuthenticatedRoute from "./hoc/AuthenticatedRoute";
// import UnauthenticatedRoute from "./hoc/UnauthenticatedRoute";
function App() {

  // const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App">
      <Header />
      <Layout>
        <Switch>
          <Route path="/showtodo" component={ShowTodo} />
          <Route path="/addtodo" component={AddTodo} />
          <Route path="/signup" component={Siginup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}


export default App;