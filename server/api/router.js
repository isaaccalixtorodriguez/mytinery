const city = require('./cities/routes');
const user = require('./users/routes');
const itinerary = require('./itineraries/routes');
const auth = require('./auth/routes');

module.exports = {
  city,
  user,
  itinerary,
  auth,
};
