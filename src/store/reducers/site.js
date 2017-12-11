// import { FETCH } from '..types/posts';
const INITIAL_STATE = {
  list: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, list: action.payload.data.items };

    case 'FETCH_ERROR':
      console.log('error');
      break;

    case 'FETCH_PENDING':
      return { fetching: true }

    default:
      return state;
  }
}
