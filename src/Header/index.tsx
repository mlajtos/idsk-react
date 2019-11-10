import React from "react";

import SlovenskoSK from "./SlovenskoSK";

const Header = ({ children }: { children: React.ReactNode }) => (
  <header className="idsk-header" role="banner">
    <div className="idsk-header__container govuk-width-container">
      <div className="idsk-header__logo">
        <a href="/" className="idsk-header__link idsk-header__link--homepage">
          <span className="idsk-header__logotype">
            <SlovenskoSK />
          </span>
          <span className="idsk-header__product-name">
            {children}
          </span>
        </a>
      </div>
    </div>
  </header>
);

export default Header;