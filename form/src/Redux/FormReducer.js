import { Map, fromJS } from 'immutable';

// Constants
export const SEND_FORM_REQUEST = 'app/form/SEND_FORM_REQUEST';
export const SEND_FORM_SUCCESS = 'app/form/SEND_FORM_SUCCESS';
export const SEND_FORM_FAILURE = 'app/form/SEND_FORM_FAILURE';

// Actions
export const formActions = {
  sendRequest: (data) => ({
    type: SEND_FORM_REQUEST,
    data,
  }),
  sendSuccess: (data) => ({
    type: SEND_FORM_SUCCESS,
    data,
  }),
  sendFailure: (error) => ({
    type: SEND_FORM_FAILURE,
    error,
  }),
};

const initialState = Map({
  sending: false,
  error: null,
  redirectTo: null,
  status: null,
});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_FORM_REQUEST:
      return state;
    case SEND_FORM_SUCCESS:
      console.log("SUCCESS", action);
      return state;
    case SEND_FORM_FAILURE:
      return state.merge(fromJS({
        error: action.error,
      }));
    default:
      return state;
  }
}

export default formReducer;
