import * as React from "react";
import Header from "./header.js";
import Footer from "./footer.js";

import { container } from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={container}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
