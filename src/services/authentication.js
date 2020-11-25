import { Accounts } from '../api/accounts'

export const IsTokenValid = async (token) => {
    let response = await Accounts.verify_token(token)
    return response.statusCode == 200
}
