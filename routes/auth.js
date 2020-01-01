const router = require('express').Router();
const User = require('../model/User');
const joi = require('@hapi/joi');


const schema = {
    name: joi.string().min(6).required(),
    email: joi.string().min(6).email(),
    phone: joi.number().min(6)
}

router.post('/signup', async (req, res) => {
    const validation = joi.validate(req.body, schema);
    res.send(validation);
    /*  const user = new User({
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
          password: req.body.password,
  
      });
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        }
        catch (err) {
            res.status(400).send(err)
        }*/
})

module.exports = router;