import React from "react";
import Nav from "../../layout/Nav";

const WelcomePage = () => {
  return (
    <div>
      <Nav />
      <div className="center">
        <h2>Hello, welcome to the best website for Space News!</h2>
        <hr></hr>
        <h3>Click the Register button to make an account.</h3>
        <h4>Or</h4>
        <h3>Click the Login button to access the website.</h3>

        <img
          className="img"
          src="https://www.nasa.gov/sites/default/files/thumbnails/image/50097912597_e9be3e0a4f_k.jpg"
        ></img>
      </div>
    </div>
  );
};

export default WelcomePage;
