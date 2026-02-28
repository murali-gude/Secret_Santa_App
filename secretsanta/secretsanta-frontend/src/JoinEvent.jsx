import { useState } from "react";
import API_BASE from "./config";

function JoinEvent({ onJoined }) {

  const [eventId, setEventId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const joinEvent = () => {

    fetch(`${API_BASE}/events/${eventId}/participants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(res => res.json())
    .then(data => {
      onJoined(eventId, data.participantId);
    });

  };

  return (
    <div>
      <h2>Join Event</h2>

      <input
        placeholder="Event ID"
        onChange={(e)=>setEventId(e.target.value)}
      />

      <input
        placeholder="Your Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Your Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button onClick={joinEvent}>
        Join Event
      </button>
    </div>
  );
}

export default JoinEvent;