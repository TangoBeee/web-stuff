/** GET: https://DOMAIN.com/api/user/:username
 **/

const UserModel = require("../models/User.model");

const getUser = async (req, res) => {
  const { username } = req.params;

  try {
    if (!username) return res.status(501).send("Invalid username!");

    UserModel.findOne({ username })
      .then((userInDB) => {
        if (!userInDB) return res.status(404).send({ msg: "User not found!" });

        const { password, __v, _id, ...rest } = Object.assign(
          {},
          userInDB.toJSON()
        );

        return res.status(201).send(rest);
      })
      .catch((error) => {
        return res.status(500).send({
          msg: error.message,
        });
      });
  } catch (error) {
    return res.status(500).send({
      msg: error.message,
    });
  }
};

/** This is a middleware to verify an username**/

const userAuthenticate = async (req, res, next) => {
  try {
    console.log(req.method);
    const { username } = req.method === "POST" ? req.body : res.query;

    const usernameExistInDB = await UserModel.findOne({ username });
    if (!usernameExistInDB)
      return res.status(500).send({
        msg: "User not found",
      });

    next();
  } catch (error) {
    return res.status(500).send({
      msg: error.message,
    });
  }
};

/** PUT: https://DOMAIN.com/api/updateUser

    * Field can be empty. Depends on the user's choice to update his/her data. 
    
    * @param: {
        "username": "tango": STRING,
        "email": "tango@domain.com": STRING,
        "firstName": "Tango": STRING,
        "lastName": "Bee": STRING,
        "address": "Jupiter near the SUN": STRING,
        "profilePhoto": "BASE64"||OBJECT: IMAGE||BASE64
    }
**/

const updateUser = async (req, res) => {
  res.json({
    data: "User updateUser",
  });
};

module.exports = { getUser, userAuthenticate, updateUser };
