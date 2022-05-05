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

// export const QUERY_ITEMS = gql`
//   query getNewItem ($name: String!, $description: String!, $dateOfPurchase: String, $imageUrl: String, $obtained: Boolean!, $user: String) {
//     items( name: $name, description: $description, dateOfPurchase: $dateOfPurchase,
//       imageUrl: $imageUrl, obtained: $obtained, user: $user) {
//     items {
//       name
//       description
//       dateOfPurchase
//       imageUrls
//       obtained
//       user
//     }
//   }
// `;

export const QUERY_ITEM = gql`
  query getItems($name: String!, $description: String!, $dateOfPurchase: String,
  imageUrl: String, obtained: Boolean!, user: String) {
    item( name: $name, description: $description, dateOfPurchase: $dateOfPurchase,
      imageUrl: $imageUrl, obtained: $obtained, reminder: $reminder, user: $user ) {
      _id
      name
      description
      dateOfPurchase
      imageUrl
      obtained
      reminder
      user
      }
    }
  }
`;
