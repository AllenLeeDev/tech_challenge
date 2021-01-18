const { gql } = require("apollo-server-lambda");
let AWS = require("aws-sdk")

let S3 = new AWS.S3()

const typeDefs = gql`
    type songData {
        song: String!
        artist: String!
        songReleaseDate: String!
        playCount: Int!
        metricA: Int!
        metricB: Int!
        metricC: Int
        metricCi: Int
        metricD: Int!
        metricE: Int!
        metricF: Int!
        metricG: Int!
        metricH: Int!
        metricI: Int!
        metricJ: Int!
        metricK: Int!
        metricL: Int!
        metricM: Int!
        metricN: Int!
        metricO: Int!
        metricP: Int!
    }
    type Query {
        getSongs: [songData!]!
    }
`;

const resolvers = {
    Query: {
        getSongs: async (_, args, context) => {
            const bucketParams = {
                Bucket: "ihrchallenge",
                Key: "songData.json",
            };
            const getObject = await S3.getObject(bucketParams).promise()
            return JSON.parse(getObject.Body.toString()) 
    }
}
};

module.exports = {
    typeDefs,
    resolvers
}