import React from "react";
import "./Popup.scss";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form>
          <div className="popup-headtext">Sign Up Today</div>
          <div className="popup-subtext">
            Already a user? <span className="highlight">sign in</span>
          </div>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          ></input>
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          ></input>
          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          ></input>{" "}
          <div className="popup-checkbox">
            <input type="checkbox" name="remember"></input>

            <label for="remember">
              <b>Remember me</b>
            </label>
          </div>
          <div className="popup-warning">
            By creating an account, you agree to our Terms and have read and acknowledged
            the Glboal Privacy Statement.
          </div>
          <button type="button" className="signup-btn">Sign Up</button>
        </form>

        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
