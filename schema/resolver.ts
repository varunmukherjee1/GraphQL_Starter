import { UserList } from "../data/fakeData"

export const resolvers = {
    Query: {
        users() {
            return UserList
        }
    }
}