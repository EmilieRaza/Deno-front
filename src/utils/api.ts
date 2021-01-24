import axios from 'axios';
import { URL_API } from '../info';
import { getCookie } from './cookie';

// définition de l'url de l'api comme base afin d'éviter de la réecrire
axios.defaults.baseURL = URL_API;
// ajout du token dans les requetes http
axios.defaults.headers = {
  authorization: getCookie('token') ? `Baerer ${getCookie('token')}` : undefined,
};

/**
 * GET
 */
export const checkToken = () => {
  return axios.get('/auth/check-token');
};


export const getprofil = () => {
  return axios.get(`/user`);
};
/**
 * PUT
 */
export const updateprofil = (data: any) => {
  return axios.put(`/user`, data);
};
/**
 * POST
 */
export const register = (data: any) => {
  return axios.post(`/register`, data);
};
export const login = (data: any) => {
  return axios.post(`/login`, data);
};
export const forgetPassword = (email: string) => {
  return axios.post(`/forgot-password`, { email });
};


/**
 * PUT
 */
export const resetPassword = (data: { password: string; confirm: string; str: string }) => {
  return axios.put(`/auth/reset-password/${data.str}`, data);
};

/**
 * DELETE
 */
