import React, { useState, useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Grid';
import 'katex/dist/katex.min.css';

function App() {
  const [equations, setEquations] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append('content-type', 'application/json')
    fetch('/api/equation/', { headers })
    .then(response => response.json())
    .then(body => {
      setEquations(body)
    })
  }, []);
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Equation Solver</h2>
        </div>
        <p className="App-intro">
          This application is still in its early stage. Here's a list of equations we have so far.
        </p>
        <div className="App-container">
          <Grid
            container
            direction="row"
            justify="center"
            spacing={5}
            alignItems="center"
          >

              { equations.map((equation, index) => 
                  <Equation key={index} {...equation }/>)
              }
          </Grid>
        </div>
    </div>
  );
}

export default App;
