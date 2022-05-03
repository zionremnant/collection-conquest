// NOT DONE
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
  query getNewItem {
    items {
      _id
      itemsText
      itemsAuthor
      createdAt
    }
  }
`;

export const QUERY_ITEM = gql`
  query getItems($itemsId: ID!) {
    items(itemsId: $itemsId) {
      _id
      itemsText
      itemsAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
