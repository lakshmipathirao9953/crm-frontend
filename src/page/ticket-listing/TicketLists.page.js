// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const TicketLists = () => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <TicketLists />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Button variant="info">Add new Ticket</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default TicketLists;

// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import SearchForm from "../../components/search-form/SearchForm.comp";
// import TicketTable from "../../components/ticket-table/TicketTable.comp";
// import tickets from "../../assets/data/dummy.tickets.json";
// import { Link } from "react-router-dom";
// const TicketLists = () => {
//   const [str, setStr] = useState("");
//   const [dispTicket, setDispTicket] = useState(tickets);
//   useEffect(() => {}, [str, dispTicket]);
//   const handleOnChange = (e) => {
//     const { value } = e.target;
//     console.log(value);
//     setStr(value);
//     searchTicket(value);
//   };
//   const searchTicket = (sttr) => {
//     const displayTickets = tickets.filter((row) =>
//       row.subject.toLowerCase().includes(sttr.toLowerCase())
//     );
//     setDispTicket(displayTickets);
//   };
//   return (
//     <Container>
//       <Row>
//         <Col>
//           {/* Update the following line */}
//           {/* You probably intended to use a different component here */}
//           {/* I'm removing the reference to PageBreadcrum since you mentioned you don't have it */}
//           <h1>Ticket Lists</h1>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>
//           <Link to="/add-ticket">
//             <Button variant="info">Add new Ticket</Button>
//           </Link>
//         </Col>
//         <Col className="text-right">
//           <SearchForm handleOnChange={handleOnChange} str={str} />
//         </Col>
//       </Row>
//       <hr />
//       <Row>
//         <Col>
//           <TicketTable tickets={dispTicket} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };
// export default TicketLists;
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchForm from "../../components/search-form/SearchForm.comp";
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy.tickets.json";
import { Link } from "react-router-dom";

const TicketLists = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {
    // Your existing code
  }, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Ticket Lists</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button variant="info">Add new Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketLists;
