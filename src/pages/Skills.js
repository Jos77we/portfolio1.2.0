import React from "react";
import "./PageStyle.css";
import { Link } from "react-router-dom";
import { FaHtml5, FaRegFileCode } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaNodeJs, FaFigma, FaDocker } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoKubernetes } from "react-icons/bi";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { TbBrandAdobe } from "react-icons/tb";
import { RxSketchLogo } from "react-icons/rx";
import { BsDatabaseGear } from "react-icons/bs";
import { SiSelenium } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineDesignServices, MdManageHistory } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const Skills = () => {
  return (
    <div style={{ height: "100vh", display: "grid" }} className='skills-body'>
      <div
        style={{
          height: "70px",
          border: "1px solid red",
          marginTop: "10px",
          width: "98%",
          margin: "0px auto",
        }}
      >
        <p>
          <Link to="/" style={{ color: "red", textDecorationLine: "none" }}>
            Home
          </Link>
        </p>
      </div>
      <div
        style={{
          height: "80vh",
          margin: "0px auto 0px auto",
          display: "flex",
          columnGap: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: "98%",
        }}
      >
        <div className="skills-cont">
          <div style={{ height: "120px", width: "90%", display: "grid" }}>
            <div className="icon">
              <FaRegFileCode />
            </div>
            <p style={{ fontSize: "1.4rem", marginLeft: "10px" }}>Language</p>
          </div>
          <div style={{ height: "240px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                maxWidth: "220px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Experienced developer proficient in Java, JavaScript, SQL, HTML,
              and CSS with a strong foundation in creating dynamic and
              responsive web applications. I bring a comprehensive understanding
              of the software development life cycle with aim of crafting
              efficient and scalable code, designing user-friendly interfaces,
              and optimizing database performance.{" "}
            </p>
          </div>
          <div
            style={{
              height: "60px",
              display: "flex",
              columnGap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <FaHtml5 style={{ fontSize: "22px" }} />
            </div>
            <div>
              <IoLogoCss3 style={{ fontSize: "22px" }} />
            </div>
            <div>
              <IoLogoJavascript style={{ fontSize: "22px" }} />
            </div>
            <div>
              <FaJava style={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
        <div className="skills-cont">
          <div style={{ height: "120px", width: "90%" }}>
            <div className="icon">
              <GoProjectSymlink />
            </div>
            <p style={{ fontSize: "1.4rem", marginLeft: "10px" }}>Development</p>
          </div>
          <div style={{ height: "240px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                maxWidth: "220px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Being a skilled DevOps architect, I have mastered frameworks such
              as the MERN, SERN and JARS (Java react SQL). Working with MERN,
              SERN and JARS demonstrates my adaptation in implementing the
              sophisticated solutions that are highly fast paced and also
              scalable across different technological environments.
            </p>
          </div>
          <div
            style={{
              height: "60px",
              display: "flex",
              columnGap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <BiLogoMongodb style={{ fontSize: "22px" }} />
            </div>
            <div>
              <FaNodeJs style={{ fontSize: "22px" }} />
            </div>
            <div>
              <GrReactjs style={{ fontSize: "22px" }} />
            </div>
            <div>
              <GrMysql style={{ fontSize: "22px" }} />
            </div>
            <div>
              <FaJava style={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
        <div className="skills-cont">
          <div style={{ height: "120px", width: "90%" }}>
            <div className="icon">
              <MdOutlineDesignServices />
            </div>
            <p style={{ fontSize: "1.4rem", marginLeft: "10px" }}>UI/UX Design</p>
          </div>
          <div style={{ height: "240px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                maxWidth: "220px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {" "}
              UI/UX design focuses on improving the user experience by creating
              visually appealing and also intuitive designs. By using tools such
              as Adobe XD, Sketch and also Figma designers not only consider the
              aesthetics of UI but also aim to enable the smooth interactions
              with platforms and provide easy access while also maintaining a
              positive user experience.
            </p>
          </div>
          <div
            style={{
              height: "60px",
              display: "flex",
              columnGap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <FaFigma style={{ fontSize: "22px" }} />
            </div>
            <div>
              <TbBrandAdobe style={{ fontSize: "22px" }} />
            </div>
            <div>
              <RxSketchLogo style={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
        <div className="skills-cont">
          <div style={{ height: "120px", width: "90%" }}>
            <div className="icon">
              <MdManageHistory />
            </div>
            <p style={{ fontSize: "1.4rem", marginLeft: "10px" }}>Database Management</p>
          </div>
          <div style={{ height: "240px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                maxWidth: "220px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Expert in database creation, data insertion, and management.
              Proficient with MongoDB for flexible NoSQL solutions, ensuring
              seamless scalability. Skilled in SQL Server for robust relational
              database management. Adept at designing and implementing database
              solutions tailored to specific project requirements.
            </p>
          </div>
          <div
            style={{
              height: "60px",
              display: "flex",
              columnGap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <BsDatabaseGear style={{ fontSize: "22px" }} />
            </div>
            <div>
              <BiLogoMongodb style={{ fontSize: "22px" }} />
            </div>
            <div>
              <GrMysql style={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
        <div className="skills-cont">
          <div style={{ height: "120px", width: "90%" }}>
            <div className="icon">
              <AiOutlineDeploymentUnit />
            </div>
            <p style={{ fontSize: "1.4rem", marginLeft: "10px" }}>Deployment</p>
          </div>
          <div style={{ height: "240px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                maxWidth: "220px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Experienced in Docker, an application containerization and
              resource management tool. Familiar in managing scalable
              microservices using Kubernetes ND specialized in Selenium for
              automated testing, which guarantees maximum software quality.
              Skilled in the optimization of containerized workload for enhanced
              speed.
            </p>
          </div>
          <div
            style={{
              height: "60px",
              display: "flex",
              columnGap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <FaDocker style={{ fontSize: "22px" }} />
            </div>
            <div>
              <BiLogoKubernetes style={{ fontSize: "22px" }} />
            </div>
            <div>
              <SiSelenium style={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
