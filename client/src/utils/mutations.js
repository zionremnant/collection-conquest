import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const SAVE_ITEM = gql`
  mutation saveItem($itemData: itemDataInput) {
    saveItem(itemData: $itemData) {
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
