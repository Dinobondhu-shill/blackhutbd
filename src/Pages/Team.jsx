import React from 'react';
import './Team.css';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Paul Basten",
      role: "President",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37%20(1)-ZM2jvzluPuoHM5lOmI7DDFyzMH5D0W.webp",
      shapeColor: "#2B3990"
    },
    {
      name: "Sue Attwood",
      role: "Project Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37%20(1)-ZM2jvzluPuoHM5lOmI7DDFyzMH5D0W.webp",
      shapeColor: "#FFD056"
    },
    {
      name: "Carrie Abbey",
      role: "Photographer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37%20(1)-ZM2jvzluPuoHM5lOmI7DDFyzMH5D0W.webp",
      shapeColor: "#FFB4A2"
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <h1>Our Teams</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-image-container">
                <div 
                  className="shape-background" 
                  style={{ backgroundColor: member.shapeColor }}
                />
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

