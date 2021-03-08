import { RestClient, postExternalRequest } from './common'

export const Rooms = {
    async list() {
        let response = await RestClient.get('/chat/get-rooms/')
        .catch((error) => {
            return {
                data: error.response.data,
                status: error.response.status
            }
        })
        .then((response) => {
            return {
                data: response.data,
                status: response.status
            }
        })
        return response.data
    },
    async deleteRoom(roomId){
        return await postExternalRequest('/chat/delete-room/', {"room_id": roomId})
        .then((response) => {
            return {
                data: response.data,
                status: response.statusCode 
            }
        })
    },
}