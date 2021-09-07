import React from 'react';
import SimpleBar from './SimpleBar';
import GradientBar from './GradientBar.tsx';
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";


const Links = styled.div`
  display: flex;
  justify-content: center;
`

const CustomLink = styled(Link)`
  font-size: 1.5rem;
  padding: 1rem;
`

function Chart() {
  return (
    <Router>
      <Links>
        <CustomLink to='/SimpleBar'>Simple barchart</CustomLink>
        <CustomLink to='/GradientBar'>Gradient barchart</CustomLink>
      </Links>
      <Switch>
        <Route path='/simplebar'>
          <SimpleBar />
        </Route>
        <Route path='/gradientbar'>
          <GradientBar />
        </Route>
      </Switch>
    </Router>
  );
};

export default Chart