import { useState, useEffect } from "react";
import "./styles.css";
import dog from "./assets/dog.png"
import eye from "./assets/icon.svg"
import check from "./assets/check.svg"
import CountrySelect from "./CountrySelect";


export default function FormData() {
  const [showPassword, setShowPassword] = useState('password')

  const [sendButton, setSendButton] = useState(true)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function handleClickPassword() {
    (showPassword === 'text') ? setShowPassword('password') : setShowPassword('text')
  }

  function validateEmail(e) {
    let regex = /\S+@\S+\.\S+/
    setEmail(e.target.value)
    if (e.target.value.match(regex))
      document.getElementById("emailIcon").style.display = 'block'
    else if (email)
      document.getElementById("emailIcon").style.display = 'none'
  }

  function handlePhone(value) {
    setPhone(value)
  }

  function sendData() {
    document.getElementsByTagName('form')[0].style.display = 'none'
    document.getElementsByClassName('thanks')[0].style.display = 'block'
    document.getElementsByClassName('thanks')[0].style.animation = 'fadeIn 2s'
  }


  useEffect(() => {
    if (!email && !password && !passwordConfirm) {
      for (const element of document.getElementsByClassName("icon")) {
        element.style.display = "none";
      }
    } else if (password === passwordConfirm && email.match(/\S+@\S+\.\S+/) && phone > 9999 && password/*ignore prefix*/)
      setSendButton('')
    else
      setSendButton('true')
  }, [email, password, passwordConfirm, phone])


  return (
    <div className="app">
      <div className="container">
        <div className="formData">
          <form name="registrationForm" onsubmit="return false;">
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
            <CountrySelect onChange={handlePhone} value={phone} />

            <label htmlFor="email">E-mail</label>
            <div className="icons">
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
              <img src={check} alt="" id="emailIcon" className="icon" width={16} height={16} />
            </div>
            <span>
              <label htmlFor="password">Choose password</label>
              <img className="eye" src={eye} alt="show password" width={16} height={16}
                onClick={handleClickPassword} />
            </span>
            <div className="icons">
              <input
                type={showPassword}
                autoComplete="on"
                name="password"
                id="password"
                placeholder="It’ll be our secret"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={check} alt="" width={16} height={16} className="icon"
                style={password === passwordConfirm ? { display: 'block' } : { display: 'none' }}
              />
            </div>
            <span>
              <label htmlFor="repeatPassword">Repeat password</label>
              <img className="eye" src={eye} alt="show password" width={16} height={16}
                onClick={handleClickPassword}
              />
            </span>
            <div className="icons">
              <input type={showPassword} name="repeatPassword" id="repeatPassword" autoComplete="on"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)} />
              <img src={check} id="emailIcon" alt="" width={16} height={16} className="icon"
                style={password === passwordConfirm ? { display: 'block' } : { display: 'none' }}
              />
            </div>
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
            <button disabled={sendButton} type="submit"
              onClick={(e) => {
                e.preventDefault()
                sendData()
              }} >Sign up </button>

          </form>
        </div>
        <div className="thanks">
          <h1>Thank you!</h1>
          <p>We've received your message and will get back to you shortly!</p>
        </div>
        <div className="image">
          <img
            className="image"
            src={dog}
            alt="dog is watching on your data"
          />
        </div>
      </div>
    </div >
  );
}
