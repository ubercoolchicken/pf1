import * as React from "react";
import Layout from "../components/layout";

function Contact(props) {
  return (
    <Layout>
      <div>
        <h1>
          Working on something
          <br />
          you think I'd love?
        </h1>
        <button data-inline="true">
          get in touch <span class="arrow-right icon"></span>
        </button>
        <p>+91 7824 833 002</p>
        <p>lalithkishore@live.in</p>
      </div>
    </Layout>
  );
}

export default Contact;
