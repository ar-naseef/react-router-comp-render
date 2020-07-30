import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { EuiBottomBar, EuiButton } from '@elastic/eui'

import '@elastic/eui/dist/eui_theme_light.css';

function Home() {
  return (
    <div>Hi from Home!</div>
  )
}

function About() {
  return (
    <div>Hi from About</div>
  )
}

function Dashboard({ bottom }) {

  console.log("bottom")
  console.log(bottom)
  const [bottomSheet, setBottomSheet] = useState(bottom ? true : false)
  const history = useHistory()

  return (
    <div>
      {bottomSheet ? (
        <EuiBottomBar style={{
          height: '70vh'
        }}>
          <div>
            Hello all
          </div>
        </EuiBottomBar>
      ) : null}
      <div>Hello from Dash</div>
      <EuiButton onClick={() => {
        // setBottomSheet(true)
        // history.push('/dashboard/bot')
      }}>
        <a href="/dashboard/bot">
          Open bottom sheet
        </a>
      </EuiButton>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/bot" exact>
          <Dashboard bottom={true} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
