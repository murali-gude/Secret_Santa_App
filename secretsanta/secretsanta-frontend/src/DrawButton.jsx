function DrawButton({ eventId }) {

  const draw = () => {

    fetch(`http://localhost:8080/events/${eventId}/draw`, {
      method: "POST"
    })
    .then(()=> alert("Draw completed!"));

  };

  return (
    <div>
      <button onClick={draw}>
        Run Secret Santa Draw
      </button>
    </div>
  );
}

export default DrawButton;