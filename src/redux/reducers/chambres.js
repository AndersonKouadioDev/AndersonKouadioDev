import {
  ADD_CHAMBRE,
  DELETE_CHAMBRE,
  GET_CHAMBRE,
  UPDATE_CHAMBRE,
} from '../actions/types';

const initialState = {
  chambres: [
    {
      id: 1,
      nom: 'Chambre Deluxe 01',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla corrupti',
      categorie_id: 1,
      categorie: 'Chambre Deluxe',
      prix: '55 000',
      dejeuner: true,
      images: [
        'assets/images/biens/suite_executive/1.jpg',
        'assets/images/biens/suite_executive/2.jpg',
        'assets/images/biens/suite_executive/3.jpg',
        'assets/images/biens/suite_executive/4.jpg',
        'assets/images/biens/suite_executive/5.jpg',
      ],
      vote: 3,
      periode: 'jour',
      interval: '1-6 janv',
      date: '05/02/2022',
      adresse: 'Abidjan',
      commentaires: [],
      nb_max_personne: 10,
      nb_chambre: 3,
      nb_salle_bain: 2,
      followers: [],
    },
    {
      id: 2,
      nom: 'Suite Junior 02',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla corrupti',
      categorie_id: 2,
      categorie: 'Suite Junior',
      prix: '60 000',
      dejeuner: true,
      images: [
        'assets/images/biens/suite_executive/3.jpg',
        'assets/images/biens/suite_executive/4.jpg',
        'assets/images/biens/suite_executive/5.jpg',
        'assets/images/biens/suite_executive/6.jpg',
        'assets/images/biens/suite_executive/7.jpg',
      ],
      vote: 4,
      periode: 'nuit',
      interval: '22-30 Fev',
      date: '08/05/2022',
      adresse: 'Yamoussoukro',
      commentaires: [],
      nb_max_personne: 5,
      nb_chambre: 7,
      nb_salle_bain: 2,
      followers: [],
    },
    {
      id: 3,
      nom: 'Suite Executive 03',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla corrupti',
      categorie_id: 3,
      categorie: 'Suite Executive',
      prix: '80 000',
      dejeuner: true,
      images: [
        'assets/images/biens/suite_executive/5.jpg',
        'assets/images/biens/suite_executive/6.jpg',
        'assets/images/biens/suite_executive/7.jpg',
        'assets/images/biens/suite_executive/8.jpg',
        'assets/images/biens/suite_executive/9.jpg',
      ],
      vote: 2,
      periode: 'Jour/nuit',
      interval: '7-31 Mrs',
      date: '01/09/2022',
      adresse: 'Dabou',
      commentaires: [],
      nb_max_personne: 1,
      nb_chambre: 3,
      nb_salle_bain: 1,
      followers: [],
    },
    {
      id: 4,
      nom: 'Suite Executive 04',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla corrupti',
      categorie_id: 4,
      categorie: 'Suite Executive',
      prix: '80 000',
      dejeuner: true,
      images: [
        'assets/images/biens/suite_executive/9.jpg',
        'assets/images/biens/suite_executive/3.jpg',
        'assets/images/biens/suite_executive/5.jpg',
        'assets/images/biens/suite_executive/7.jpg',
        'assets/images/biens/suite_executive/1.jpg',
      ],
      vote: 4,
      periode: 'jour',
      interval: '25-31 Dec',
      date: '25/12/2022',
      adresse: 'Tiassale',
      commentaires: [],
      nb_max_personne: 5,
      nb_chambre: 6,
      nb_salle_bain: 2,
      followers: [],
    },
  ],
};

export default function chambres(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CHAMBRE:
      return {
        ...state,
        chambres: payload,
      };

    case ADD_CHAMBRE:
      return {
        ...state,
        chambres: [...state.chambres, payload],
      };
    case UPDATE_CHAMBRE:
      return {
        ...state,
        chambres: state.chambres.map((chambre) =>
          chambre.id === payload.id ? payload : chambre
        ),
      };
    case DELETE_CHAMBRE:
      return {
        ...state,
        chambres: [
          ...state.chambres.filter((chambre) => chambre.id !== payload),
        ],
      };

    default:
      return state;
  }
}
