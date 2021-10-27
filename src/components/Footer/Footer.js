import React from "react";
import { Card } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
