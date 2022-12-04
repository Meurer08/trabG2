import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardGender from './components/Card/CardGender';
import { Grid } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
        sx={{ height: "90vh", marginTop:"80px"}}
      >
        <CardGender gender="male" />
        <Grid item
          xs={12}
          lg={1}
          md={1}>

        </Grid>
        <CardGender gender="female" />
      </Grid>
    </>
  );
}

export default App;
