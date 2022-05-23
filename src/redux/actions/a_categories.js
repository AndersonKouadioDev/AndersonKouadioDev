import axios from 'axios';
import {
  GET_CATEGORIE,
  ADD_CATEGORIE,
  DELETE_CATEGORIE,
  UPDATE_CATEGORIE,
} from './types';

const DB_LINK = 'http://localhost:8000/categories';

export const getCategorie = () => (dispatch) => {
  axios
    .get(DB_LINK)
    .then((res) => {
      dispatch({
        type: GET_CATEGORIE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addCategorie = (categorie) => (dispatch) => {
  axios
    .post(DB_LINK, categorie)
    .then((res) => {
      dispatch({
        type: ADD_CATEGORIE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateCategorie = (id, categorie) => (dispatch) => {
  axios
    .put(DB_LINK + `/${id}`, categorie)
    .then((res) => {
      dispatch({
        type: UPDATE_CATEGORIE,
        payload: res.data,
      });
    })
    .catch((err) => console.log('ERREUR: ', err));
};

export const deleteCategorie = (id) => (dispatch) => {
  axios
    .delete(DB_LINK + `/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CATEGORIE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
