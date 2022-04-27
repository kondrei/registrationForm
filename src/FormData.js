import "./styles.css";

export default function FormData() {
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
            <a href="#">Sign up</a>
          </div>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
          />

          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
          />

          <label htmlFor="password">Choose password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="It’ll be our secret"
          />
          <label htmlFor="repeatPassword">Repeat password</label>
          <input type="password" name="repeatPassword" id="repeatPassword" />
          <div>
            <input
              type="checkbox"
              name="tos"
              id="tos"
              placeholder="It’ll be our secret"
            />
            <label htmlFor="tos">
              I consent to the Privacy Policy & Terms of Service.
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              placeholder="It’ll be our secret"
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
            src="https://drive.google.com/uc?id=1w-J2keSUFtGxQTNMoaVUZC7jqotqsWLB"
            alt="dog is wathcing on your data"
          />
        </div>
      </div>
    </div>
  );
}
