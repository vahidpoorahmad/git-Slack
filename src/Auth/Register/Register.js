import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Register.css";
function Register() {
  const user = {
    userName: "",
    email: "",
    password: "",
    confirimPassword: "",
  };
  const error = [];
  const [userState, setUserState] = useState(user);
  const [errorState, setErrorState] = useState(error);
  function handelInput(event) {
    let target = event.target;
    setUserState((currentState) => {
      let currentuser = { ...currentState };
      currentuser[target.name] = target.value;
      return currentuser;
    });
  }
  const checkForm = () => {
    if (isFormEmpty()) {
      setErrorState((error) =>
        error.concat({ message: "Please fill in all fields " })
      );
      return false;
    } else if (!checkPassword()) {
      return false;
    }
    return true;
  };
  const isFormEmpty = () => {
    return (
      !userState.userName.length ||
      !userState.email.length ||
      !userState.password.length ||
      !userState.confirimPassword.length
    );
  };
  const checkPassword = () => {
    if (userState.password.length < 8) {
      setErrorState(
        error.concat({ message: "Password length should greater than 8 " })
      );
      return false;
    } else if (userState.password !== userState.confirimPassword) {
      setErrorState(
        error.concat({
          message: "Password and confirim password dose not match  ",
        })
      );

      return false;
    }
    return true;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setErrorState(() => []);
    if (checkForm()) {
      return;
    } else {
    }
  };

  const formatErrors = () => {
    return errorState.map((error, index) => (
      <p key={index} style={{ color: "red" }}>
        {error.message}
      </p>
    ));
  };
  return (
    <div className="register">
      <div className="card-register">
        <div className="card-register__header">
          <button className="card-register__header--userIcon">
            <FontAwesomeIcon icon={faCommentDots} />
          </button>
        </div>
        <div className="card-register__body">
          <form className="form-register" onSubmit={onSubmit}>
            <label htmlFor="User Name">User Name</label>
            <input
              className="form-register__input"
              type="text"
              name="userName"
              value={userState.userName}
              placeholder="User Name"
              onChange={handelInput}
            />
            <label htmlFor="User Name">User Email</label>
            <input
              className="form-register__input"
              type="email"
              name="email"
              value={userState.email}
              placeholder="User Email"
              onChange={handelInput}
            />
            <label htmlFor="User Name">User Password</label>
            <input
              className="form-register__input"
              type="password"
              name="password"
              value={userState.password}
              placeholder="User Password"
              onChange={handelInput}
            />
            <label htmlFor="User Name">Confirm password</label>
            <input
              className="form-register__input"
              type="password"
              name="confirimPassword"
              value={userState.confirimPassword}
              placeholder="Confirm password"
              onChange={handelInput}
            />
            <button className="form-submit">Submit</button>
          </form>
          {errorState.length > 0 && (
            <div className="card-register__body--error">
              <h3>Errors </h3>
              {formatErrors()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
