import React, { useState, useEffect } from "react";
import "../CSS/resources.css";
import Logo from "../Images/logo.svg";
import http from "../Axiosconfig/axios_settings";
import urls from "../Routes.json";
import Resource from "../Components/Resource";
import { Spinner } from "react-bootstrap";

const Resources = () => {
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState([]);
  useEffect(() => {
    loadResources();
  }, []);
  const loadResources = async () => {
    const { data } = await http.get(urls.getResources);
    console.log(data);
    let resources = [];
    for (let a = 0; a < data.length; a++) {
      resources.push(<Resource data={data[a]} />);
    }
    setRender(resources);
    setLoading(false);
  };
  return (
    <React.Fragment>
      <div class="headerresource">
        <div class="logo-container-resource">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div class="nav-resource">
          <ul class="nav-links-resource">
            <li>
              <a class="nav-link-resource" href={urls.baseURL + "/upload"}>
                <p class="nonButton-resource">Upload</p>
              </a>
            </li>
            <li>
              <button class="view-resource">
                <a href={urls.baseURL + "/resources"}>View</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr class="linetop-resource" />
      <section class="content-resource">
        <section class="title">
          <h1 class="recentUpload-resource">Recently Uploaded</h1>
          <br></br>
          <h3 class="subTitle-resource">
            Click "Open Resources" to access the resources
          </h3>
        </section>
        <br></br>
        <br></br>
        {loading && (
          <Spinner
            style={{ marginTop: "20%", marginLeft: "50%" }}
            animation="border"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {!loading && (
          <section class="resources">
            <ul class="resourceList">{render}</ul>
          </section>
        )}
      </section>

      <hr class="linefoot-resource" />

      <div class="footer-resource">
        <h4 class="reserved-resource">
          © 2020 Indo-Edu, Inc. All rights reserved.
        </h4>
        <img class="logofoot-resource" src={Logo} alt="Logo" />
      </div>
    </React.Fragment>
  );
};

export default Resources;
