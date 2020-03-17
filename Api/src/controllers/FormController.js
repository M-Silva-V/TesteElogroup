const Yup = require("yup");
const Form = require("../models/Form");

module.exports = {
  async store(req, res) {
    const {
      name: { firstName, lastName },
      telephone,
      know,
      socialNetwork,
      what
    } = await Form.create(req.body);

    return res.json({
      name: { firstName, lastName },
      telephone,
      know,
      socialNetwork,
      what
    });
  }
};
