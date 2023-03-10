import { gql } from "@apollo/client";

export const GET_STATUS_TASK = gql`
query getStatusTask{
    tasks(input:{}){
        status    
    }
}
`;