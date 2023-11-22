import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import PageBreadcrumb from "../components/breadcrumb";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
import shortText from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};
const AddTicket = () => {
  // const [frmData, setFrmData] = useState(initialFrmDt);
  // const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErro, setFrmDataErro] = useState(initialFrmError); // Corrected variable name

  // ...

  useEffect(() => {}, [frmData, frmDataErro]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      frmData,
      [name]: value,
    });
  };
  // const handleOnSubmit = async (e) => {
  //   e.preventDefault(initialFrmError);
  //   setFrmDataErro();
  //   const isSubjectValid = await shortText(frmData.subject);

  //   setFrmDataErro({
  //     initialFrmError,
  //     subject: !isSubjectValid,
  //   });
  //   console.log("form submit request received", frmData);
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isSubjectValid = await shortText(frmData.subject);
    !isSubjectValid &&
      setFrmDataErro({
        ...initialFrmError, // Corrected variable name
        subject: isSubjectValid,
      });
    console.log("form submit request received", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataErro={frmDataErro}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;

// Use an absolute import path
// import PageBreadcrumb from "../../components/breadcrumb";

// import PageBreadcrumb from "../../components/breadcrumb";

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";

// const AddTicket = () => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <PageBreadcrumb page="New Ticket" />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <AddTicketForm />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddTicket;

// AddTicket.page.js
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
// import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";

// const AddTicket = () => {
//   const breadcrumbPaths = [
//     { text: "Home", link: "/" },
//     { text: "New Ticket", link: "/new-ticket" },
//   ];

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <CustomBreadcrumb paths={breadcrumbPaths} />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <AddTicketForm />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddTicket;

// (2)
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
// import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";

// const AddTicket = () => {
//   const breadcrumbPaths = [
//     { text: "Home", link: "/" },
//     { text: "New Ticket", link: "/new-ticket" },
//   ];

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <CustomBreadcrumb paths={breadcrumbPaths} />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <AddTicketForm />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddTicket;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
// import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";

// const AddTicket = () => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <PageBreadcrumb page="New Ticket" />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <AddTicketForm />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddTicket;
