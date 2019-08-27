import axios from 'axios';
import AppConfig from 'common/AppConfig';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';

function requestAPI(method, url, headers = {}, dataBody = {}, baseUrl = null) {
  const config = {
    baseURL: baseUrl || AppConfig.BaseUrl,
    url,
    headers,
    method,
    validateStatus: () => true,
  };

  if (method === METHOD_GET) {
    config.params = {api_key: AppConfig.ApiKey, ...dataBody};
  } else {
    config.data = dataBody;
  }
  return axios(config);
}

const ApiCaller = {
  get(url, data, headers = {}, baseUrl) {
    return requestAPI(METHOD_GET, url, headers, data, baseUrl);
  },

  post(url, data, headers = {}, baseUrl) {
    return requestAPI(METHOD_POST, url, headers, data, baseUrl);
  },

  put(url, data, headers = {}, baseUrl) {
    return requestAPI(METHOD_PUT, url, headers, data, baseUrl);
  },

  delete(url, data, headers = {}, baseUrl) {
    return requestAPI(METHOD_DELETE, url, headers, data, baseUrl);
  },
};

export default ApiCaller;
