'use strict';
const { combineResolvers } = require('graphql-resolvers');

const user = (_, args, ctx) => ctx.models.User.gen(args, ctx);

module.exports = {
  user: combineResolvers(user)
};