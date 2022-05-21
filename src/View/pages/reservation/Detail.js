import React from 'react';
import Header from '../../composents/header/Header';
import Footer from '../../composents/footer/Footer';
import Calendar from '../../composents/calendar/Calendar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { biens } from '../../../data/biens';
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
  let params = useParams();

  const datas = biens.find((data) =>
    data[0].categorie.replace(/ /g, '_').includes(params.categorie)
  );

  const bien = datas.find((elt) => elt.id === parseInt(params.id));
  console.log(bien);
  return bien ? (
    <>
      <Header title="RESERVATIONS" back="/biens_DCV" />
      <Container>
        <Box
          sx={{
            paddingLeft: { xs: 0, sm: 2 },
            paddingY: { xs: 0, sm: 2, md: 3 },
          }}
        >
          <Typography variant="h5">{bien.nom}</Typography>
          <Typography variant="subtitle1">
            <b> {bien.vote} </b>
            <StarRateIcon
              fontSize="small"
              style={{ transform: 'translateY(-2px)', marginX: 2 }}
            />
            <a href="" style={{ marginLeft: '10px', color: 'black' }}>
              {bien.commentaires.length > 0
                ? bien.commentaires.length + ' commentaires'
                : bien.commentaires.length + ' commentaire'}{' '}
            </a>
            <RoomIcon
              fontSize="small"
              style={{ transform: 'translateY(-2px)', marginX: 2 }}
            />
            {bien.adresse}
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
                  src={'/' + bien.images[0]}
                  alt="image1"
                ></Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Grid container spacing={1}>
                    {bien.images.map(
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
          <Typography variant="h5">{bien.description}</Typography>
          <Typography variant="subtitle1">
            {bien.nb_max_personne > 1
              ? bien.nb_max_personne + ' voyageurs | '
              : bien.nb_max_personne + ' voyageur | '}
            {bien.nb_chambre > 1
              ? bien.nb_chambre + ' chambres | '
              : bien.nb_chambre + ' chambre | '}

            {bien.nb_salle_bain > 1
              ? bien.nb_salle_bain + ' salles de bain '
              : bien.nb_salle_bain + ' salle de bain'}
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
            <Divider sx={{marginBottom:2}} />
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
