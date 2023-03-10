import { gql } from "@apollo/client";

export const GET_TASK = gql`
  query getTask($status: Status!) {
    tasks(input: { status: $status }) {
      assignee {
        avatar
        fullName
      }
      tags
      dueDate
      pointEstimate
      createdAt
      status
      name
      id
    }
  }
`;
