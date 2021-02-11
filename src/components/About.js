import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Kartik Sharma" },
    { id: 2, title: "Email:", text: "kartikkrishnasharmaa@gmail.com" },
    { id: 3, title: "Phone:", text: "1234567890" },
    { id: 4, title: "Linkedin", text: "cse_kartik_sharma" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/image.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              I'm passionate about quality code, best practices, clean and minimal interfaces, and performance. My key strength is in delivering highly responsive and very beautiful web apps.
              </div>
              <div className="about__info-p2">
              I love building Web Apps and I am continuously improving my skillsets.

On a daily basis, I work on complex front-end projects with up-to-date languages and technologies. While I enjoy experimenting with new frameworks and libraries, I understand the importance of placing focus on the end goal: delivering a beautiful, functional product to the user/client.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
