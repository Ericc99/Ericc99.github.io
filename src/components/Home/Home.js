import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/Me.jpg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {

  return (
    <section>

      <Container fluid className="home-section" id="home" style={{backgroundColor: '#92afd6'}}>
        {/* <Particle /> */}
        <Container className="home-content">
          <Row >
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 0, color: '#4f4f4f' }} className="heading">
            Greetings!
            </h1>

            <p className="short-bio"  style={{color: '#4f4f4f'}}>
                I am <strong>Eric CUI Haozhe</strong>, a second-year MPhil student at {}
                <a className="link" href="https://mucslab-dev.hkust.edu.hk/"><strong>HKUST MuCSLab</strong></a>, supervised by {}
                <a className="link" href="https://facultyprofiles.hkust.edu.hk/profiles.php?profile=jinglei-yang-maeyang" target="_blank" rel="noreferrer"><strong>Prof. Jinglei YANG</strong></a>. My research interests include {}
                <strong>Microcontrollers</strong>, <strong>Robotics</strong>, and <strong>AI</strong>, in particular <strong>cross-disciplinary projects</strong>. Recently, I have been focusing on <strong>High-throughput Lab Automation for Material Science</strong>.
            </p>

            <p className="short-bio"  style={{color: '#4f4f4f'}}> 
                I received my B.S. degree from HKUST in 2023, with a major in Electronics and Computer Engineering (ELEC). During my undergraduate study, I was honored to have worked with {}
                <a className="link" href="https://eesling.home.ece.ust.hk/" target="_blank" rel="noreferrer"><strong>Prof. Ling SHI</strong></a> and 
                <a className="link" href="https://eebert.home.ece.ust.hk/"><strong> Prof. Bertram SHI</strong></a>. During the first year of my MPhil studies, I worked with 
                <a className="link" href="https://facultyprofiles.hkust.edu.hk/profiles.php?profile=zexiang-li-eezxli" target="_blank" rel="noreferrer"><strong> Prof. Zexiang LI </strong></a> 
                on an entrepreneurship project regarding <strong>Construction Robotics</strong>.
            </p>

            <p className="short-bio"  style={{color: '#4f4f4f'}}> 
                I am also the acting president of the HKUTS photography union and an enthusiastic photographer.
            </p>

                

 

              
              <div style={{ paddingLeft: 50, paddingTop:20,paddingBottom:20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, }}>
              <img
                src={profilePic}
                alt="profile Pic"
                className="img-fluid"
                style={{ maxHeight: "270px", marginLeft: 120 ,marginTop:100, borderRadius:0 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

