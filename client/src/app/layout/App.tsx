import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);   
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>   
    <ToastContainer position='bottom-right' hideProgressBar theme='colored' /> 
        <CssBaseline />
        <Header darkMode= {darkMode} handleThemeChange={handleThemeChange}/>
        <Container>
          <Outlet/>
        </Container>  
    </ThemeProvider>        
  );
}
export default App;


