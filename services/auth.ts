/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { Platform } from 'react-native';
import { _axios } from './interceptors';

export const signUp = (data: any) => _axios.post('users', {
    email: data.email,
    lada: "52",
    phoneNumber: data.phone,
    password: data.password,
    country: "Mexico",
    status: "active",
    firstName: data.firstName,
    lastName: data.lastName,
}, {
    showPayload: true,
}).then(({ data }) => data);

export const signIn = (username: string, password: string) => _axios.post('auth/login', {
    email: username,
    password: password
}, {
    showPayload: true,
}).then(({ data }) => data);

export const listHome = (token: string) => _axios.get('users', {
    headers: {
        "x-auth-token":`${token}`
    },
    showPayload: true,
}).then(({ data }) => data);

export const details = (token: string, id: string) => _axios.get(`users/${id}`, {
    headers: {
        "x-auth-token":`${token}`
    },
    showPayload: true,
}).then(({ data }) => data);
