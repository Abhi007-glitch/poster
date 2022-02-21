import React from 'react'
import { Container } from 'react-bootstrap'
import machine from './machine.png';

import './ComponentB1.css';
import Divider from './Divider';
function ComponentB1() {
  return (
    <div className="DIV">
      <Container className="container">
        <p className="para2">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS AVROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={machine} alt="machines" className="img2 img-fluid" />
        <p className="para">
          Valves-Pumps-Pipes-IoT Drives & Controller -wires & Cables - Solar
          Systems-Motors
        </p>
      </Container>
      <Divider color="red" />
      <p className="para3" style={{ margin: "0px" }}>
        C.R.I.FLUID Systems PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className="para2">
        CHEMICALS & PROCESS<span className="textC">|</span>
        POWER<span className="textC">|</span>WATER AND WASTE WATER
        <span className="textC">|</span>OILS & GAS
        <span className="textC">|</span>PHARMA<span className="textC">|</span>
        SUGARS & DISTILLERIES<span className="textC">|</span>
        PAPER & PULP<span className="textC">|</span>MARINE & DEFENCE
        <span className="textC">|</span>MEATL & MINING
        <span className="textC">|</span>FOOD & BEVRAGES
      </p>
      <p className="para2">
        PETROCHEMICAL & REFINERIES<span className="textC">|</span>SOLAR
        <span className="textC">|</span>BUILDING
        <span className="textC">|</span>HVAC<span className="textC">|</span>FIRE
        FIGHTING<span className="textC">|</span>AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
}

export default ComponentB1;