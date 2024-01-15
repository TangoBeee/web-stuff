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
  res.json({
    data: "Auth register",
  });
};

/** POST: https://DOMAIN.com/api/login

    * @param: {
        "username": "tango": STRING,
        "password": "tangos password": STRING
    }
**/
const login = async (req, res) => {
  res.json({
    data: "Auth login",
  });
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
