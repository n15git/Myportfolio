import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiLinux } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiWindows,
  SiLinux,
  SiMacos,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
