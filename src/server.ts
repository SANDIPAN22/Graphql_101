import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
const server = new ApolloServer({
    typeDefs: `type Query{hello: String test:String}`,
    resolvers: {
        Query:{
            hello: ()=>"Sandipan",
            test: ()=>"Testing"
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