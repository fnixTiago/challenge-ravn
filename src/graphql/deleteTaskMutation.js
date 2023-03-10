import { gql } from "@apollo/client";

export const DELETE_TASK_MUTATION = gql`
  mutation ($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      assignee {
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt
      }
      createdAt
      creator {
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;
