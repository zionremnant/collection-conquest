const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Item {
        _id: ID!
        name: String!
        description: String!
        type: String!
        dateOfPurchase: String
        obtained: Boolean!
        reminder: Boolean!
    }
`;

module.exports = typeDefs;