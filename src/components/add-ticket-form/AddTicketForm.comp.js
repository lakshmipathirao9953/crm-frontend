import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

const AddTicketForm = ({
  handleOnChange,
  handleOnSubmit,
  frmDt,
  frmDataErro,
}) => {
  console.log(frmDt);
  return (
    <div className="mt-3 add-new-ticket bg-light">
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Add a New Ticket </h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  submit
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    name="subject"
                    value={frmDt.subject}
                    // minLength="3"
                    maxLength="100"
                    onChange={handleOnChange}
                    placeholder="Subject"
                    required
                  />
                  <Form.Text class="text-danger">
                    {frmDataErro.subject && "Subject is required"}
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Issue Found On
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="date"
                    name="issueDate"
                    value={frmDt.issueDate}
                    onChange={handleOnChange}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group>
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  name="detail"
                  value={frmDt.detail}
                  rows="5"
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Button type="submit" variant="info" block>
                Submit
              </Button>
            </Form>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataErro: PropTypes.object.isRequired,
};
export default AddTicketForm;
