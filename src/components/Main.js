import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Product from './Product';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/products" component={Product} />
    </Switch>
  );
};

export default Main;