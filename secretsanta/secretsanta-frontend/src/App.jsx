import { useState } from "react";
import "./App.css";

import CreateEvent from "./CreateEvent";
import JoinEvent from "./JoinEvent";
import ParticipantList from "./ParticipantList";

function App() {

  const [eventId, setEventId] = useState(null);
  const [participantId, setParticipantId] = useState(null);

  return (
    <div className="container">

      <h1 className="title">🎁 Secret Santa App</h1>

      {/* Step 1: Create Event */}
      <div className="card">
        <CreateEvent onEventCreated={setEventId} />
      </div>

      {/* Step 2: Join Event */}
      {eventId && !participantId && (
        <div className="card">
          <JoinEvent 
            eventId={eventId}
            onJoined={setParticipantId}
          />
        </div>
      )}

      {/* Step 3: Show participants */}
      {eventId && (
        <div className="card">
          <ParticipantList eventId={eventId} />
        </div>
      )}

      {/* Debug display */}
      <p>Event ID: {eventId}</p>
      <p>Participant ID: {participantId}</p>

    </div>
  );
}

export default App;