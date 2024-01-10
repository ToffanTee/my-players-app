// Player.js
import React from "react";
import Card from "react-bootstrap/Card";
// import Image from 'react-bootstrap/Image';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="player_card" style={{ margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Not Assigned",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150", // Default image placeholder
};

export default Player;
