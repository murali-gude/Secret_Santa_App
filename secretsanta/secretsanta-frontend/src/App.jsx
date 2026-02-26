import { useState } from "react";
import "./App.css";

import CreateEvent from "./CreateEvent";
import JoinEvent from "./JoinEvent";
import ParticipantList from "./ParticipantList";
import DrawMySanta from "./DrawMySanta";

function App() {

  const [eventId, setEventId] = useState(null);
  const [participantId, setParticipantId] = useState(null);

  const handleJoined = (eventId, participantId) => {
    setEventId(eventId);
    setParticipantId(participantId);
  };

  return (
    <div className="container">

      {/* Snow effect */}
      <div className="snow"></div>

      {/* Hero Section */}
      <div className="hero">
        <h1>🎅 Secret Santa</h1>
        <p>Organize your Christmas gift exchange magically 🎁</p>
      </div>

      {/* Create Event */}
      <div className="card">
        <CreateEvent onEventCreated={setEventId} />
      </div>

      {/* Join Event */}
      <div className="card">
        <JoinEvent onJoined={handleJoined} />
      </div>

      {/* Participant List */}
      {eventId && (
        <div className="card">
          <ParticipantList eventId={eventId} />
        </div>
      )}

      {/* Draw Secret Santa */}
      {participantId && (
        <div className="card">
          <DrawMySanta participantId={participantId} />
        </div>
      )}

    </div>
  );
}

export default App;