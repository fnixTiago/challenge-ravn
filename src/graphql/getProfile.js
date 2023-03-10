import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
query getProfile {
    profile{
        avatar
        email
        fullName
      }
}
`;