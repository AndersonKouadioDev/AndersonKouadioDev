import React, { useState, useEffect } from 'react';
import { getChambre } from '../../../redux/actions/a_chambres';
import { getCategorie } from '../../../redux/actions/a_categories';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../composents/header/Header';
import Footer from '../../composents/footer/Footer2';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './reservation.css';
import CardBien from './CardBien';
import Typography from '@mui/material/Typography';

export default function FullWidthTabs() {
  const dispatch = useDispatch();

  const { chambres } = useSelector((state) => state.chambres);
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getChambre());
    dispatch(getCategorie());
  }, [dispatch]);

  const [value, setValue] = useState(0);
  const selected_chambres = chambres.filter((chambre) => chambre.categorie_id === categories[value].id);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header title="NOS BIENS" back="/" />
      <Box sx={{ bgcolor: 'background.paper', marginBottom: 5 }}>
        <AppBar position="static" sx={{ backgroundColor: '#6F7835' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
            indicatorColor="secondary"
            textColor="inherit"
          >
            {categories
              ? categories.map((categorie, index) => (
                  <Tab label={categorie.label} key={index} />
                ))
              : null}
          </Tabs>
        </AppBar>
        <Box sx={{ flexGrow: 1, marginTop: 2, paddingX: { sm: 2, md: 8 } }}>
          {selected_chambres && (
            <Typography sx={{ paddingY: 2 }} variant="h6">
              Classement par ordre de pertinence
            </Typography>
          )}
          <Grid container spacing={2}>
            {selected_chambres
              ? selected_chambres.map((chambre, index) => (
                  <Grid item xs={12} sm={4} md={3} key={index}>
                    <CardBien chambre={chambre} />
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
