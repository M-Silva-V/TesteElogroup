const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    firstName: String,
    lastName: String
  },
  telephone: {
    type: String
  },
  know: {
    type: ["Tv", "Internet", "Outros"]
  },
  socialNetwork: {
    type: Boolean
  },
  what: {
    type: ["Facebook", "LinkedIn", "Instagram"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Form", FormSchema);
