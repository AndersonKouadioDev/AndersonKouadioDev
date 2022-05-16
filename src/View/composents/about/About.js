import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function About() {
  let navigate = useNavigate();
  function handleChange() {
    navigate('/qui_sommes_nous', { replace: true });
  }
  const styleBtn = {
    backgroundColor: '#8A7E66',
    color: 'white',
    border: '1px solid #8A7E66',
    '&:hover': {
      backgroundColor: '#6F7835',
      border: '1px solid #6F7835',
    },
  };
  const styleTitle = {
    color: '#6F7835',
    marginRight:'10px',
  };
  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col sm={12} md={8}>
          <img src="assets/images/principal/logo2.png" alt="logo2" width="100%" />
        </Col>
      </Row>
      <Typography variant="h3" sx={styleTitle}>
        {'domaine de la coulée verte'.toLocaleUpperCase()}
      </Typography>
      <Typography variant="h4" sx={{color:"white"}}>Sous titre</Typography>
      <Typography variant="body1" sx={{ width: '80%', color:"white"}}>
        Facere repellat inventore corporis ratione eius mollitia numquam
        explicabo fuga ipsa voluptates obcaecati, voluptate, impedit,
      </Typography>
      <Button variant="outlined" sx={styleBtn} onClick={handleChange}>
        Qui sommes-nous ?
      </Button>
    </div>
  );
}
