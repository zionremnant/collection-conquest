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
<<<<<<< HEAD
  query getNewItem ($name: String!, $description: String!, $dateOfPurchase: String, $imageUrl: String, $obtained: Boolean!, $user: String) {
    items( name: $name, description: $description, dateOfPurchase: $dateOfPurchase,
      imageUrl: $imageUrl, obtained: $obtained, user: $user) {
=======
  query getNewItems {
>>>>>>> 65023b7435317a92878b06446209693d883e111c
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
