const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    title: String
    author: String
  }

  type Query {
    posts: [Post]
  }
`;

