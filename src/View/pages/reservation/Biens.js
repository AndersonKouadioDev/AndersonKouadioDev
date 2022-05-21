import * as React from 'react';
import Header from '../../composents/header/Header';
import Footer from '../../composents/footer/Footer';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './reservation.css';
import { biens } from '../../../data/biens';
import CardBien from './CardBien';
import Typography from '@mui/material/Typography';

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header title="NOS BIENS" back='/' />
      <Box sx={{ bgcolor: 'background.paper', marginBottom: 5 }}>
        <AppBar position="static" sx={{ backgroundColor: '#6F7835' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label="Suite exécutive" />
            <Tab label="Suite Junior" />
            <Tab label="Chambre deluxe" />
            <Tab label="Chambre supérieure 1" />
            <Tab label="Chambre supérieure 2" />
            <Tab label="Studio 1" />
            <Tab label="Studio 2" />
            <Tab label="Studio deluxe" />
            <Tab label="Chambre standard 1" />
            <Tab label="Chambre standard 2" />
            <Tab label="Chambre standard 3" />
          </Tabs>
        </AppBar>
        <Box sx={{ flexGrow: 1, marginTop: 2, paddingX: { sm: 2, md: 8 } }}>
          {biens[value] && (
            <Typography sx={{ paddingY: 2 }} variant="subtitle">
              Classement par ordre de pertinence
            </Typography>
          )}
          <Grid container spacing={2}>
            {biens[value]
              ? biens[value].map((bien, index) => (
                  <Grid item xs={12} sm={4} md={3} key={index}>
                    <CardBien bien={bien} />
                  </Grid>
                ))
              : null}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
