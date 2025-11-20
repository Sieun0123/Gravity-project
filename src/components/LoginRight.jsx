import React from "react";
import { useState } from "react";
import { ButtonPrimaryWith } from "./ButtonPrimaryWith";

export const LoginRight = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (email === "") {
      setError("이메일을 입력하세요");
      return;
    }
    if (!email.includes("@")) {
      setError("올바른 이메일 형식이 아닙니다");
      return;
    }
    if (password === "") {
      setError("비밀번호를 입력하세요");
      return;
    }
    if (password.length < 6) {
      setError("비밀번호는 6자 이상이어야 합니다");
      return;
    }
  };

  return (
    <div className="login-right">
      <div className="login-right-content">
        <div className="login-title">
          <div className="title-text">Welcome back!</div>
          <p className="subtitle-text">
            Access your workspace, collaborate, and create something great together.
          </p>
        </div>

        <div className="login-inputs">
          <div className="input-field">
            <div className="input-label">이메일</div>
            <input
              type="email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-field">
            <div className="input-label">비밀번호</div>
            <input
              type="password"
              className="input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-options">
            <div className="remember-me">
              <input
                type="checkbox"
                className="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              < label className="checkbox-label">Remember me</label>
            </div>
            <div className="forgot-password">비밀번호 찾기</div>
          </div>
        </div>

        <ButtonPrimaryWith
          className="signin-button"
          divClassName="signin-button-text"
          frameClassName="signin-button-frame"
          hasIcon={false}
          text="Sign in"
          onClick={handleSubmit}
        />
      </div>

      <p className="signup-text">
        <span className="signup-question">Gravity 가입이 처음이신가요? </span>
        <span className="signup-link">계정 만들기</span>
      </p>
    </div>
  );
};
