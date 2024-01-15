/** GET: https://DOMAIN.com/api/user/:username
 **/

const getUser = async (req, res) => {
  res.json({
    data: "User getUser",
  });
};

/** POST: https://DOMAIN.com/api/userAuthentication

    * @param: {
        "username": "tango": STRING
    }
**/

const userAuthenticate = async (req, res) => {
  res.json({
    data: "User userAuthenticate",
  });
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
