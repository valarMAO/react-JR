import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home/index';
import 'antd/dist/antd.css';

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' component={ Home }></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
