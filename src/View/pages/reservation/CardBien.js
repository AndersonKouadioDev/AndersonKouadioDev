import * as React from 'react';
import './reservation.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import './reservation.css';
// OWL
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

export default function CardBien({ bien }) {
  let navigate = useNavigate();

  const handleDetail = (e) => {
    let categorie = bien.categorie.replace(/ /g, '_');
    navigate(`/reservation/${categorie}/${bien.id}`, { replace: true });
  };

  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
  };

  return (
    <Card sx={{ maxWidth: { xs: '100%', sm: 250, md: 250 } }}>
      <IconButton aria-label="love">
        <FavoriteIcon />
      </IconButton>
      <CardActionArea>
        <OwlCarousel options={options}>
          {bien.images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              height="200"
              image={image}
              alt={bien.categorie}
              sx={{ borderRadius: '20px' }}
              onClick={handleDetail}
            ></CardMedia>
          ))}
        </OwlCarousel>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={9} sm={9} md={9}>
              <Typography gutterBottom variant="subtitle1" color="primary">
                <b> {bien.nom}</b>
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <b> {bien.vote} </b>
              <StarRateIcon fontSize="small" />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom variant="subtitle1">
                {bien.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom variant="subtitle2">
                {bien.interval}
              </Typography>
              <Typography gutterBottom variant="subtitle2">
                <b> {bien.prix}</b> Franc CFA
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
