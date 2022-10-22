import { baseApi } from '@/plugins/axios';

const api = '/api/todo';

const list = () => baseApi.get(`${api}`);
const add = () => baseApi.get(`${api}`);
const del = () => baseApi.get(`${api}`);
const edit = () => baseApi.get(`${api}`);

export { list, add, del, edit };