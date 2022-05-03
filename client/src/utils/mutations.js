import { gql } from '@apollo/client';

export const CREATE_NEWITEM = gql`
  mutation createNewItem($tech1: String!, $tech2: String!) {
    createNewItem(tech1: $tech1, tech2: $tech2) {
      _id
      item
    }
  }
`;

export const CREATE_ITEM = gql`
  mutation createItem($_id: String!, $techNum: Int!) {
    createItem(_id: $_id, techNum: $techNum) {
      _id
      items
    }
  }
`;
