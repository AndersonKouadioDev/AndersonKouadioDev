import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




export default function TemoignageItem({ avatar, message, name, job }) {


  return (
    <Card sx={{ maxWidth: 345, minHeight:400, margin:'0px auto'}}  style={{
      color: 'white',
      backgroundColor: '#121212',
      border: '2px solid #6F7835',
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#8a7e66" }} aria-label="recipe">
            {name.substring(0,1)}
          </Avatar>
        }
        title={name}
        subheader={job}
      />
      <CardMedia
        component="img"
        height="194"
        image={avatar}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2">
        {message}
        </Typography>
      </CardContent>
    </Card>
  );
}
