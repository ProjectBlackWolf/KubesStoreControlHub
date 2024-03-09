import axios from "axios";

// const baseAPIURL = 'the '
const baseURL = 'http://localhost:3001/pods';

export const getPods = () =>{
    const URL = baseURL;// base URL
    const response = axios.get(URL);
    return response;
};

export const getPod = (id) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
};

export const editPod = (id, updatedPod) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedPod);
    return response;
};

export const createPod = (Pod) => {
    const URL = baseURL;
    const response = axios.post(URL, Pod);
    return response;
};

export const deletePod = (id) =>
{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
};