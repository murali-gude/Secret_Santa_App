import { useState } from "react";
import "./App.css";

import CreateEvent from "./CreateEvent";
import JoinEvent from "./JoinEvent";
import ParticipantList from "./ParticipantList";
import DrawMySanta from "./DrawMySanta";

function App() {

  // Stores selected event
  const [eventId, setEventId] = useState(null);

  // Stores logged-in participant
  const [participantId, setParticipantId] = useState(null);

  // Called when participant joins event
  const handleJoined = (eventId, participantId) => {
    setEventId(eventId);
    setParticipantId(participantId);
  };

  return (
    <div className="container">

<div className="hero">
  <h1>🎅 Secret Santa</h1>
  <p>Organize your Christmas gift exchange easily and magically</p>
</div>
      {/* Organizer creates event */}
      <div className="card">
        <CreateEvent onEventCreated={setEventId} />
      </div>

      {/* Participant joins existing event */}
      <div className="card">
        <JoinEvent onJoined={handleJoined} />
      </div>

      {/* Show participants list */}
      {eventId && (
        <div className="card">
          <ParticipantList eventId={eventId} />
        </div>
      )}

      {/* Participant draws their Secret Santa */}
      {participantId && (
        <div className="card">
          <DrawMySanta participantId={participantId} />
        </div>
      )}

    
    </div>
  );
}

export default App;