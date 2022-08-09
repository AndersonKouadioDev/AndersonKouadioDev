import React, { useState, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../composents/header/Header';
import Footer from '../../composents/footer/Footer2';
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
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './reservation.css';
import OwlCarousel from 'react-owl-carousel2';
import CardMedia from '@mui/material/CardMedia';
import { chambres } from '../../../data/db';
import SnackBarSender from '../../composents/snackbar/SnackBarSender';

export default function Detail() {
  const dispatch = useDispatch();

  let params = useParams();

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  // Get Chambres
  useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, [dispatch]);

  // Select a good chambre
  const chambre = chambres.find(
    (chambre) => chambre.id === parseInt(params.id)
  );
  //

  // open and close dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
  };

  const [date_dcv, setDate_dcv] = useState({});

  const handleChangeDate = (item) => {
    setDate_dcv(item);
    setSnack('');
    setReservation({
      date_debut: item.startDate,
      date_fin: item.endDate,
    });
  };

  const initialState = {
    nom_prenoms: '',
    email: '',
    tel: '',
    date_debut: date_dcv.startDate,
    date_fin: date_dcv.endDate,
    bien: chambre.nom,
  };

  const [reservation, setReservation] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );

  const handleChangeReservation = (event) => {
    setReservation({ [event.target.name]: event.target.value });
    setSnack('');
  };

  const [snack, setSnack] = useState('');
  const handleValidate = (event) => {
    event.preventDefault();
    if (
      reservation.nom_prenoms &&
      reservation.email &&
      reservation.tel &&
      reservation.date_debut &&
      reservation.date_fin
    ) {
      setReservation(initialState);
      setSnack(
        <SnackBarSender message="Réservation prise en compte." etat="success" />
      );
    } else {
      setSnack(
        <SnackBarSender
          message="Veuillez Remplir tous les champs SVP!"
          etat="error"
        />
      );
    }
  };

  // End

  return chambre ? (
    <>
      {snack}
      {/* Fin SnackBar */}
      {/* DIALOG */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Toutes les images
            </Typography>
          </Toolbar>
        </AppBar>
        <ImageList variant="woven" cols={sizeScreen > 600 ? 3 : 1} gap={8}>
          {chambre.images.map((image, id) => (
            <ImageListItem key={id}>
              <img
                src={`/${image}?w=161&fit=crop&auto=format`}
                srcSet={`/${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={'image' + id}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Dialog>

      {/*  */}

      <Header title="RESERVATIONS" back="/biens_DCV" />
      <Container
        style={{
          overflowX: 'hidden',
        }}
      >
        <Box
          sx={{
            paddingLeft: { xs: 0, sm: 2 },
            paddingY: { xs: 0, sm: 2, md: 3 },
          }}
        >
          <Typography variant="h5">{chambre.nom}</Typography>
          {/* <Typography variant="subtitle1">
            <b> {chambre.vote} </b>
            <StarRateIcon
              fontSize="small"
              style={{ transform: 'translateY(-2px)', marginX: 2 }}
            />
            <span
              style={{
                textDecoration: 'underline',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              {chambre.commentaires.length > 0
                ? chambre.commentaires.length + ' commentaires'
                : chambre.commentaires.length + ' commentaire'}{' '}
            </span>
            <RoomIcon
              fontSize="small"
              style={{ transform: 'translateY(-2px)', marginX: 2 }}
            />
            {chambre.adresse}
          </Typography> */}
        </Box>
        {sizeScreen > 600 ? (
          <Box sx={{ paddingX: { xs: 0, sm: 2 } }} className="cible_all_images">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    component="img"
                    src={'/' + chambre.images[0]}
                    alt="image1"
                  ></Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={1}>
                      {chambre.images.map(
                        (elt, id) =>
                          id > 0 &&
                          id < 5 && (
                            <Grid
                              item
                              xs={12}
                              sm={6}
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
            <Button
              variant="contained"
              startIcon={<AppsIcon />}
              onClick={handleClickOpen}
            >
              Afficher toutes les images
            </Button>
          </Box>
        ) : (
          <Box
            sx={{ paddingX: { xs: 0, sm: 2 } }}
            className="cible2_all_images"
          >
            <OwlCarousel options={options} sx={{ marginY: '50px' }}>
              {chambre.images.map((image, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  height="240"
                  image={'/' + image}
                  alt={chambre.categorie}
                  sx={{ borderRadius: '20px' }}
                ></CardMedia>
              ))}
            </OwlCarousel>
            <Button
              variant="contained"
              startIcon={<AppsIcon />}
              onClick={handleClickOpen}
            >
              Afficher toutes les images
            </Button>
          </Box>
        )}

        {/* <Box
          sx={{
            paddingLeft: { xs: 0, sm: 2 },
            paddingY: { xs: 0, sm: 2, md: 3 },
          }}
        >
          <Typography variant="h6">{chambre.description}</Typography>
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
        </Box> */}
        {/* Reservation */}
        <Row
          style={{
            marginBottom: '50px',
            marginTop: '50px',
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
          <Col xs={12} sm={6} md={8}>
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
                  name="nom_prenoms"
                  value={reservation.nom_prenoms}
                  onChange={handleChangeReservation}
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
                  name="email"
                  value={reservation.email}
                  onChange={handleChangeReservation}
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
                  name="tel"
                  value={reservation.tel}
                  onChange={handleChangeReservation}
                  placeholder="+225 0768566647"
                  helperText="Obligatoire"
                  variant="standard"
                  fullWidth
                />
              </Box>
            </Box>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <Calendar handleDate={handleChangeDate} />
          </Col>
          <Col xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleValidate}
            >
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
