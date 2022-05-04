import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
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
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation additem($name: String!, $description: String!, dateOfPurchase: String,
  imageUrl: String, obtained: Boolean!, user: String) {
    additem(name: $name, description: $description, dateOfPurchase: $dateOfPurchase,
      imageUrl: $imageUrl, obtained: $obtained, reminder: $reminder, user: $user) {
        token
       user {
        _id
      }
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