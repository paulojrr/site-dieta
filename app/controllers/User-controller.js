const isValid = require('../validators/registerValidation');
const User = require('../models/User');

exports.register = async (req, res) => {

     const { email, password, confirm } = req.body;

     if (isValid(email, password, confirm)) {
          await User.findOrCreate({ where: { email: email }, defaults: { password: password } })
               .then(([User, created]) => {
                    res.json(User.get({
                         plain: true
                    }))
                    console.log(created)
               })
     } else {
          return res.status(403).json({ emailValid: false, passwordValid: false });
     }
}