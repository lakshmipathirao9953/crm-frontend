import React from "react";
import { Breadcrumb } from "react-bootstrap";
const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

// export default PageBreadcrumb;
export default PageBreadcrumb;

// CustomBreadcrumb.js
// import React from "react";
// import { Breadcrumb } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const CustomBreadcrumb = ({ paths }) => {
//   return (
//     <Breadcrumb>
//       {paths.map((path, index) => (
//         <Breadcrumb.Item
//           key={index}
//           linkAs={Link}
//           linkProps={{ to: path.link }}
//         >
//           {path.text}
//         </Breadcrumb.Item>
//       ))}
//     </Breadcrumb>
//   );
// };

// export default CustomBreadcrumb;

// import React from "react";
// import { Breadcrumb } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const CustomBreadcrumb = ({ paths }) => {
//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
//         Home
//       </Breadcrumb.Item>

//       {paths.map((path, index) => (
//         <Breadcrumb.Item
//           key={index}
//           linkAs={Link}
//           linkProps={{ to: path.link }}
//         >
//           {path.text}
//         </Breadcrumb.Item>
//       ))}
//     </Breadcrumb>
//   );
// };

// export default CustomBreadcrumb;

// import React from "react";
// import { Breadcrumb } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const CustomBreadcrumb = ({ paths }) => {
//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
//         Home
//       </Breadcrumb.Item>

//       {paths.map((path, index) => (
//         <Breadcrumb.Item
//           key={index}
//           linkAs={Link}
//           linkProps={{ to: path.link }}
//         >
//           {path.text}
//         </Breadcrumb.Item>
//       ))}
//     </Breadcrumb>
//   );
// };

// export default CustomBreadcrumb;
