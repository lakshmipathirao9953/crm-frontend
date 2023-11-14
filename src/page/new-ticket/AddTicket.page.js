import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "module";
const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
