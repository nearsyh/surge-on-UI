import axios from 'axios';

export async function getConfiguration(id) {
  let response = await axios.get(`/api/v1/configurations/${id}`);
  return response.data;
}

export async function createOrGetConfiguration(id) {
  let response = await axios
    .put(`/api/v1/configurations/${id}`, {})
    .then((res) => res.data, async () => await getConfiguration(id));
  return response;
}

export async function updateConfiguration(id, config) {
  let response = await axios.post(`/api/v1/configurations/${id}`, config);
  return response.data;
}