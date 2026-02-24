import { useState } from "react";

function CreateEvent({ onEventCreated }) {

  const [eventName, setEventName] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [organizerEmail, setOrganizerEmail] = useState("");

  const [errors, setErrors] = useState({});

  const createEvent = () => {

    let newErrors = {};

    if (!eventName.trim()) {
      newErrors.eventName = "Event name is required";
    }

    if (!organizerName.trim()) {
      newErrors.organizerName = "Organizer name is required";
    }

    if (!organizerEmail.trim()) {
      newErrors.organizerEmail = "Organizer email is required";
    }

    setErrors(newErrors);

    // stop if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    fetch("http://localhost:8080/events", {
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
      alert("Event created successfully!");
      onEventCreated(data.eventId || data.event_id);
    });

  };

  return (
    <div>

      <h2>Create Event</h2>

      <input
        placeholder="Event Name"
        value={eventName}
        onChange={(e)=>setEventName(e.target.value)}
        style={{
          border: errors.eventName ? "2px solid red" : ""
        }}
      />
      {errors.eventName && <p style={{color:"red"}}>{errors.eventName}</p>}

      <input
        placeholder="Organizer Name"
        value={organizerName}
        onChange={(e)=>setOrganizerName(e.target.value)}
        style={{
          border: errors.organizerName ? "2px solid red" : ""
        }}
      />
      {errors.organizerName && <p style={{color:"red"}}>{errors.organizerName}</p>}

      <input
        placeholder="Organizer Email"
        value={organizerEmail}
        onChange={(e)=>setOrganizerEmail(e.target.value)}
        style={{
          border: errors.organizerEmail ? "2px solid red" : ""
        }}
      />
      {errors.organizerEmail && <p style={{color:"red"}}>{errors.organizerEmail}</p>}

      <button onClick={createEvent}>
        Create Event
      </button>

    </div>
  );
}

export default CreateEvent;