import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header'
import { BrowserRouter as Router } from "react-router-dom";
import { LandingRouters } from "./routes";

export class App extends PureComponent {
  static propTypes = {
    history: PropTypes.object
  };

  render () {
    return (
      <div>
        <Router>
          <LandingRouters {...this.props} />
        </Router>
      </div>
    );
  }
}

