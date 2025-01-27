import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 item text">
              <h3>Services</h3>
              <ul>
                <li>
                  <p>Full Stack</p>
                </li>
                <li>
                  <p>Back-End</p>
                </li>
                <li>
                  <p>Front-End</p>
                </li>
              </ul>
            </div>

            <div className="col-md-8 item text">
              <h3>Othman Al-Moussawel</h3>
              <p>
                Innovative Full Stack Developer with 4+ years of experience in
                developing and maintaining web applications using various APIs &
                technologies. Proven track record in improving user engagement
                and application performance. Skilled in collaborating with
                cross-functional teams, integrating third-party services and
                APIs, and optimizing web applications for performance.
              </p>
            </div>
            <div className="col item social">
              <a href="https://github.com/osman-developer">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/in/othman-al-moussawel-b05451194/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
          <p className="copyright">Othman Al-Moussawel © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
