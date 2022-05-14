import { gql } from "@apollo/client";
export default gql`
mutation SignUpFunction($email: String!, $password: String!){
    signUp(email:$email , password:$password) {
        id,
        email
      }
}
`