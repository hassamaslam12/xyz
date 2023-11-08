import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

import Navbar from './components/navbar/Navbar';
import Card from './components/Card/Card';


function App() {
  return (
    <>
      <Navbar/>
      <Card/>
      
      
    </>
  );
}

export default App;

{/* <Stack sx={{
  flexDirection:{
    xs: 'column',
    sm: 'column',
    md: 'row',
    lg:'row',
    xl:'row',

  }
}}>

  

<TextField id="outlined-basic" label="Enter your name" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
</Stack> */}