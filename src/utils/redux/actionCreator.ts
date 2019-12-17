import { Dispatch } from 'redux';

const actionCreator = (dispatch: Dispatch, type: string) => (payload: any) =>
  dispatch({
    type,
    payload,
  });

export default actionCreator;
