const db = require("../db");

const resolvers = {
  Query: {
    posts: () => db.posts,
  },
};

module.exports = resolvers;
