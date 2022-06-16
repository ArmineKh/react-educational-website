import React from 'react';
import { CourseCard } from '../index';
import { Container, Row, Col } from "reactstrap";
import { coursesData } from '../../assests/data.js';
import "./courses.css";

const Courses = () => {
  return (
    <section id='courses'>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6"  key={item.id}>
              <CourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Courses