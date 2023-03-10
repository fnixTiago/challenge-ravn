import { gql } from "@apollo/client";

export const CREATE_TASK_MUTATION = gql`
mutation createTask($input: CreateTaskInput!) {
  createTask(input: $input) {
      id
      name
      tags
      status
      assignee {
        id
        fullName
        email
        type
        avatar
        createdAt
        updatedAt
      }
      creator {
        id
        fullName
        email
        type
        avatar
        createdAt
        updatedAt
      }
      position
      dueDate
      pointEstimate
      createdAt
  }
}
`;
