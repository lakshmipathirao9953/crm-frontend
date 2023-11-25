// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import tickets from "../../assets/data/dummy.tickets.json";
// import { MessageHistory } from "../../components/message-history/MassageHistory.comp";
// import UpdateTicket from "../../components/update-ticket/UpdateTicket.comp";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// //const ticket =tickets[0]
// const Ticket = () => {
//   const { tId } = useParams();
//   const [message, setMessage] = useState("");
//   const [ticket, setTicket] = useState("");
//   useEffect(() => {
//     for (let i = 0; i < tickets.length; i++) {
//       if (tickets[i].id == tId) setTicket(tickets[i]);
//       continue;
//     }
//   }, [message, tId]);
//   const handleOnChange = (e) => {
//     setMessage(e.target.value);
//   };
//   const handleOnSubmit = (e) => {
//     alert("Form submited!");
//   };
//   return (
//     <Container>
//       <Row>
//         <Col>ticket</Col>
//       </Row>
//       <Row>
//         <Col className="text-weight-boder text-secondary">
//           <div className="subject">Subject:{ticket.subject}</div>
//           <div className="date">Ticket Opened:{ticket.addedAt}</div>
//           <div className="status">Status:{ticket.status}</div>
//         </Col>
//         <Col className="text-right">
//           <Button variant="outline-info">close Ticket</Button>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
//       </Row>
//       <hr />
//       <Row className="mt-4">
//         <Col>
//           <UpdateTicket
//             msg={message}
//             handleOnChange={handleOnChange}
//             handleOnSubmit={handleOnSubmit}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Ticket;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tickets from "../../assets/data/dummy.tickets.json";
import { MessageHistory } from "../../components/message-history/MassageHistory.comp";
import UpdateTicket from "../../components/update-ticket/UpdateTicket.comp";
import { useHistory, useParams } from "react-router-dom";

const Ticket = () => {
  const history = useHistory();
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    // Your existing code to set the ticket based on tId
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) setTicket(tickets[i]);
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    // Your form submission logic here
    alert("Form submitted!");
  };

  const handleTicketClose = () => {
    // Add logic here to handle closing the ticket
    // For example, you can update the ticket status and then navigate back to the tickets page
    // Here, we assume you have a function `closeTicket` to handle closing the ticket
    // Update the implementation based on your actual requirements

    // Example:
    // closeTicket(ticket.id);
    history.push("/tickets");
  };

  return (
    <Container>
      <Row>
        <Col>ticket</Col>
      </Row>
      <Row>
        <Col className="text-weight-boder text-secondary">
          <div className="subject">Subject:{ticket.subject}</div>
          <div className="date">Ticket Opened:{ticket.addedAt}</div>
          <div className="status">Status:{ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info" onClick={handleTicketClose}>
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;

// Ticket.page.js

// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import tickets from "../../assets/data/dummy.tickets.json";

// // Choose a different name for the constant variable
// const firstTicket = tickets[0];

// const Ticket = () => {
//   console.log("First Ticket:", firstTicket);

//   return (
//     <Container>
//       <Row>
//         <Col>ticket</Col>
//       </Row>
//       <Row>
//         <Col>
//           <div className="subject">Subject: {firstTicket.subject}</div>
//           <div className="date">Date: {firstTicket.addedAt}</div>
//           <div className="status">Status: {firstTicket.status}</div>
//         </Col>
//         <Col>
//           <Button variant="outline-info">Close Ticket</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Ticket;
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
// import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
// import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
// import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
// import { useParams } from "react-router-dom";

// import { fetchSingleTicket, closeTicket } from "../ticket-list/ticketsAction";
// import { resetResponseMsg } from "../ticket-list/ticketsSlice";

// export const Ticket = () => {
//   const { tId } = useParams();
//   const dispatch = useDispatch();
//   const { isLoading, error, selectedTicket, replyMsg, replyTicketError } =
//     useSelector((state) => state.tickets);

//   useEffect(() => {
//     dispatch(fetchSingleTicket(tId));

//     return () => {
//       (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
//     };
//   }, [tId, dispatch, replyMsg, replyTicketError]);

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <PageBreadcrumb page="Ticket" />
//         </Col>
//       </Row>

//       <Row>
//         <Col>
//           {isLoading && <Spinner variant="primary" animation="border" />}
//           {error && <Alert variant="danger">{error}</Alert>}
//           {replyTicketError && (
//             <Alert variant="danger">{replyTicketError}</Alert>
//           )}
//           {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
//         </Col>
//       </Row>
//       <Row>
//         <Col className="text-weight-bolder text-secondary">
//           <div className="subject">Subject: {selectedTicket.subject}</div>
//           <div className="date">
//             Ticket Opened:{" "}
//             {selectedTicket.openAt &&
//               new Date(selectedTicket.openAt).toLocaleString()}
//           </div>
//           <div className="status">Status: {selectedTicket.status}</div>
//         </Col>
//         <Col className="text-right">
//           <Button
//             variant="outline-info"
//             onClick={() => dispatch(closeTicket(tId))}
//             disabled={selectedTicket.status === "Closed"}
//           >
//             Close Ticket
//           </Button>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>
//           {selectedTicket.conversations && (
//             <MessageHistory msg={selectedTicket.conversations} />
//           )}
//         </Col>
//       </Row>
//       <hr />

//       <Row className="mt-4">
//         <Col>
//           <UpdateTicket _id={tId} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };
