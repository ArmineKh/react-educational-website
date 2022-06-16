import React from 'react';

import { Container, Row, Col } from "reactstrap";
import "./features.css";

import { FeatureData  } from '../../assests/data';

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item) => (
            <Col lg="4" md="6" key={item.id}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features;