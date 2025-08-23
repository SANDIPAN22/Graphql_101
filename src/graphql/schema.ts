export const schema = `#graphql 

type Query {
    testing: String
    getCustomers: [Customer],
    getAccounts: [Account],
    getCustomer(id: ID!): Customer
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