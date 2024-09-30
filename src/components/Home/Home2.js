import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {AiOutlineFilePdf} from "react-icons/ai";
// import { BsGithub } from "react-icons/bs";
// import { MdOndemandVideo } from "react-icons/md";
import PublicationCard from "./PublicationCards";
import NewsCard from "./NewsCards";
import InternshipCard from "./InternCards";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import UnbiasedDesignPic from "../../Assets/UnbiasedDesign.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
        <Container>
            <Row>
                <Col md={12} className="home-about-description">
                <h1 style={{ fontSize: "1.6em" }}>
                <span className="black">Internships </span>
                </h1>
                <InternshipCard/>
                {/* <h1 style={{ fontSize: "1.6em" }}>
                <span className="black"> News </span>
                </h1>
                <NewsCard/> */}
                <h1 style={{ fontSize: "1.6em" }}>
                <span className="black"> Publications </span>
                </h1>

                <PublicationCard/>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}
export default Home2;
