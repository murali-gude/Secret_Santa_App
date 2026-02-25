import { useState } from "react";

function DrawMySanta({ participantId }) {

  const [receiver, setReceiver] = useState(null);

  const draw = () => {

    fetch(`http://localhost:8080/assignments/participants/${participantId}/draw`, {
      method: "POST"
    })
    .then(res => res.json())
    .then(data => {
      setReceiver(data.receiver);
    });

  };

  return (
    <div>

      <h2>Draw Secret Santa</h2>

      <button
        onClick={draw}
        disabled={receiver}
      >
        {receiver ? "Already Drawn" : "Draw Now"}
      </button>

      {receiver && (
        <div style={{ marginTop: "15px", color: "lightgreen" }}>
          🎁 You got: <b>{receiver.name}</b><br/>
          📧 Email: {receiver.email}
        </div>
      )}

    </div>
  );
}

export default DrawMySanta;