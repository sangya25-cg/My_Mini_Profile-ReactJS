import ProfileCard from "./ProfileCard";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  return (
    <>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Enter your status"
      />
      <ProfileCard
        name="Sangya Ojha"
        bio="Learning React and building cool projects."
        status={status}
      />
    </>
  );
}

export default App;