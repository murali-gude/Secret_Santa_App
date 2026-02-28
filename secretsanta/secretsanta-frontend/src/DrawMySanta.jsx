import { useState, useEffect } from "react";
import API_BASE from "./config";

function DrawMySanta({ participantId }) {

  const [receiver, setReceiver] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/assignments/participants/${participantId}`)
      .then(res => res.json())
      .then(data => {
        if (data) setReceiver(data.receiver);
      });
  }, [participantId]);

  const draw = () => {
    fetch(`http://localhost:8080/assignments/participants/${participantId}/draw`, {
      method: "POST"
    })
    .then(res => res.json())
    .then(data => setReceiver(data.receiver));
  };

  return (
    <div>
      <h2>Draw Secret Santa</h2>

      <button onClick={draw} disabled={receiver}>
        {receiver ? "Already Drawn" : "Draw Now"}
      </button>

      {receiver && (
        <p>🎁 You got: <b>{receiver.name}</b></p>
      )}
    </div>
  );
}

export default DrawMySanta;