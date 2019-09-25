import React from 'react';
import './App.css';
import 'typeface-roboto';
import AppBar from './Components/AppBar'
import PaperComp from './Components/PaperComp'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Wizard from './Components/Wizard'
import InfoCard from './Components/InfoCard'

function App() {
  return (
    <div className="App">
      <AppBar/>

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <br />
          <InfoCard></InfoCard>
          <br />
          <PaperComp>
            <Wizard></Wizard>
            <br />
          </PaperComp>

        </Container>
      </React.Fragment>

    </div>
  );
}

export default App;
