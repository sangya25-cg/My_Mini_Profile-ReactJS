import { useState, useEffect } from "react";

function ProfileCard({ name, bio, status }) {
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
    { id: 5, name: "MongoDB" },
    { id: 6, name: "Node.js" },
    { id: 7, name: "Express.js" },
    { id: 8, name: "Machine Learning" },

  ];

  useEffect(() => {
    document.title = `${name} - ${likes} Likes`;
  }, [likes, name]);

  return (
    <div className="card">
      <div className="profile-header">
        <div className="avatar">S</div>
        <div>
          <h2>{name}</h2>
          <p className="subtitle">Full Stack Developer & React Learner</p>
        </div>
      </div>

      <p className="bio">{bio}</p>

      <div className="status-section">
        <h3>Current Status</h3>
        <p>{status || "No status updated yet."}</p>
      </div>

      <div className="skills-section">
        <h3>Skills</h3>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill.id} className="skill-badge">
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      <div className="actions">
        <button onClick={() => setLikes(likes + 1)}>
          ❤️ {likes} Likes
        </button>

        <button
          className="secondary-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      {showMore && (
        <div className="more-content">
          <p>
            I enjoy building responsive interfaces, learning modern React
            concepts, and creating clean user experiences. My goal is to become
            a skilled frontend engineer who builds products that users love.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;