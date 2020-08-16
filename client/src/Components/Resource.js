import React, { useState, useEffect } from "react";

import urls from "../Routes.json";

const Resource = (props) => {
  const [render, setRender] = useState(null);
  useEffect(() => {
    loadResource();
  }, []);
  const loadResource = () => {
    const { link, file } = props.data;
    if (link === "" && file !== "") {
      setRender(
        <div class="column">
          <button class="linkSource">
            <a href={urls.getFile + file} download>
              Download Resource
            </a>
          </button>
        </div>
      );
    } else if ((link !== "" && file === "") || (link !== "" && file !== "")) {
      setRender(
        <div class="column">
          <button class="linkSource">
            <a href={link}>Open Resource</a>
          </button>
        </div>
      );
    } else {
      setRender(null);
    }
  };

  return (
    <li class="listItem-resource">
      <div class="row">
        <div class="column">
          <p class="resourcetitle">{props.data.title}</p>
        </div>
        {render}
      </div>
    </li>
  );
};

export default Resource;
