import * as React from 'react';
import './CardService.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function CardService({ img, title}) {
  let navigate = useNavigate();
  function handleChange() {
    navigate('/biens_DCV', { replace: true });
  }
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
          <Typography gutterBottom variant="h6" component="div" sx={styleTitle}>
            {title}
          </Typography>
          <Button variant='outlined' onClick={handleChange}>Reserver</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
