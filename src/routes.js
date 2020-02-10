import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Ranking from './components/Ranking';
import Search from './components/Search';

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/ranking" children={<Ranking />} />
        <Route path="/search" children={<Search />} />
      </Switch>
    );
  }