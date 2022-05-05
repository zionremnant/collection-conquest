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
<<<<<<< HEAD
  query getNewItem ($name: String!, $description: String!, $dateOfPurchase: String, $imageUrl: String, $obtained: Boolean!, $user: String) {
    items( name: $name, description: $description, dateOfPurchase: $dateOfPurchase,
      imageUrl: $imageUrl, obtained: $obtained, user: $user) {

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
 query getItem($name: String!) {
  item(name: $name) {
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
