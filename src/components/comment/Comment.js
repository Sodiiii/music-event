import React from "react";
import "./comment.css";

const Login = () => {
  return (
    <div className="comment-box">
      <h2>Оставить комментарий</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Email</label>
        </div>
        <textarea className="comment-text" />
        <a href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Отправить
        </a>
      </form>
    </div>
  );
};

export default Login;
