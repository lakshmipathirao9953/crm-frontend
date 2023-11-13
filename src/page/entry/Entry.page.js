// import React from "react";
// import { Jumbotron } from "react-bootstrap";
// // import Jumbotron from "react-bootstrap";
// import "./entry.style.css";
// const Entry = () => {
//   return (
//     <div className="jumbotron">
//       <Jumbotron>vbfvfkvm</Jumbotron>
//     </div>
//   );
// };

// export default Entry;
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Login from "../../components/login/Login.comp";
import ResetPassword from "../../components/login/password-reset/PasswordReset.comp";
import "./entry.style.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("fill up all the form!");
    }
    // ToDo call api to submit the form
    console.log(email, password);
  };
  const handleResetOnSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter the email!");
    } //ToDo call api to submit the form
    console.log(email);
  };
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };
  return (
    <div className="entry-page bg-info">
      <Container>
        <Card className="form-box text-center">
          <Card.Body>
            {/* <Card.Title>Welcome to the Page</Card.Title> */}
            <Card.Text>
              {frmLoad === "login" && (
                <Login
                  handleOnChange={handleOnChange}
                  handleOnSubmit={handleOnSubmit}
                  formSwitcher={formSwitcher}
                  email={email}
                  pass={password}
                />
              )}
              {frmLoad === "reset" && (
                <ResetPassword
                  handleOnChange={handleOnChange}
                  handleOnResetSubmit={handleResetOnSubmit}
                  formSwitcher={formSwitcher}
                  email={email}
                  pass={password}
                />
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Entry;
