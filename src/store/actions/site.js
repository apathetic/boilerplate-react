import axios from 'axios';
import { SPACE_ID, ACCESS_TOKEN } from '../../config';

const API = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=site`;

function fetchSuccess(response) {
  return {
    type: 'FETCH_SUCCESS',
    status: 'success',
    payload: response
  }
}

function fetchError(err) {
  return {
    type: 'FETCH_ERROR',
    status: 'error',
    payload: err
  }
}

export function fetchSites() {
  return function(dispatch) {
    axios.get(API)
      .then((response) => {
        dispatch(fetchSuccess(response))
      })
      .catch((err) => {
        dispatch(fetchError(err))
      })
  }
}
