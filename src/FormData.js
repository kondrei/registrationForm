import "./styles.css";
import dog from "./assets/dog.png"
import eye from "./assets/icon.svg"
import { useState } from "react";


export default function FormData() {
  const [showPassword, setShowPassword] = useState('password')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function handleClickPassword() {
    (showPassword === 'text') ? setShowPassword('password') : setShowPassword('text')
  }

  function validateEmail(e) {
    let regex = /\S+@\S+\.\S+/
    setEmail(e.target.value)
    if (!e.target.value.match(regex)) {
      e.target.className = 'error'
    } else
      e.target.className = ''
  }

  return (
    <div className="app">
      <div className="container">
        <div className="formData">
          <div className="formTitle">
            <h1>
              Welcome!
              <br />
              Create your account.
            </h1>
            <strong>Already a member? </strong>
            <a href="/#">Sign up</a>
          </div>


          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              validateEmail(e)
            }}
          />

          <span>
            <label htmlFor="password">Choose password</label>
            <img className="eye" src={eye} alt="show password" width={16} height={16}
              onClick={handleClickPassword} />
          </span>
          <input
            type={showPassword}
            name="password"
            id="password"
            placeholder="It’ll be our secret"
            className={password === passwordConfirm ? '' : 'error'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            <label htmlFor="repeatPassword">Repeat password</label>
            <img className="eye" src={eye} alt="show password" width={16} height={16}
              onClick={handleClickPassword}
            />
          </span>
          <input type={showPassword} name="repeatPassword" id="repeatPassword"
            value={passwordConfirm}
            className={password === passwordConfirm ? '' : 'error'}
            onChange={(e) => setPasswordConfirm(e.target.value)} />
          <div>
            <input type="checkbox" name="tos" id="tos" />
            <label htmlFor="tos">
              I consent to the Privacy Policy & Terms of Service.
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
            />
            <label htmlFor="newsletter">
              I want to receive stories for trends, inspiration, interior design
              tips and to be the first to learn about new products & campaigns.
            </label>
          </div>
          <input type="submit" value="Sign up" />
        </div>
        <div className="image">
          <img
            className="image"
            src={dog}
            alt="dog is watching on your data"
          />
        </div>
      </div>
    </div>
  );
}
