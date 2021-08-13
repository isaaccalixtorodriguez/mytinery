const city = require('./cities/routes');
const user = require('./users/routes');
const itinerary = require('./itineraries/routes');
const checkuser = require('./checkuser/routes');
const comments = require('./comments/routes');
const like = require('./like/routes');

module.exports = {
  city,
  user,
  itinerary,
  checkuser,
  comments,
  like,
};
