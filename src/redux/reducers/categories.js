import {
  ADD_CATEGORIE,
  DELETE_CATEGORIE,
  GET_CATEGORIE,
  UPDATE_CATEGORIE,
} from '../actions/types';

const initialState = {
  categories: [
    {
      id: 1,
      label: 'LES SUITES',
      image: '/assets/images/biens/categories/suite.jpg',
    },
    {
      id: 2,
      label: 'LES SUPÉRIEURES',
      image: '/assets/images/biens/categories/superieure.jpg',
    },
    {
      id: 3,
      label: 'LES STUDIOS',
      image: '/assets/images/biens/categories/studio.jpg',
    },
    {
      id: 4,
      label: 'LES STANDARDS',
      image: '/assets/images/biens/categories/standard.jpg',
    }
  ],
};

export default function categories(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIE:
      return {
        ...state,
        categories: payload,
      };

    case ADD_CATEGORIE:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case UPDATE_CATEGORIE:
      return {
        ...state,
        categories: state.categories.map((categorie) =>
          categorie.id === payload.id ? payload : categorie
        ),
      };
    case DELETE_CATEGORIE:
      return {
        ...state,
        categories: [
          ...state.categories.filter((categorie) => categorie.id !== payload),
        ],
      };

    default:
      return state;
  }
}
