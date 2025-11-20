import { LoginLeft } from "./LoginLeft"
import { LoginRight } from "./LoginRight"
import "./Login.css"

export default function Login() {
  return (
    <div className="login-container">
      <LoginLeft />
      <LoginRight />
    </div>
  )
}