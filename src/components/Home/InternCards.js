import React from "react";

import IcrcPic from "../../Assets/ICRC_VR.jpg"
import OnSemi from "../../Assets/onsemi.png"
import hkcrc from "../../Assets/hkcrc.png"
import { Col, Container, Row } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Container>
        <br/>
      <Row>
        <Col md={3} >
          <img
            src={IcrcPic}
            alt="profile Pic"
            className="img-fluid"
            style={{ borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>
          <p className="publication-link">Virtual Reality Unit chez International Committee of the Red Cross - ICRC</p>
          <p className="publication-authors">
            Jul 2020 - Feb 2021, Supervisor: <a className="link" href="https://www.linkedin.com/in/christian-rouffaer-7255a96a">Mr. Christian Rouffaer </a>
          </p>
          <p className="publication-conference">
          Bangkok, Thailand
          </p>
          <p className="publication-authors">
            The project involved camera-based 3D reconstruction within VR scenes, targeting rehabilitation training for medical emergencies under critical conditions. Major platforms including UE4, Blender, and Openpose, were applied to facilitate reconstruction and visualization.  
          </p>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md={3} >
          <img
            src={OnSemi}
            alt="profile Pic"
            className="img-fluid"
            style={{ borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>
          <p className="publication-link">Field Application Engineer (FAE) at On Semiconductor</p>
          <p className="publication-authors">
            Aug 2021 - Jul 2022, Supervisor: <a className="link" href="https://www.linkedin.com/in/kelvin-tsiang-93b39615">Mr. Kelvin Tsiang </a>
          </p>
          <p className="publication-conference">
          HKSTP, Hong Kong
          </p>
          <p className="publication-authors">
            An STM32-based portable double-pulse tester for IGBT devices was implemented and tested to optimize the traditional testing measures. 
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={3} >
          <img
            src={hkcrc}
            alt="profile Pic"
            className="img-fluid"
            style={{ borderRadius: 0 }}
          />
        </Col>
        <Col md={9}>
          <p className="publication-link">Epoxy Flooring Automation Robot Project at HKCRC</p>
          <p className="publication-authors">
          Jun 2022 - Aug 2023, Supervisor: <a className="link" href="https://ece.hkust.edu.hk/eezxli">Prof. Zexiang L </a>
          </p>
          <p className="publication-conference">
          HKSTP, Hong Kong
          </p>
          <p className="publication-authors">
          Lead a 4-man team on the design and development of an epoxy flooring robot. Built a prototype that could operate at 8 times
          the speed of a human. 
          </p>
          <p className="publication-authors">
            Acted as the electrical and algorithm engineer of the team. Performed multi-sensor data fusion including lidar, IMU, and odometer, further implemented gmapping-based SLAM navigation
            stack. Developed an RF-signal-based remote control system. Designed a ROS and ESP32-based central control system.
          </p>
        </Col>
      </Row>
      
    </Container>
  );
}
export default ProjectCards;
