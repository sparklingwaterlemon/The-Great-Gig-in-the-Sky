// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/User');
const Astro = require('./models/Astro');


// Local variables will come in handy for holding retrieved documents
let u, a