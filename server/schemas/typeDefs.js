const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Item {
    _id: ID!
    name: String!
    description: String!
    dateOfPurchase: String
    imageURL: [String]
    obtained: Boolean!
    reminder: Boolean!
    user: String
  }
  type User {
    username: String!
    email: String!
    password: String!
    items: [Item]
  }
  input itemDataInput {
    name: String!
    description: String!
    dateOfPurchase: String
    imageURL: [String]
    obtained: Boolean!
    reminder: Boolean!
    user: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    user(username: String!): User
    items: [Item]
    item(name: String!): Item
  }
  type Mutation {
    saveItem(itemData: itemDataInput): Item
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeItem(itemData: itemDataInput): Item
  }
`;

module.exports = typeDefs;
