// import { Form } from "react-bootstrap";
import React from "react";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Ticket from "./page/ticket/Ticket.page";
// import Dashboard from "./page/dashboard/Dashboard.page";
// import AddTicket from "./page/new-ticket/AddTicket.page.js";
// import TicketLists from "./page/ticket-listing/TicketLists.page.js";

// import { Button } from "react-bootstrap";
// import Entry from "./page/entry/Entry.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
