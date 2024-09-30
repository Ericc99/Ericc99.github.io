import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../Assets/Photos/2023/1.jpg"
import img2 from "../../Assets/Photos/2023/2.jpg"
import img3 from "../../Assets/Photos/2023/3.jpg"
import img4 from "../../Assets/Photos/2023/4.jpg"
import img5 from "../../Assets/Photos/2023/5.jpg"
import img6 from "../../Assets/Photos/2023/6.jpg"
import img7 from "../../Assets/Photos/2023/7.jpg"
import img8 from "../../Assets/Photos/2023/8.jpg"
import img9 from "../../Assets/Photos/2023/9.jpg"
import img10 from "../../Assets/Photos/2023/10.jpg"

import img11 from "../../Assets/Photos/2024/1.jpg"
import img12 from "../../Assets/Photos/2024/2.jpg"
import img13 from "../../Assets/Photos/2024/3.jpg"
import img14 from "../../Assets/Photos/2024/4.jpg"
import img15 from "../../Assets/Photos/2024/5.jpg"
import img16 from "../../Assets/Photos/2024/6.jpg"
import img17 from "../../Assets/Photos/2024/7.jpg"
import img18 from "../../Assets/Photos/2024/8.jpg"
import img19 from "../../Assets/Photos/2024/9.jpg"
import img20 from "../../Assets/Photos/2024/10.jpg"

import 'wc-waterfall'

function Gallery() {
  return (
    <Container fluid className="home-about-section" id="about" >
        <br/><br/>
        <Container>
            <Row>
                <Col md={12} className="home-about-description">
                    <h1 style={{ fontSize: "1.6em" }}>
                    <span className="black">Gallery </span>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="home-about-description">
                    <h1 style={{ fontSize: "1.4em" }}>
                        <span className="black"> <strong>2024</strong></span>
                    </h1>
                </Col>
            </Row>
            <Container>
                <wc-waterfall gap={10} cols={3}>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/10.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/2.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/3.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/4.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/5.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/6.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/7.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/8.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/9.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2024/1.jpg"/>

                </wc-waterfall>
            </Container>
            <Row>
                <Col md={12} className="home-about-description">
                    <h1 style={{ fontSize: "1.4em" }}>
                        <span className="black"> <strong>2023</strong></span>
                    </h1>
                </Col>
            </Row>
            <Container>
                <wc-waterfall gap={10} cols={3}>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/1.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/2.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/3.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/4.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/5.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/6.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/7.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/8.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/9.jpg"/>
                    <img src="https://raw.githubusercontent.com/Ericc99/Ericc99.github.io/master/src/Assets/Photos/2023/10.jpg"/>

                </wc-waterfall>
            </Container>
        </Container>
    </Container>
  );
}
export default Gallery;
