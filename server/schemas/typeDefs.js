const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        _id: ID!
        name: String!
        description: String!
        dateOfPurchase: String
        imageUrl: String
        obtained: Boolean!
        reminder: Boolean!
        user: String
    }
    type User {
        username: String!
        email: String!
        password: String!
    }
    input itemDataInput {
        name: String!
        description: String!
        dateOfPurchase: String
        imageUrl: String
        obtained: Boolean!
        reminder: Boolean!
        user: String
    }
    type Auth {
    token: ID!
    user: User
  }
    type Query {
        me: User
    }
    type Mutation {
        saveItem(itemData: itemDataInput): Item
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;