import API from 'Services/API';
import {
  connectExecutionSuccess,
  connectExecutionError,
  disconnectExecutionSuccess,
  disconnectExecutionError,
  getExecutionListSuccess,
  getExecutionListError,
} from 'Actions/execution';

export const getExecutionList = () => {
  return dispatch => {
    const url = '/execution';

    API()
      .get(url)
      .then(res => {
        dispatch(getExecutionListSuccess(res));
      })
      .catch(err => {
        dispatch(getExecutionListError(err));
      });
  };
};

export const connectExecution = () => {
  return dispatch => {
    const url = '/connect';

    API()
      .post(url)
      .then(res => {
        dispatch(connectExecutionSuccess());
      })
      .catch(err => {
        dispatch(connectExecutionError(err));
      });
  };
};

export const disconnectExecution = () => {
  return dispatch => {
    const url = '/disconnect';

    API()
      .post(url)
      .then(res => {
        dispatch(disconnectExecutionSuccess());
      })
      .catch(err => {
        dispatch(disconnectExecutionError(err));
      });
  };
};
