import React, { useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import LayoutDefault from './layouts/LayoutDefault';
import Home from './components/Home';
import Collections from './components/Collections'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

function trackPage (page) {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function App() {

  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    trackPage(page);
  }, [location]);

  return (
      <Switch>
          <LayoutDefault>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/collections">
                  <Collections />
              </Route>
          </LayoutDefault>
      </Switch>
  );
}

export default App;
