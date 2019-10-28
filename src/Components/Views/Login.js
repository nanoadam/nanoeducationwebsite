import React from "react";

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    const cardStyle = {
      maxWidth: "40rem"
    };
    return (
      <div className="container">
        <div className="card my-4 mx-auto" style={cardStyle}>
          <div className="card-body">
            <h2 className="text-center">Login</h2>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" />
            </div>
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
