import { useState } from "react";
import "./App.css";

import CreateEvent from "./CreateEvent";
import AddParticipant from "./AddParticipant";
import DrawButton from "./DrawButton";
import ViewAssignments from "./ViewAssignments";
import ParticipantList from "./ParticipantList";

function App() {

  const [eventId, setEventId] = useState(null);

  return (
    <div className="container">

      <h1 className="title">🎁 Secret Santa App</h1>
      <p>Current Event ID: {eventId}</p>

      <div className="card">
        <CreateEvent onEventCreated={setEventId} />
      </div>

      {eventId && (
  <>
    <div className="card">
      <AddParticipant eventId={eventId} />
    </div>

    <div className="card">
      <ParticipantList eventId={eventId} />
    </div>

    <div className="card">
      <DrawButton eventId={eventId} />
    </div>

    <div className="card">
      <ViewAssignments eventId={eventId} />
    </div>
  </>
)}

    </div>
  );

}

export default App;