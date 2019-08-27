import API from 'services/api';
import AppConstans from 'common/AppConstans';
import axios from 'axios';
import AppConfig from 'common/AppConfig';

const NEWS_PREFIX = 'NEWS';

export const HomeActions = {
  NEWS_PREFIX,
  NEWS_REQUEST: NEWS_PREFIX + '_REQUEST',
  NEWS_SUCCESS: NEWS_PREFIX + '_SUCCESS',
  NEWS_FAIL: NEWS_PREFIX + '_FAIL',
  NEWS_MORE: NEWS_PREFIX + '_MORE',
  NEWS_FRESH: NEWS_PREFIX + '_FRESH',
};

export const getNews = params => async dispatch => {
  try {
    let fetchType;
    const {next, isRefresh, jobId, cateId1, cateId2} = params;
    if (next) {
      fetchType = AppConstans.FetchType.More;
      dispatch({type: HomeActions.NEWS_MORE});
    } else if (isRefresh) {
      fetchType = AppConstans.FetchType.Refresh;
      dispatch({type: HomeActions.NEWS_FRESH});
    } else {
      fetchType = AppConstans.FetchType.Request;
      dispatch({type: HomeActions.NEWS_REQUEST});
    }
    let data;
    if (next) {
      data = await axios.get(next);
    } else {
      const url = `https://news.bluefield.io/api/content/?job_functions=${jobId}&industries=${cateId1}&limit=${AppConfig.PerPage}&industries=${cateId2}&api_key=${AppConfig.ApiKey}`;
      data = await axios.get(url);
    }
    console.log(data)
    if (data.status == 200) {
      dispatch({
        type: HomeActions.NEWS_SUCCESS,
        payload: {data: data.data, fetchType},
      });
    }
  } catch (error) {
    dispatch({type: HomeActions.NEWS_FAIL});
  }
};
