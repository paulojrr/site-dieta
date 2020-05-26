const User = require('../models/User');

exports.register = async (req, res) => {

     const { email, password, confirm } = req.body;


     await User.findOrCreate({ where: { email: email }, defaults: { password: password } })
          .then(([User, created]) => {
               res.json(User.get({
                    plain: true
               }))
               console.log(created)
               if(!created) {
                    res.redirect()
               }
          })

     
}