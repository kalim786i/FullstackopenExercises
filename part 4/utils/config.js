require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_URI =
//   "mongodb+srv://kalim:kalm123@cluster0.rlokn.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  MONGODB_URI,

  PORT,
};
