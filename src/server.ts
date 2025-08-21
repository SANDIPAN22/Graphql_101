import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import { schema } from "./graphql/schema";
import { connectDb } from "./database/database";
import { User } from "./database/models";
connectDb()
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query:{
           
            testing: ()=>"Testing",
            getUsers: async()=>{
                const data = await User.find()
                // console.log(data)
                return data
            }
        }
    }
})

startStandaloneServer(server, {
    listen: {
        port: 4000
    }
}).then(()=>{
    console.log("GraphQl server is available at 4000!")
}).catch((err)=>{
    console.error("Error while starting the server..."+ err)
})