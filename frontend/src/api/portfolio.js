import API from 'Services/API';
import {
  getPortfolioListSuccess,
  getPortfolioListError,
} from 'Actions/portfolio';

export const getPortfolioList = () => {
  return dispatch => {
    const url = '/portfolio';

    API()
      .get(url)
      .then(res => {
        dispatch(getPortfolioListSuccess(res));
      })
      .catch(err => {
        dispatch(getPortfolioListError(err));
      });
  };
};
