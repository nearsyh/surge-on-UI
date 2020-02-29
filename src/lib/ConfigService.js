import axios from 'axios';

export async function getConfiguration(id) {
  let response = await axios.get(`/api/v1/configurations/${id}`);
  return response.data;
}

export async function createConfiguration(id) {
  let response = await axios.put(`/api/v1/configurations/${id}`, {});
  return response.data;
}

export async function upsertAirportConfiguration(id, airport) {
  let response = await axios.post(`/api/v1/configurations/${id}/airports`, airport);
  return response.data; 
}

export async function upsertGroupConfiguration(id, group) {
  let response = await axios.post(`/api/v1/configurations/${id}/groups`, group);
  return response.data; 
}

export async function upsertGenerals(id, generals) {
  let response = await axios.post(`/api/v1/configurations/${id}/generals`, {
    text: generals
  });
  return response.data; 
}

export async function upsertRules(id, rules) {
  let response = await axios.post(`/api/v1/configurations/${id}/rules`, {
    text: rules
  });
  return response.data; 
}

export async function upsertUrlRewrites(id, urlRewrites) {
  let response = await axios.post(`/api/v1/configurations/${id}/url_rewrites`, {
    text: urlRewrites
  });
  return response.data; 
}