import React from "react"
import { FaApple } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"

export function LoginLeft() {
  return (
    <div className="login-left">
      <div className="circle-top" />
      <div className="circle-bottom" />

      <div className="login-left-content">
        <div className="text">
          <div className="title">
            <div className="text-wrapper-3">Welcome to our community</div>
            <p className="p">
              Access your workspace, collaborate, and create something great together.
            </p>
          </div>
        </div>

        <div className="login">
          <div className="login-content">
            <button className="login-apple">
              <FaApple className="icon" />
              <span className="text-wrapper">Apple로 시작하기</span>
            </button>

            <button className="login-google">
              <FaGoogle className="icon" />
              <span className="text-wrapper">Google로 시작하기</span>
            </button>
          </div>

          <div className="text-wrapper-2">다른 방법으로 로그인하기</div>
        </div>
      </div>
    </div>
  )
}