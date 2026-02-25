import { useState } from "react";
import "./App.css";

import CreateEvent from "./CreateEvent";
import JoinEvent from "./JoinEvent";
import ParticipantList from "./ParticipantList";

function App() {

  const [eventId, setEventId] = useState(null);
  const [participantId, setParticipantId] = useState(null);

  const handleJoined = (eventId, participantId) => {
    setEventId(eventId);
    setParticipantId(participantId);
  };

  return (
    <div className="container">

      <h1 className="title">🎁 Secret Santa App</h1>

      {/* Organizer creates event */}
      <div className="card">
        <CreateEvent onEventCreated={setEventId} />
      </div>

      {/* Participant joins event (ALWAYS visible) */}
      <div className="card">
        <JoinEvent onJoined={handleJoined} />
      </div>

      {/* Show participants after event selected */}
      {eventId && (
        <div className="card">
          <ParticipantList eventId={eventId} />
        </div>
      )}

      {/* Debug info */}
      <p>Event ID: {eventId}</p>
      <p>Participant ID: {participantId}</p>

    </div>
  );
}

export default App;