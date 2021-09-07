import "./App.css";
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Chart from "./Chart";
import Map from "./Map";

const Links = styled.div`
  display: flex;
  justify-content: center;
`

const CustomLink = styled(Link)`
  font-size: 1.5rem;
  padding: 1rem;
`

function App() {
  return (
    <Router>
      <Links>
        <CustomLink to='/chart'>Chart</CustomLink>
        <CustomLink to='/map'>Map</CustomLink>
      </Links>
      <Switch>
        <Route path='/chart'>
          <Chart />
        </Route>
        <Route path='/map'>
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
