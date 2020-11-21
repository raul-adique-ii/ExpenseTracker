// import axios from 'axios'

// const action = {
//     type: 'apiCallBegan',
//     payload: {
//         url: '/api/v1/transactions',
//         method: 'get',
//         data: {},
//         onSuccess: 'transactionReceived',
//         onError: 'apiRequestFailed'
//     }
// }

// const api = ({ dispatch }) => next => async (action) => {
//     if (action.type !== 'apiCallBegan') return  next(action)
    
//     const { url, method, data, onSuccess, onError } = action.payload;

//     try {  
//         const response = await axios.request({
//             url,
//             method,
//             data
//         })
//         dispatch({
//             type: onSuccess,
//             payload: response.data.data
//         })
//     } catch (error) {
//         dispatch({
//             type: onError,
//             payload: error 
//         })
//     }


// }

// export default api

import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const res = await axios.request({
      baseURL: 'http://localhost:5000',
      url,
      method,
      data,
    });
    // General
    dispatch(actions.apiCallSuccess(res.data.data));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: res.data.data });
  } catch (error) {
    // General error
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
