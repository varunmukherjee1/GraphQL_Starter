import { UserList } from "../data/fakeData.js"

export const resolvers = {
    Query: {
        users() {
            return UserList
        }
    }
}