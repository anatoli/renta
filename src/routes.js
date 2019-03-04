import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Widget from './containers/Widget';
import SearchInput from './containers/SearchInput';
// import Article from './containers/Article';
// import NotFound from './containers/NotFound';

export const LandingRouters = () => (
  <Switch>
    <Route exact path='/' component={SearchInput} />
    {/*<Route exact path='/widget' component={Widget} />*/}
    {/*<Route exact path='/article' component={Article} />*/}
    {/*<Route exact path='/about' component={About} />*/}

    {/*<Route component={NotFound} />*/}
  </Switch>
);
