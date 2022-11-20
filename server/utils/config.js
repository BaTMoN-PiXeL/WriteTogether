require('dotenv').config();

const PORT = process.env.PORT || 5000
const MONGODB_URI = "mongodb+srv://BaTMoN:lemepro32@urltracker.twtwwgd.mongodb.net/?retryWrites=true&w=majority"
const SECRET = process.env.SECRET || "lol"

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
};
