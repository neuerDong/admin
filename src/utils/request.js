import axios from 'axios';

export function get(url, params) {
  if (params) {
    url += `?${JSON.stringify(params)}`;
  }

  return axios.get(`/api/${url}.json`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(response => response.data);
}
