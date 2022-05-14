import { gql } from "@apollo/client";
export default gql`
mutation LoginFunction($email: String!, $password: String!){
    login(email:$email , password:$password) {
        id,
        email
      }
}
`