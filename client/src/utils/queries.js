// WORK IN PROGRESS
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      items {
        _id
        itemsText
        createdAt
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
      imageUrl
      user
    }
  }
`;
// STILL IN PROGRESS
export const QUERY_ITEM = gql`
  query getItem {
    item {
      name
      description
      dateOfPurchase
      imageUrl
      obtained
      reminder
      user
      }
  }
`;
