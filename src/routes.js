import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import Header from './components/Header'

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact children={<Header />} />
        <Route path="/items" children={<ItemList />} />
      </Switch>
    );
  }