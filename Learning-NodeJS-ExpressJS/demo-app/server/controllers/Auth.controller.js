const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/User.model");

/** POST: https://DOMAIN.com/api/register

    * @param: {
        "username": "tango": STRING,
        "password": "tangos password": STRING,
        "email": "tango@domain.com": STRING,
        "firstName": "Tango": STRING,
        "lastName": "Bee": STRING,
        "address": "Jupiter near the SUN": STRING,
        "profilePhoto": "BASE64"||OBJECT: IMAGE||BASE64
    }
**/
const register = async (req, res) => {
  try {
    const { username, email, password, profile, firstName, lastName, address } =
      req.body;

    const existUsername = new Promise((resolve, reject) => {
      const usernameInDB = UserModel.findOne({ username })
        .then((err, userInDB) => {
          if (err) reject({ error: "Username not found!" });

          if (userInDB) reject({ error: "Username already exist!" });
        })
        .catch((error) => {
          reject({ error: error.message });
        });

      resolve();
    });

    const existEmail = new Promise((resolve, reject) => {
      const emailInDB = UserModel.findOne({ email })
        .then((err, userInDB) => {
          if (err) reject({ error: "Email not found!" });

          if (userInDB) reject({ error: "Email already exist!" });
        })
        .catch((error) => {
          reject({ error: error.message });
        });

      resolve();
    });

    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username,
                email,
                password: hashedPassword,
                firstName,
                lastName,
                profile: profile || "",
                address,
              });

              user
                .save()
                .then((result) =>
                  res
                    .status(201)
                    .send({ msg: "User Register Successfully.", result })
                )
                .catch((error) => {
                  if (error.code && error.code === 11000) {
                    return res.status(500).send({
                      msg: `User already exist with: ${
                        error.keyValue.username || error.keyValue.email
                      }`,
                    });
                  } else {
                    return res.status(500).send({
                      msg: error.message,
                    });
                  }
                });
            })
            .catch((error) => {
              console.log(error);
              return res
                .status(500)
                .send({ error: "Unable to hashed the password." });
            });
        }
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

/** POST: https://DOMAIN.com/api/login

    * @param: {
        "username": "tango": STRING,
        "password": "tangos password": STRING
    }
**/
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    UserModel.findOne({ username })
      .then((userInDB) => {
        if (!userInDB)
          return res.status(404).send({ msg: "Username not found!" });

        bcrypt
          .compare(password, userInDB.password)
          .then((passwordCheck) => {
            if (!passwordCheck)
              return res.status(500).send({
                msg: "Password is incorrect!",
              });

            //Creating a JWT token.
            //TODO("PROBLEM IS HERE")
            const token = jwt.sign(
              {
                userId: userInDB._id,
                username: userInDB.username,
              },
              process.env.JWT_SECRET,
              { expiresIn: "1h" }
            );

            if (token) {
              res.status(200).send({
                msg: "Login Successfully",
                username: userInDB.username,
                jwttoken: token,
              });
            }
          })
          .catch((error) => {
            return res.status(500).send({
              msg: error.message,
            });
          });
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

/** PUT: https://DOMAIN.com/api/resetPassword

    * @param: {
        "password": "tangos password": STRING
    }
**/
const resetPassword = async (req, res) => {
  res.json({
    data: "Auth resetPassword",
  });
};

/** POST: https://DOMAIN.com/api/welcomeMail

    * @param: {
        "username": "tango": STRING,
        "email": "tango@domain.com": STRING,
        "subject": "E-Mail subject": STRING,
        "body": "E-Mail body": STRING
    }
**/
const welcomeMail = async (req, res) => {
  res.json({
    data: "Auth welcomeMail",
  });
};

module.exports = { register, login, resetPassword, welcomeMail };
