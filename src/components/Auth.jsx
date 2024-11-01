import { login, logout, loggedInUserDisplayName } from "../services/authService"

export function SignIn() {
  return (
  <div className="auth">
    <button className="sign-out" onClick={login}> <img alt="sign in"className="sign-out-logo"src="../public/sign-out-logo.svg" />Sign In</button>
  </div>
  )
}

export function SignOut() {
  return (
    <div className="auth">
      <h6>Hello, {loggedInUserDisplayName()}  </h6>
      <button className="sign-out" onClick={logout}> <img  alt="sign out"className="sign-out-logo"src="../public/sign-out-logo.svg" />Sign Out</button>
    </div>
  )
}