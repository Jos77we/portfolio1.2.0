import "./App.css";
import pic1 from "./images/Component 1.png";
import pic2 from "./images/onecell-bg.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="top-header">
        <div className="top-align">
          <div className="logo">
            <img src={pic2} alt="logo" height="70px" width="70px" />
            {/* <p style={{fontSize:'0.8rem'}} >ONECELL</p> */}
          </div>
          <div className="top-items">
            <p>
              <Link to="/" style={{ color: "red", textDecorationLine: "none" }}>
                Home
              </Link>
            </p>
            <p>
              <Link
                to="/resume"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                Resume
              </Link>
            </p>
            <p>
              <Link
                to="/skills"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                Skills
              </Link>
            </p>
            <p>
              <Link
                to="/product"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                Product
              </Link>
            </p>
            <p style={{color:'white'}}>Contact</p>
          </div>
        </div>
        <div
          style={{
            height: "2px",
            width: "95%",
            backgroundColor: "black",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "4px",
          }}
        ></div>
        <div className="box-item">
          <div className="content-box">
            <div style={{ height: "60%", marginTop: "15%" }}>
              <p style={{ fontSize: "0.95rem" }}>WELCOME TO MY WORLD</p>
              <p style={{ fontSize: "1.95rem", maxWidth: "350px" }}>
                Hi, I am <span style={{ color: "red" }}>Joseph Maina</span>, a
                DevOps Developer
              </p>
              <p style={{ fontSize: "0.7rem", maxWidth: "70%" }}>
                Microscopes with high magnification lenses were used to offer a
                glimpse into the microscopic world of organisms proving to be a
                crucial tool when it comes to analysis and exploring microscopic
                organisms.{" "}
              </p>
            </div>
            <div className="social-box"></div>
          </div>
          <div className="pic-box">
            <img
              src={pic1}
              alt="developer"
              height="400px"
              width="450px"
              style={{ padding: "50px 0px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
