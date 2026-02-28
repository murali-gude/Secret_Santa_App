import { useState } from "react";
import API_BASE from "./config";

function CreateEvent({ onEventCreated }) {

  const [eventName, setEventName] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [organizerEmail, setOrganizerEmail] = useState("");

  const createEvent = () => {

    fetch(`${API_BASE}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventName,
        organizerName,
        organizerEmail,
        budgetMin: 500,
        budgetMax: 2000
      })
    })
    .then(res => res.json())
    .then(data => {
      onEventCreated(data.eventId);
    });

  };

  return (
    <div>
      <h2>Create Event</h2>

      <input
        placeholder="Event Name"
        onChange={(e)=>setEventName(e.target.value)}
      />

      <input
        placeholder="Organizer Name"
        onChange={(e)=>setOrganizerName(e.target.value)}
      />

      <input
        placeholder="Organizer Email"
        onChange={(e)=>setOrganizerEmail(e.target.value)}
      />

      <button onClick={createEvent}>
        Create Event
      </button>
    </div>
  );
}

export default CreateEvent;