import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Auth() {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3500/auth/login", {
        username,
        password,
      });
      alert("login successfull");
      setCookies("access_token", res.data.token);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
      />
    </>
  );
};
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3500/auth/register", {
        username,
        password,
      });
      alert("user created please log in");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
        onSubmit={onSubmit}
      />
    </>
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <>
      <h2>{label}</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          id="password"
        />
        <button onClick={(e) => onSubmit(e)}>{label}</button>
      </form>
    </>
  );
};
