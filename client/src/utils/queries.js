import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      email
      items {
        name
        description
        dateOfPurchase
        imageURL
        obtained
        reminder
        user
      }
    }
  }
`;

export const QUERY_ITEMS = gql`
  query getNewItems {
    items {
      name
      description
      dateOfPurchase
      imageURL
      user
    }
  }
`;

export const QUERY_ITEM = gql`
  query getItem($name: String!) {
    item(name: $name) {
      name
      description
      dateOfPurchase
      imageURL
      obtained
      reminder
      user
    }
  }
`;
