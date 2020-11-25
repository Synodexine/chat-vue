import axios from 'axios'
import VueCookie from 'vue-cookie'


export let RestClient = axios.create({
    baseURL: 'http://192.168.20.84:8000/api/v1/',
})

export let postExternalRequest = async (url, payload) => {
    return await RestClient.post(url, payload)
    .catch((error) => {
        return {
            data: error.response.data,
            status: error.response.status,
        }
    })
    .then((response) => {
        return {
            data: response.data,
            status: response.status,
        }
    })
}

export let getExternalRequest = async (url) => {
    return await RestClient.get(url)
    .catch((error) => {
        return {
            data: error.response.data,
            status: error.response.status,
        }
    })
    .then((response) => {
        return {
            data: response.data,
            status: response.status,
        }
    })
}

let token = VueCookie.get('token')
RestClient.defaults.headers.common['Authorization'] = token