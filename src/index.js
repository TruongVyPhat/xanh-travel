import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './views/LandingPage';
import TourDetail from "./views/TourDetail.jsx";

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications'
import ServiceDetail from './views/ServiceDetail';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact 
        path="/" 
        render={props => <LandingPage {...props} />}
      />
      <Route exact
        path="/tours/:id" 
        render={props => <ToastProvider autoDismiss={true} placement="bottom-right"><TourDetail {...props} /></ToastProvider>}
      />
      <Route exact
        path="/services/:id" 
        render={props => <ToastProvider autoDismiss={true} placement="bottom-right"><ServiceDetail {...props} /></ToastProvider>}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

