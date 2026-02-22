import { useState } from "react";

function AddParticipant({ eventId }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addParticipant = () => {

    fetch(`http://localhost:8080/events/${eventId}/participants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        age: 25,
        wishlist: "Gift"
      })
    })
    .then(()=> alert("Participant added"));
  };

  return (
    <div>
      <h2>Add Participant</h2>

      <input placeholder="Name"
        onChange={(e)=>setName(e.target.value)} />

      <input placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)} />

      <button onClick={addParticipant}>
        Add Participant
      </button>

    </div>
  );
}

export default AddParticipant;
