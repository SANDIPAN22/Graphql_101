export const schema = `#graphql 

type Query {
    testing: String
    getUsers: [User]
}

type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    
}



`