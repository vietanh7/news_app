import actions from 'actions';

const initialState = {
  categories: {},
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actions.configsActions.GET_CATEGORIES: {
      const {data} = payload;
      return {
        ...state,
        categories: data,
      };
    }
    default:
      return state;
  }
};
