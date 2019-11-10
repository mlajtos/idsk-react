import React from "react";

import UPVII from "./UPVII";

const Footer = () => (
  <footer className="idsk-footer " role="contentinfo">
    <div className="govuk-width-container ">
      <div className="idsk-footer__meta">
        <div className="idsk-footer__meta-item">
          <a
            className="idsk-footer__link"
            href="https://www.vicepremier.gov.sk/"
          >
            <UPVII />
          </a>
        </div>
        <div className="idsk-footer__meta-item idsk-footer__meta-item--grow">
          <span className="idsk-footer__licence-description">
            Prevádzkovateľom služby je Úrad podpredsedu vlády SR pre investície a informatizáciu.<br />
            Vytvorené v súlade s Jednotným dizajn manuálom elektronických služieb.
        </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;