import axios from 'axios';

axios.defaults.baseURL = process.env.SERVER_HOST || 'localhost:8080';

async function getConfiguration(id) {
  let response = await axios.get(`/api/v1/configurations/${id}`);
  return response.data;
}

async function createConfiguration(id) {
  let response = await axios.put(`/api/v1/configurations/${id}`, data={});
  return response.data;
}

async function upsertAirportConfiguration(id, airport) {
  let response = await axios.post(`/api/v1/configurations/${id}/airports`, data=airport);
  return response.data; 
}

async function upsertGroupConfiguration(id, group) {
  let response = await axios.post(`/api/v1/configurations/${id}/groups`, data=airport);
  return response.data; 
}

async function upsertGenerals(id, generals) {
  let response = await axios.post(`/api/v1/configurations/${id}/generals`, data={
    text: generals
  });
  return response.data; 
}

async function upsertRules(id, rules) {
  let response = await axios.post(`/api/v1/configurations/${id}/rules`, data={
    text: rules
  });
  return response.data; 
}

async function upsertUrlRewrites(id, urlRewrites) {
  let response = await axios.post(`/api/v1/configurations/${id}/url_rewrites`, data={
    text: urlRewrites
  });
  return response.data; 
}