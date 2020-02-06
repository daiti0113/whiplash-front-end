import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from 'components/ItemList';
import Header from 'components/Header'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/aaa" exact children={<ItemList />} />
          <Route path="/bbb" children={<Header />} />
        </Switch>
      </BrowserRouter>
    );
  }