// import React from "react";
// import { prototype } from "prop-types";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { propTypes } from "react-bootstrap/esm/Image";
// const Login = ((handleOnChange,email,pass)) => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1 className="text-info text-centre">Client Login</h1>
//           <hr />
//           <Form>
//             <Form.Group>
//               <Form.Label>Email Adress</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value ={email}
//                 onChange={handleOnChange}
//                 placeholder="Enter Email"
//                 required
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={pass}
//                 onChange={handleOnChange}
//                 placeholder="Enter Password"
//                 required
//               />
//             </Form.Group>
//             <Button type="submit">Login</Button>
//           </Form>
//           <hr />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <a href="#!">Forget Password</a>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
// Login.propTypes ={
//     handleOnChange:propTypes.func.isRequired,
//     email:propTypes.string.isRequired,
//     pass:propTypes.string.isRequired,

// }

// export default Login;import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Login = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  pass,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("reset")}>
            Forgot Password
          </a>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default Login;
