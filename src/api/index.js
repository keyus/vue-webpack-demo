import axios from 'axios';

const host  = "http://api.t.com";

const AmApi = {
    category (id) {
        if(!id) return axios.get(`${host}/v1/category/getdata`);
        return axios.get(`${host}/v1/category/getdata?id=${id}`);
    }
};

export default AmApi;