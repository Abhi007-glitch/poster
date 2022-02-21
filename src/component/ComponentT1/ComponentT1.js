import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import award from "./award.png";
import './ComponentT1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import wining from './wining.png';
function ComponentT1() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2} md={4}>
              <img className="image img-fluid" src={award} alt="award" />
           
          </Col>
          <Col sm={10} md={8}>
            <p className="boldT">
              C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR
              THE 4TH TIME.
            </p>
            <ul style={{ alignItems: "flex-start" }}>
              <li>
                <p>
                  C.R.I's enery products are well recognized by various
                  Government Institutions, as trustworthy products for various
                  projects across the globe to save energy.
                  <span style={{ visibility: "hidden" }}>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </span>
                </p>
              </li>
              <li><p>C.R.I. is the highest contributor in the country for the
                projects of EESL(Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 star rated energy efficient
                snmart pumps with IoT enabled control panel.
                </p>
              </li>
            </ul>
            <img src={wining} className="image2 img-fluid" alt="image2" />
            <p>
              Government of India has awarded the{" "}
              <strong>"National Energy Consrvation Award 2018"</strong>.
              Mr.G.Selvaraj, Joint Managing Director of C.R.I. Group received
              the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ComponentT1