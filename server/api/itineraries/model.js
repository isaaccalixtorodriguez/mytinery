const { Schema, model } = require('mongoose');

const ItinerarySchema = Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
  },
  img: {
    type: String,
    required: [true, 'The url of the image is required'],
  },
  activities: {
    type: [{ name: String, img: String }],
  },
  authorName: {
    type: String,
    required: [true, 'The author name is required'],
  },
  authorPic: {
    type: String,
    required: [true, 'The author pic is required'],
  },
  price: {
    type: Number,
    required: [true, 'The price is required'],
    min: 1,
    max: 5,
  },
  duration: {
    type: Number,
    required: [true, 'The duration is required'],
    min: 1,
  },
  likes: {
    type: Number,
    default: 0,
  },
  hashtags: {
    type: [String],
  },
  comments: {
    type: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'user' },
        text: String,
        userName: String,
        userPic: String,
      },
    ],
  },
  usersLike: {
    type: [String],
  },
  cityId: {
    type: Schema.Types.ObjectId,
    required: [true, 'The cityId is required'],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// eslint-disable-next-line func-names
ItinerarySchema.methods.toJSON = function () {
  const {
    __v, status, _id, ...itinerary
  } = this.toObject();
  itinerary.id = _id;
  return itinerary;
};

module.exports = model('Itinerary', ItinerarySchema);
