import { gql } from "@apollo/client";
export default gql`
mutation LogOut{
    logout{
        id
        email
    }
}
`