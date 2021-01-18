const { ApolloServer } = require("apollo-server-lambda")
const { typeDefs, resolvers } = require("../graphql/schema")

//Importing aws fixes 'can't find module' error
let aws = require('aws-sdk')
//Importing aws fixes 'can't find module' error


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context
    }),
    playground: {
        endpoint: "/dev/graphql",
    },
});

exports.gqlHandler = server.createHandler({
    cors: {
        origin: "*",
    }
});
