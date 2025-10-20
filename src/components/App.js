// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogMessage, setDogMessage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogMessage(data.message));
  }, []);

  if (!dogMessage) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dogMessage} alt="A Random Dog" />
    </div>
  );
}

export default App;