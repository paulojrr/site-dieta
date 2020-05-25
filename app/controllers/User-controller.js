const isValid = require('../validators/registerValidation');
const User = require('../models/User');

exports.register = async (req, res) => {

     const { email, password, confirm } = req.body;

     if (isValid(email, password, confirm)) {
          return res.status(200).json({ result });
     } else {
          return res.status(403).json({ result });
     }
}








