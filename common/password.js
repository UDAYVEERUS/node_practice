const bcrypt = require("bcrypt");
const passwordGenerate = async (password) => {
  // using salt for generate the password salt with hash
  const salt = await bcrypt.genSaltSync(10);

  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

const passwordValidate = async (password, hash) => {
  // checking password validation with compareSync method
  return bcrypt.compareSync(password, hash);
};

module.exports = { passwordGenerate, passwordValidate };
