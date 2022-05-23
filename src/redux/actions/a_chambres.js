import axios from 'axios';
import {
  GET_CHAMBRE,
  ADD_CHAMBRE,
  DELETE_CHAMBRE,
  UPDATE_CHAMBRE,
} from './types';

const DB_LINK = 'http://localhost:8000/chambres';

export const getChambre = () => (dispatch) => {
  axios
    .get(DB_LINK)
    .then((res) => {
      dispatch({
        type: GET_CHAMBRE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addChambre = (chambre) => (dispatch) => {
  axios
    .post(DB_LINK, chambre)
    .then((res) => {
      dispatch({
        type: ADD_CHAMBRE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateChambre = (id, chambre) => (dispatch) => {
  axios
    .put(DB_LINK + `/${id}`, chambre)
    .then((res) => {
      dispatch({
        type: UPDATE_CHAMBRE,
        payload: res.data,
      });
    })
    .catch((err) => console.log('ERREUR: ', err));
};

export const deleteChambre = (id) => (dispatch) => {
  axios
    .delete(DB_LINK + `/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CHAMBRE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
