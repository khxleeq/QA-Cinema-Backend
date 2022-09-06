const mongoose = require('mongoose');

const discussionTopicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const discussionTopicThread = mongoose.Schema(
  {
    topicAuthor: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const discussionMovieThread = mongoose.Schema(
{
  movieAuthor: {
    type: String,
    required: true,
  },
  ratings: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
)

const discussionSchema = mongoose.Schema({
  discussionTopic: discussionTopicSchema,
  discussionTopicThread: discussionTopicThread,
  discussionMovieThread: discussionMovieThread,
})
module.exports = mongoose.model('DiscussionTopic', discussionSchema)