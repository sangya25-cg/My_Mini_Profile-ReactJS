import ProfileCard from "./ProfileCard";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  return (
    <div className="app">
      <h1>My Mini Profile</h1>

      <div className="status-input">
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="What's on your mind today?"
        />
      </div>

      <ProfileCard
        name="Sangya Ojha"
        bio="Learning React and building meaningful web experiences."
        status={status}
      />
    </div>
  );
}

export default App;