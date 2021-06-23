import API from 'Services/API';
import {
  getTransactionsListSuccess,
  getTransactionsListError,
} from 'Actions/transaction';

export const getTransactionsList = () => {
  return dispatch => {
    const url = '/transactions';

    API()
      .get(url)
      .then(res => {
        dispatch(getTransactionsListSuccess(res));
      })
      .catch(err => {
        dispatch(getTransactionsListError(err));
      });
  };
};
