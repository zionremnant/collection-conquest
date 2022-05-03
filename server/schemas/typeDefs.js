const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Item {
        _id: ID!
        name: String!
        description: String!
        type: String!
        dateOfPurchase: String
        imageUrl: String
        obtained: Boolean!
        reminder: Boolean!
    }
    type User {
        username: String!
        email: String!
        password: String!
    }
`;

module.exports = typeDefs;