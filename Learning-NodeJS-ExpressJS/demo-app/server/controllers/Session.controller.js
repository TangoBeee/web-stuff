/** PUT: https://DOMAIN.com/api/createResetSession
 **/
const resetSession = async (req, res) => {
  res.json({
    data: "Auth resetSession",
  });
};

module.exports = { resetSession };
