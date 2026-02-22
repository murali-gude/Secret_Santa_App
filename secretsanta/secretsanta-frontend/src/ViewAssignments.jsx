import { useEffect, useState } from "react";

function ViewAssignments({ eventId }) {

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:8080/events/${eventId}/assignments`)
      .then(res => res.json())
      .then(data => setAssignments(data));

  }, [eventId]);

  return (
    <div>

      <h2>Assignments</h2>

      {assignments.map((a,index)=>(
        <div key={index}>
          {a.giverName} → {a.receiverName}
        </div>
      ))}

    </div>
  );
}

export default ViewAssignments;
