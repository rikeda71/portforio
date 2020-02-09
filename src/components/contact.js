import React from "react";
import Typography from "@material-ui/core/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Contact() {
  return (
    <div className="contact">
      <Typography variant="h6">
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> rikeda71 [at] gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "twitter"]} />{" "}
            <a href="https://twitter.com/ikechan0829">twitter</a>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "github"]} />{" "}
            <a href="https://github.com/s14t284">github</a>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
            <a href="https://www.instagram.com/iryuya/">instagram</a>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "facebook"]} />{" "}
            <a href="https://www.facebook.com/ryuya.ikeda.33">facebook</a>
          </li>
        </ul>
      </Typography>
    </div>
  );
}

export default Contact;
