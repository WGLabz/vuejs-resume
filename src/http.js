import axios from 'axios'

//Set backend server URL
const serverURL = 'https://verbal-doloritas-oksbwn.koyeb.app/'

//
const AXIOS = axios.create({
    baseURL: `${serverURL}`,
    timeout: 100000
});
export default {
    serverURL,
    getFBConfig() {
        return AXIOS.get(`/auth/config`);
    },
    getFile(file) {
        return AXIOS.get(`/file/${file}`)
    },
    getCollection(collection) {
        return AXIOS.get(`/data/${collection}`)
    },
    postData(idToken, data) {
        return AXIOS.post(`/firebase?token=${idToken}`, {
            updated: data,
        })
    },
    getData(idToken) {
        return AXIOS.get(`/firebase?token=${idToken}`)
    }
}
