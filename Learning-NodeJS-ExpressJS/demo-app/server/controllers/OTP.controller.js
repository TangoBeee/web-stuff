/** GET: https://DOMAIN.com/api/generateOTP
 **/
const generateOTP = async (req, res) => {
  res.json({
    data: "OTP generateOTP",
  });
};

/** GET: https://DOMAIN.com/api/verifyOTP
 **/
const verifyOTP = async (req, res) => {
  res.json({
    data: "OTP verifyOTP",
  });
};

module.exports = { generateOTP, verifyOTP };
