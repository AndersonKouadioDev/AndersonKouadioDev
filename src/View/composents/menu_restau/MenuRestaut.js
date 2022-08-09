import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './MenuRestau.css';
import entrees from '../../../images/menu_restau/entrees.png';
import plat from '../../../images/menu_restau/plat.png';
import dessert from '../../../images/menu_restau/dessert.png';
import cock from '../../../images/menu_restau/cock.png';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows_entrees = [
  createData(
    'Avocat aux crevettes.',
    '(Avocado and shrimps)',
    '5 000',
    ''
  ),
  createData(
    'Salade niçoise.',
    '( lettuce, boiled egg , green bean , potatoes, schredded tuna , black olives)',
    '6 000',
    ''
  ),
  createData(
    'Crêpe fermière.',
    '( stuffed pancake , chicken and creamy mushroom sauce )',
    '5 000',
    ''
  ),
  createData(
    'Crevettes sautées à l’ail.',
    '( sauted shrimps and garlic)',
    '6 000',
    ''
  ),
];

const rows_dessert= [
  createData(
    'Glace à la vanille ou sorbet.',
    '( vanilla ice cream or sorbet selection)',
    '2 000',
    ''
  ),
  createData(
    'Crêpe au chocolat.',
    '(chocolate pancake)',
    '2 000',
    ''
  ),
  createData(
    'Assiette de fruits.',
    '(mixed fruit platter selection)',
    '2 500',
    ''
  ),
  createData(
    'Selection de fromage.',
    '(mixed cheeese platter)',
    '5 000',
    ''
  ),
];

const rows_plat = [
  createData(
    '',
    '',
    '',
    'Viande'
  ),
  createData(
    'Entrecôte poêlée aux échalotes,pomme de terre sautées...',
    '(Beef rib , shallot , sauteed potatoes)',
    '10 000',
    ''
  ),
  createData(
    'Filet de bœuf, poivre vert, frites...',
    '(beef filet , green pepper sauce, french fries) ',
    '10 000',
    ''
  ),
  createData(
    'Côtelette d’agneau, moutarde, légumes...',
    '(Rack of Lamb , mustard sauce and veggies )'    ,
    '10 000',
    ''
  ),
  createData(
    '',
    '',
    '',
    'Volaille'
  ),
  createData(
    'Escalope de poulet à la provinciale, riz au curry...',
    '(provencal chicken scallop , curried rice)'    ,
    '8 000',
    ''
  ),
  createData(
    'Poulet sauté à l’ivoirienne et attiéké...',
    '(ivorian sauted chicken , cassava semolina)'    ,
    '10 000',
    ''
  ),
  createData(
    'Poulet braisé , alloco...',
    '(braised chicken , fried plantain )'    ,
    '7 000',
    ''
  ),
  createData(
    'Kedjenou de pintade , riz blanc...',
    '(guineafowl stew , rice)'    ,
    '10 000',
    ''
  ),
  createData(
    '',
    '',
    '',
    'Poisson'
  ),
  createData(
    'Pavé de mérou poêlé, crème champignon, frites...',
    '(grouper Fish , mushroom sauce , fries )'    ,
    '12 000',
    ''
  ),
  createData(
    '',
    '',
    '',
    'Végétarien'
  ),
  createData(
    'Riz au champignon...',
    '(Rice and mushroom)'    ,
    '6 000',
    ''
  ),
  createData(
    'Salade végétarienne...',
    '(vegetarian salad)'    ,
    '7 000',
    ''
  ),
];

const rows_cocktails = [
  createData(
    '',
    '',
    '',
    'Cocktails non alcoolisés'
  ),
  createData(
    'BORA BORA.',
    '(Jus de passion, jus d’ananas, jus de mangue, sirop de fraise)',
    '5 000',
    ''
  ),
  createData(
    'DÉLICE SENSUEL.',
    '(Jus d’orange, jus d’ananas, jus de mangue, sirop de vanille)',
    '5 000',
    ''
  ),
  createData(
    'EXPÉRIENCE .',
    '(Jus de passion, jus d’orange, jus de cerise)',
    '5 000',
    ''
  ),
  createData(
    '',
    '',
    '',
    'Cocktails alcoolisés'
  ),
  createData(
    'MARGARITA.',
    '(Triple sec, tequila, jus de citron, sucre de canne)',
    '8 000',
    ''
  ),
  createData(
    'NECTAR DU DOMAINE DE LA COULÉE VERTE.',
    '(Gin, citron, basilic, sucre de canne)',
    '8 000',
    ''
  ),
  createData(
    'MOJITO.',
    '(Rhum brun, eau gazeuse, menthe, jus de citron, sucre de canne)',
    '8 000',
    ''
  ),
  createData(
    'COSMOPOLITAIN.',
    '(Vodka, cassis, jus de citron, triple sec)',
    '7 000',
    ''
  ),
  createData(
    'MOJITO ROYAL.',
    '(Mojito classique, champagne)',
    '15 000',
    ''
  ),
  createData(
    'LONG ISLAND.',
    '(Vodka, gin, tequila, rhum, triple sec, jus de citron, Coca cola)',
    '7 000',
    ''
  ),
  createData(
    'PINA COLADA.',
    '(Rhum, crème fraiche, jus d’ananas, sucre de canne)',
    '7 000',
    ''
  ),
];

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        minHeight: '50vh',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: 300 }}
      >
        <Tab label="Nos Entreées" {...a11yProps(0)} />
        <Tab label="Nos Plats" {...a11yProps(1)} />
        <Tab label="Nos Desserts" {...a11yProps(2)} />
        <Tab label="Nos Cocktails" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{width:'100%'}}>
        <Tableau image={entrees} title="Nos Entrées" rows={rows_entrees} />
      </TabPanel>
      <TabPanel value={value} index={1} style={{width:'100%'}}>
        <Tableau image={plat} title="Nos Plats" rows={rows_plat} />
      </TabPanel>
      <TabPanel value={value} index={2} style={{width:'100%'}}>
        <Tableau image={dessert} title="Nos Desserts" rows={rows_dessert} />
      </TabPanel>
      <TabPanel value={value} index={3} style={{width:'100%'}}>
        <Tableau image={cock} title="Nos Cocktails" rows={rows_cocktails} />
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, subname, prix, caption = '') {
  return { name, subname, prix, caption };
}

function Tableau({ image, title, rows }) {
  const [sizeScreen, setSizeScreen] = React.useState(window.innerWidth);
  React.useEffect(() => {
    setSizeScreen(window.innerWidth);
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center justify-content-evenly p-4">
        <div className="col-sm-2">
          <img src={image} alt="Responsive image" style={{position:'relative',width:'200px'}}/>
        </div>
        <div className="col-sm-6">
          <h1
            className={sizeScreen < 500 && 'text-center'}
            style={{
              fontFamily: 'Jour Script',
              color: '#6f7835',
              fontWeight: 700,
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <TableContainer component={Paper} style={{height:'500px'}}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ fontSize: 18 }}>
                  Libéllé
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: 18 }}>
                  Prix (FCFA)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  {row.caption ? (
                    <>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{
                          fontSize: 18,
                          backgroundColor: '#FFF',
                          fontWeight: 700,
                          paddingY: '5px',
                          color: '#6f7835',
                        }}
                      >
                        {row.caption}
                      </StyledTableCell>
                      <StyledTableCell
                        style={{ backgroundColor: '#FFF' }}
                      ></StyledTableCell>
                    </>
                  ) : (
                    <>
                      <StyledTableCell component="th" scope="row">
                      <span style={{ color: '#6f7835' }}> {row.name} </span>
                       <br />{' '}{row.subname}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ color: '#6f7835', fontWeight: 700 }}
                      >
                        {row.prix}
                      </StyledTableCell>
                    </>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
}
