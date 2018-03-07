/* 
 * The concepts have been picked up from https://github.com/apollographql/graphql-tutorial 
 * and modified to change the implementation logic and schema
 * The model - Blogs have comments which can be paginated via a cursor
*/
const BlogTypeDefs = `
type Blog {
  id: ID!
  name: String
  comments: [Comment]
  # comments will be returned in a CommentFeed object wrapper
  commentFeed(cursor: String, limit: Int): CommentFeed
}
input CommentInput{
  blogId: ID!
  text: String
}
type Comment {
  id: ID!
  text: String
  createdAt: Int
}
type CommentFeed {
  # cursor specifies the place in the list where we left off
  cursor: String!
  hasNextPage: Boolean!
  # this is a chunk of comments to be returned
  comments: [Comment]!
}
`;

export default [BlogTypeDefs];
