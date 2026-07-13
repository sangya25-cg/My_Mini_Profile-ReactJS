import { useState, useEffect } from "react";

function ProfileCard({ name, bio, status }) {
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
  ];

  function handleLike() {
    setLikes(likes + 1);
  }

  useEffect(() => {
    document.title = `${name} - ${likes} Likes`;
  }, [likes, name]);

  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>

      <button onClick={handleLike}>❤️ {likes} Likes</button>

      <h3>Skills</h3>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <h3>Status</h3>
      <p>{status}</p>

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <p>
          I enjoy learning React, building web applications, and improving my
          frontend skills every day.
        </p>
      )}
    </div>
  );
}

export default ProfileCard;
