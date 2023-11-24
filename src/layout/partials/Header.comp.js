// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import logo from "../../assets/img/logo.png";
// const Header = () => {
//   return (
//     <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
//       <Navbar.Brand>
//         <img src={logo} alt="logo" width="100px" height="50px"></img>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link href="/dashboard">Dashboard</Nav.Link>
//           <Nav.Link href="/dashboard">Tickets</Nav.Link>
//           <Nav.Link href="/dashboard">Logout</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;
// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import logo from "../../assets/img/logo.png";

// import { LinkContainer} from "react-router-bootstrap";
// const Header = () => {
//   return (
//     <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
//       <Navbar.Brand>
//         <img src={logo} alt="logo" width="100px" height="50px"></img>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           {/* <Link to="/dashboard">Dashboard</Link>
//           <Link to="/tickets">Tickets</Link>
//           <Link to="/logout">Logout</Link> */}
//           <LinkContainer to="/dashboard">
//             <Nav.Link href="/dashboard">Dashboard</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/tickets">
//             <Nav.Link href="/tickets">Tickets</Nav.Link>
//           </LinkContainer>

//           <Nav.Link href="/logout">Logout</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;
import React from "react";
import logo from "../../assets/img/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="100px" height="50px"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/tickets">
            Tickets
          </Nav.Link>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
