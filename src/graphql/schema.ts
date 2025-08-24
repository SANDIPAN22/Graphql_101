export const schema = `#graphql 

type Mutation {
    addCustomer(data: NewCustomer): String
}

type Query {
    testing: String
    getCustomers: [Customer],
    getAccounts: [Account],
    getCustomer(id: ID!): Customer
}

input NewCustomer {
    name: String!,
    email: String!,
    username: String!,
}

type Customer {
    _id: ID!
    name: String,
    email: String,
    username: String,
    address: String,
    active: Boolean,
    accounts: [Account]

}

type Account {
    _id: ID!
    account_id: Int,
    limit: Int,
    products: [String]
}



`