import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Eric, based on the template of Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Eric</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Ericc99"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/haozhe-cui-36a860171/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://scholar.google.com/citations?user=BEaJnt8AAAAJ"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <HiAcademicCap/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
