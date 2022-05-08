const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const userType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: { type: GraphQLString }
    }
})

module.exports = userType