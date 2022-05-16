import * as React from 'react';
import './CardService.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

export default function CardService({ img, title, content }) {
  let navigate = useNavigate();
  function handleChange() {
    navigate('/dcv_services', { replace: true });
  }
  const styleBtn = {
    color: '#white',
    marginLeft: 2,
    '&:hover': {
      backgroundColor: '#6F7835',
      color: 'white',
    },
  };
  const styleTitle = {
    color: 'white',
    width: '80%',
  };
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        color: 'white',
        backgroundColor: '#121212',
        border: '2px solid #6F7835',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={styleTitle}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            {content}
          </Typography>
        </CardContent>
        <CardActions style={{ backgroundColor: '#6F7835' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="go services"
            sx={styleBtn}
            onClick={handleChange}
          >
            <ChevronRightIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
