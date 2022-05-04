const { gql } = require('apollo-server-express');

const typeDefs = gql `
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
    type Query {
        me: User
    }
    type Mutation {
        saveItem(itemData: itemDataInput): Item
    }
`;

module.exports = typeDefs;