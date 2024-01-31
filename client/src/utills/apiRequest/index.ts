/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios, { type AxiosRequestConfig } from 'axios';
import { CANCEL } from 'redux-saga';

export const axiosInstance = axios.create({
    baseURL: process.env.SERVER_BASE_URL as string,
    timeout: 30000,
});

type UrlMethodTypes = 'get' | 'post' | 'delete' | 'put' | 'patch';

export const apiSagaRequest = (
    method: UrlMethodTypes,
    url: string,
    data: object = {},
    options: AxiosRequestConfig = {}
) => {
    const abortController = new AbortController();
    const hasData = method === 'get';
    const settings: AxiosRequestConfig = hasData ? data : options;
    settings.signal = abortController.signal;
    const request = hasData
        ? (axiosInstance as any)[method](url, settings)
        : (axiosInstance as any)[method](url, data, settings);
    request[CANCEL] = () => abortController.abort();
    return request;
};