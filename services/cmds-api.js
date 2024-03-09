import axios from 'axios';

const baseURL = 'http://localhost:3000/cmds';

export const getCmds = () =>{
    const URL = baseURL;// base URL
    const response = axios.get(URL);
    return response;
};

export const getCmd = (id) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
};

export const editCmd = (id, updatedCmd) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedCmd);
    return response;
};

export const createCmd = (name, Cmd) => {
    const URL = baseURL;
    const response = axios.post(URL, Cmd);
    return response;
};

export const deleteCmd = (id) =>
{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
};