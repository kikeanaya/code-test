import React from 'react';
import Albums from './Components/Albums';
import Photos from './Components/Photos';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Albums/>}/>
        <Route exact path="/photos/:id" render={(props) => <Photos {...props} />}/>
      </Switch>
    </div>
  );
}

export default App;
