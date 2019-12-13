import React, { useState } from "react";
import axios from "axios";

export default function Fetch({ url }) {
  const [greeting, setGreeting] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchGreeting = async () => {
    setButtonClicked(true);
    const response = await axios.get(url);
    const data = response.data;
    const { greeting } = data;
    setGreeting(greeting);
    setButtonClicked(false);
  };

  const buttonText = buttonClicked ? "Ok" : "Load Greeting";

  return (
    <div>
      <button onClick={fetchGreeting} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting ? <h1>{greeting}</h1> : null}
    </div>
  );
}
