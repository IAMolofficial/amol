import React from "react";
import "./academics.css";
const Academics = () => {
  return (
    <section className="academics section" id="academics">
      <h2 className="section__title">Academics</h2>
      <span className="section__subtitle">
        "Exploring My Passions Through Academics"
      </span>
      <div className="academics__container container">
        <div className="academics__tabs">
          <div className="academics__button academics__active button--flex">
            <i className="uil uil-graduation-cap academics__icon"></i> Education
          </div>
        </div>
        <div className="academics__sections">
          <div className="academics__content ">
            <div className="academics__data">
              <div>
                <span className="academics__rounder"></span>
                <span className="academics__line"></span>
              </div>
              <div>
                <h3 className="academics__title">B.Tech Plastic Technology</h3>
                <span className="academics__subtitle">
                  University Institute of Chemical Technology - Jalgaon
                </span>
                <div className="academics__calender">
                  <i class="uil uil-calendar-alt"></i>2016 - 2022
                </div>
              </div>
            </div>
            <div className="academics__data">
              <div>
                <span className="academics__rounder"></span>
                <span className="academics__line"></span>
              </div>
              <div>
                <h3 className="academics__title">HSC</h3>
                <span className="academics__subtitle">
                  Moolaji Jaitha College - Jalgaon
                </span>
                <div className="academics__calender">
                  <i class="uil uil-calendar-alt"></i>2014 - 2016
                </div>
              </div>
            </div>
            <div className="academics__data">
              <div>
                <span className="academics__rounder"></span>
                <span className="academics__line"></span>
              </div>
              <div>
                <h3 className="academics__title">SSC</h3>
                <span className="academics__subtitle">
                  Sheth Lalji Narayanji Sarvajanik Vidyalaya - Jalgaon
                </span>
                <div className="academics__calender">
                  <i class="uil uil-calendar-alt"></i>2013 - 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
