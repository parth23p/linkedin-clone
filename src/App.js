import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProp = (props) => {
  return {};
}
const mapDispatchToProp = (dispacth) => ({
  getUserAuth: () => dispacth(getUserAuth()),
});

export default connect(mapStateToProp, mapDispatchToProp)(App);

// export default App;
