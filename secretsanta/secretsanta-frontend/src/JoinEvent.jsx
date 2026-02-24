import { useState } from "react";

function JoinEvent({ eventId, onJoined }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const joinEvent = () => {

    fetch(`http://localhost:8080/events/${eventId}/participants`, {
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
      alert("Joined successfully");
      onJoined(data.participantId);
    });

  };

  return (
    <div>
      <h2>Join Event</h2>

      <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

      <button onClick={joinEvent}>
        Join
      </button>
    </div>
  );
}

export default JoinEvent;