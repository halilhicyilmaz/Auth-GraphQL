const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql
const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            async resolve(parentValue, args, req) {
                const { email, password } = args
                const res = await AuthService.signup({ email, password, req })
                return res
            }
        },
        logout: {
            type: UserType,
            async resolve(parentValue, args, req) {
                const { user } = req
                req.logout()
                return user
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            async resolve(parentValue, args, req) {
                const { email, password } = args
                const res = await AuthService.login({ email, password, req })
                return res
            }
        },

    }
})

module.exports = mutation

