import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import { schema } from "./graphql/schema";
import { connectDb } from "./database/database";
import { getCustomersLogic, getCustomerLogic } from "./controllers/customers";
import { getAccountsLogic, getAccountsByIdsLogic } from "./controllers/accounts";

connectDb()

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query:{
           
            testing: ()=>"Testing",
            getCustomers: getCustomersLogic,
            getAccounts: getAccountsLogic,
            getCustomer: getCustomerLogic
        },
        Customer:{
            accounts: getAccountsByIdsLogic
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