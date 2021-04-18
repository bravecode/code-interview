import { User } from "../types/User.interface"

export const prepareUser = (data: any): User => {
    return {
        ID: data.id,
        name: data.name,
        username: data.username
    }
}