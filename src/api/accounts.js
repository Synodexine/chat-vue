import { getExternalRequest, postExternalRequest } from './common'

export const Accounts = {
    async create_user(username, password) {
        return await postExternalRequest('/accounts/registration/', {"username": username, "password": password})
        .then((response) => {
            return {
                data: 'Bearer ' + response.data?.token,
                status: response.statusCode 
            }
        })
    },
    async login_user(username, password) {
        return await postExternalRequest('/accounts/obtain_token/', {"username": username, "password": password})
        .then((response) => {
            return {
                data: 'Bearer ' + response.data?.token,
                status: response.status,
            }
        })
    },
    async verify_token(token) {
        return await postExternalRequest('/accounts/verify_token/', {'token': token.split(' ')[1]})
    },
    async getUserInfo() {
        return await getExternalRequest('/accounts/get-user-info/')
    },
    async changePrefix(prefix){
        return await postExternalRequest('/accounts/change-prefix/', {'prefix': prefix})
    }
}