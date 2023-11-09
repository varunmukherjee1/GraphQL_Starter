import { UserList } from "../data/fakeData.js"

export const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (parent,args) => {
            const uid = args.id
            
            const cUser = UserList.filter((val) => val.id == uid)

            console.log(cUser);

            return cUser[0];
        }
    }
}