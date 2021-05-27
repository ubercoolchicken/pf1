import * as React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header>
    <div>
      <div>
        <Link to="/">lalith x </Link>
      </div>
      <div>
        <nav>
          <Link to="/">work</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
