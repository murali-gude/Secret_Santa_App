import { useEffect, useState } from "react";
import API_BASE from "./config";

function ParticipantList({ eventId }) {

  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    if(eventId){
      fetch(`${API_BASE}/events/${eventId}/participants`)
        .then(res => res.json())
        .then(data => setParticipants(data));
    }
  }, [eventId]);

  return (
    <div>
      <h2>Participants</h2>

      {participants.map((p) => (
        <div key={p.participantId}>
          {p.name}
        </div>
      ))}

    </div>
  );
}

export default ParticipantList;