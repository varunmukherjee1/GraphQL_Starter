import { UserList } from "../data/fakeData.js"
import { MovieList } from "../data/fakeData.js"

export const resolvers = {
    Query: {
        // User resolvers
        users: () => {
            return UserList
        },
        user: (parent,args) => {
            const uid = args.id
            
            const cUser = UserList.filter((val) => val.id == uid)

            // console.log(cUser);

            return cUser[0];
        },

        // Movie resolvers

        movies: () => {
            return MovieList
        },
        movie: (parent,args) => {
            const name = args.name

            console.log(name);
            
            const cMov = MovieList.filter((val) => val.name == name)

            console.log(cMov);

            return cMov[0];
        },
    },
    User: {
        favouriteMovies: () => {
            return MovieList.filter((mov) => (mov.yearOfPublication >= 2000 && mov.yearOfPublication <= 2010))
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const inpUser = args.input
            const lastId = UserList[UserList.length -1].id
            inpUser.id = lastId+1
            UserList.push(inpUser)

            console.log(inpUser);

            return inpUser
        }
    },
}