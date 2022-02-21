import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
const Footer = () => {
  const sty = {
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#B33030",
    height: "50px",
    paddingTop: "0px",
  };
  return (
    <div style={sty}>
      <Container>
        <Row >
          <Col>
            <div className="InputRow">
              <FontAwesomeIcon icon={faPhoneSquare} />
              <p className="para">Toll free 1800 200 1234</p>
            </div>
          </Col>
          <Col>
            <div className="InputRow">
              <FontAwesomeIcon icon={faFacebook} />
              <p className="para">www.facebook.com/cripumps</p>
            </div>
          </Col>
          <Col>
            <div className="InputRow">
              <FontAwesomeIcon icon={faGlobe} />
              <p className="para">www.crigroups.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer