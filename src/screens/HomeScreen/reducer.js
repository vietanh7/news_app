import actions from 'actions';
import AppConstans from 'common/AppConstans';

const initialState = {
  news: {},
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actions.HomeActions.NEWS_SUCCESS: {
      const {data, fetchType} = payload;
      const currentRes = state.news.results || [];
      const newResults =
        fetchType == AppConstans.FetchType.More
          ? [...currentRes, data.results]
          : data.results;
      const news = {
        results: newResults,
        next: data.next,
      };
      return {
        ...state,
        news,
      };
    }
    default:
      return state;
  }
};
