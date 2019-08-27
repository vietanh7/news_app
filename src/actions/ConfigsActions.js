import API from 'services/api';

export const configsActions = {
  GET_CATEGORIES: 'GET_CATEGORIES',
};

export const getCategories = () => async dispatch => {
  try {
    const data = await API.getCategories();
    if (data.status) {
      dispatch({
        type: configsActions.GET_CATEGORIES,
        payload: {data: data.data},
      });
    }
  } catch (error) {
    console.log(error);
  }
};
