import { useEffect, useState } from "react";
import API_BASE from "./config";

function ParticipantList({ eventId }) {

  const [participants, setParticipants] = useState([]);

  const loadParticipants = () => {
    fetch(`http://localhost:8080/events/${eventId}/participants`)
      .then(res => res.json())
      .then(data => setParticipants(data));
  };

  useEffect(() => {
    if(eventId){
      loadParticipants();
    }
  }, [eventId]);

  return (
    <div>
      <h2>Participants</h2>

      {participants.length === 0 ? (
        <p>No participants yet</p>
      ) : (
        participants.map((p, index) => (
          <div key={index}>
            👤 {p.name} ({p.email})
          </div>
        ))
      )}

    </div>
  );
}

export default ParticipantList;