import React, { Component } from 'react';
import './App.css';
import { withStyles,styles } from '@material-ui/core/styles';
import { SearchBar} from './components/Search';
import { PrimarySearchAppBar} from "./components/Header"
import { Results} from "./components/Results"

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-12">
        <div className="anchors">
          <PrimarySearchAppBar/>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        <div classNme="search">
          <SearchBar/>
        </div>
        </div>
        </div>
        <div className="display">
          <Results/>
        </div>
      </div>

    );
  }
}


export default withStyles(App);
