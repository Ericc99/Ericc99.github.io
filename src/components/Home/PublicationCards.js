import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paper1 from "../../Assets/paper1.jpg";
import Paper2 from "../../Assets/layout.png";
import { FaRegFilePdf } from "react-icons/fa";


function PublicationCards(props) {
  return (
    <Container>
        <h1 style={{ fontSize: "1.4em" }}>
            <span className="black"> <strong>2022</strong></span>
        </h1>
        <br/>
        <Row>
            <Col md={3} className="publication-block">
            <img
                src={Paper1}
                alt="profile Pic"
                className="img-fluid"
                style={{ width: "240px", height: "120px", borderRadius: 0 }}
            />
            </Col>
            <Col md={9}>
                <a className="publication-link" href="https://www.sciencedirect.com/science/article/pii/S0009250922005802">A kinetics-mass transport model for CO2 electroreduction reactor to investigate performance limitation factors</a>
                <p className="publication-authors">Yuanxin Fang, <strong>Haozhe Cui</strong>, Bo Chen, Wanting Chen, Xuehua Ruan, Xuemei Wu, Fujun Cui, Minggang Guo, Gaohong He</p>
                <p className="publication-conference">Chemical Engineering Science</p>
                <FaRegFilePdf className="pub-icon" /> &nbsp;
                {<a className="pub-link" href="https://www.sciencedirect.com/science/article/pii/S0009250922005802" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">PDF</a>}
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md={3} className="publication-block">
            <img
                src={Paper2}
                alt="profile Pic"
                className="img-fluid"
                style={{ width: "240px", height: "120px", borderRadius: 0 }}
            />
            </Col>
            <Col md={9}>
                <p className="publication-link" >A Modelling and Optimization Methodology for High-Throughput Synthesis Automation Systems</p>
                <p className="publication-authors">Co-First Author</p>
                <p className="publication-conference">Under preparations for IEEE Robotics and Automation Letters (RA-L)</p>
            </Col>
        </Row>
    </Container>
  );
}
export default PublicationCards;
