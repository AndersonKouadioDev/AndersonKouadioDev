import React, { useState, useEffect } from 'react';
import { getChambre } from '../../../redux/actions/a_chambres';
import { getCategorie } from '../../../redux/actions/a_categories';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../composents/header/Header';
import Footer from '../../composents/footer/Footer';
import Calendar from '../../composents/calendar/Calendar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import TextField from '@mui/material/TextField';

export default function Detail() {
  const dispatch = useDispatch();

  let params = useParams();

  const { chambres } = useSelector((state) => state.chambres);
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getChambre());
    dispatch(getCategorie());
  }, [dispatch]);

  const chambre = chambres.find(
    (chambre) => chambre.id === parseInt(params.id)
  );

  return chambre ? (
    <>
      <Header title="RESERVATIONS" back="/biens_DCV" />
      <Container>
        <Box
          sx={{
            paddingLeft: { xs: 0, sm: 2 },
            paddingY: { xs: 0, sm: 2, md: 3 },
          }}
        >
          <Typography variant="h5">{chambre.nom}</Typography>
          <Typography variant="subtitle1">
            <b> {chambre.vote} </b>
            <StarRateIcon
              fontSize="small"
              style={{ transform: 'translateY(-2px)', marginX: 2 }}
            />
            <a href="" style={{ marginLeft: '10px', color: 'black' }}>
              {chambre.commentaires.length > 0
                ? chambre.commentaires.length + ' commentaires'
                : chambre.commentaires.length + ' commentaire'}{' '}
            </a>
            <RoomIcon
              fontSize="small"
              style={{ transform: 'translateY(-2px)', marginX: 2 }}
            />
            {chambre.adresse}
          </Typography>
        </Box>
        <Box sx={{ paddingX: { xs: 0, sm: 2 } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  component="img"
                  src={'/' + chambre.images[0]}
                  alt="image1"
                ></Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Grid container spacing={1}>
                    {chambre.images.map(
                      (elt, id) =>
                        id > 0 && (
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            component="img"
                            src={'/' + elt}
                            alt="image1"
                            key={id}
                          ></Grid>
                        )
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            paddingLeft: { xs: 0, sm: 2 },
            paddingY: { xs: 0, sm: 2, md: 3 },
          }}
        >
          <Typography variant="h5">{chambre.description}</Typography>
          <Typography variant="subtitle1">
            {chambre.nb_max_personne > 1
              ? chambre.nb_max_personne + ' voyageurs | '
              : chambre.nb_max_personne + ' voyageur | '}
            {chambre.nb_chambre > 1
              ? chambre.nb_chambre + ' chambres | '
              : chambre.nb_chambre + ' chambre | '}

            {chambre.nb_salle_bain > 1
              ? chambre.nb_salle_bain + ' salles de bain '
              : chambre.nb_salle_bain + ' salle de bain'}
          </Typography>
        </Box>
        {/* Reservation */}
        <Row
          style={{
            marginBottom: '50px',
          }}
        >
          <Col xs={12} sm={12} md={12}>
            <Typography
              variant="h5"
              color="primary"
              style={{ textAlign: 'center' }}
            >
              Réserver ici
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
          </Col>
          <Col>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField
                  // error
                  id="nom_prenoms"
                  label="Nom et Prénoms"
                  placeholder="Anderson Kouadio"
                  helperText="Obligatoire"
                  variant="standard"
                  fullWidth
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  //   error
                  id="email"
                  label="Email"
                  placeholder="andersonkouadio@gmail.com"
                  helperText="Obligatoire"
                  variant="standard"
                  fullWidth
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  //   error
                  id="tel"
                  label="Téléphone"
                  placeholder="+225 0768566647"
                  helperText="Obligatoire"
                  variant="standard"
                  fullWidth
                />
              </Box>
            </Box>
          </Col>
          <Col>
            <Calendar />
          </Col>
          <Col xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary">
              Valider
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  ) : (
    <Navigate to="/biens_DCV" />
  );
}
