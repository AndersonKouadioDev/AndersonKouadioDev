import React,{useState} from 'react';
import './Footer.css';
import Stack from 'react-bootstrap/Stack';
// Icons
import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import SnackBarSender from '../../composents/snackbar/SnackBarSender';
import { NewletterSchema } from '../../../Validations/FormValidation';
import emailjs from '@emailjs/browser';

export default function Footer() {

  const [newsletter,setNewletter] = React.useState({email:''});

  const handleChangeNewLetter = (e)=>{
  setNewletter({email:e.target.value})
  }

  const form = React.useRef();
  const [snack, setSnack] = useState('');
  const handleValidate = async (event) => {
    
    event.preventDefault();
    const isValid = await NewletterSchema.isValid(newsletter);


    if (isValid) {
      await emailjs
        .sendForm(
          'service_ljp0tif',
          'template_sndaeuc',
          form.current,
          'YzzNBgGzGygOXcDci'
        )
        .then(
          () => {
            setSnack(
              <SnackBarSender
                message="Votre demande à bien été prise en charge."
                etat="success"
              />
            );
            setNewletter({email:''});
          },
          () => {
            setSnack(
              <SnackBarSender
                message="Un problème est survenu réserver plutard svp!"
                etat="warning"
              />
            );
          }
        );
      try {
        await emailjs.sendForm(
          'service_lbvsf8h',
          'template_sndaeuc',
          form.current,
          'YzzNBgGzGygOXcDci'
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      setSnack(
        <SnackBarSender
          message="Veuillez Renseigner votre email SVP!"
          etat="error"
        />
      );
    }
  };

  return (
   
    <div

      className="info_section layout_padding2"
      style={{ background: '#000', color:'white' , borderTop:'2px solid #6F7835'}}
    >
       {snack}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 info-col">
            <div className="info_detail">
              <h4>Qui sommes-nous</h4>
              <p>
                Le Domaine de la Coulée Verte est un cadre verdoyant, reposant,
                paradisiaque offrant les services de restauration, d'hébergement
                et d'événementiel....
              </p>
              <Stack className="info_social" direction="horizontal">
                <a
                  href="https://www.facebook.com/domainedelacouleeverte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <Facebook sx={{ fontSize: 40, color: 'white' }} />
                  </IconButton>
                </a>
                <a
                  href="https://www.linkedin.com/company/domainde-de-la-coulee-verte/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <LinkedIn sx={{ fontSize: 40, color: 'white' }} />
                  </IconButton>
                </a>
                <a
                  href="https://www.instagram.com/domainedelacouleeverte/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <Instagram sx={{ fontSize: 40, color: 'white' }} />
                  </IconButton>
                </a>
              </Stack>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 info-col">
            <div className="info_contact">
              <h4>Adresse</h4>
              <div className="contact_link_box">
                <p>
                  <LocationOnIcon />
                  <span>Lieu : </span> Angré, 7ème tranche, à 400m de l'ANP,
                  Ruelle HACA
                </p>
                <p>
                  <PhoneIcon />
                  <span>Tel (+225) 07 98 68 75 11</span>
                </p>
                <p>
                  <span>Info@domainedelacouleeverte.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 info-col">
            <div className="info_contact">
              <h4>Newsletter</h4>
              <form action="#"   ref={form}>
                <input type="text" placeholder="Enter email" name='email' value={newsletter.email} onChange={handleChangeNewLetter}/>
                <Button variant="contained" onClick={handleValidate}>
                  Envoyer
                  </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span>Domaine de la Coulée Verte &nbsp;
          </p>
        </div>
      </footer>
    </div>
  );
}
