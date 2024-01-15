import React from "react";

const OTPVerification = () => {

  return (
    <main>
      <h1>Hello!</h1>
      <p>Please enter your OTP</p>

      <form>
        <div>
          <input
            type="number"
            placeholder="OTP"
          />
        </div>

        <button type="submit">Verify</button>

        <div>
          <span>
            Can't get OTP? <button>Resent Now</button>{" "}
          </span>
        </div>
      </form>
    </main>
  );
};

export default OTPVerification;
