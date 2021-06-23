import API from 'Services/API';
import { getOrdersListSuccess, getOrdersListError } from 'Actions/order';

export const getOrdersList = () => {
  return dispatch => {
    const url = '/orders';

    API()
      .get(url)
      .then(res => {
        dispatch(getOrdersListSuccess(res));
      })
      .catch(err => {
        dispatch(getOrdersListError(err));
      });
  };
};
