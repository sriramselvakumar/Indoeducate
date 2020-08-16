import React, { useState } from "react";
import "../CSS/upload.css";
import Logo from "../Images/logo.svg";
import Logouploadpage from "../Images/logo-uploadpage.svg";
import { Form } from "react-bootstrap";
import http from "../Axiosconfig/axios_settings";
import urls from "../Routes.json";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [link, setLink] = useState("");

  const onSubmit = async () => {
    window.location = "/option";
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("link", link);
    formdata.append("resource", file);
    if (file !== "") {
      await http.post(urls.postResource, formdata);
      return;
    }
    await http.post(urls.postwoFile, { title, link });
  };
  return (
    <React.Fragment>
      <div class="header-uploadpage">
        <div class="logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div class="nav-uploadpage">
          <ul class="nav-links-uploadpage">
            <li>
              <button class="upload-uploadpage">
                <a href="#">Upload</a>
              </button>
            </li>
            <li>
              <a class="nav-link-uploadpage" href="#">
                <p class="nonButton-uploadpage">View</p>
              </a>
            </li>
            <li>
              <a class="nav-link-uploadpage" href="#">
                <p class="nonButton-uploadpage">Contact Us</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="linetop-uploadpage" />
      <section class="content-uploadpage">
        <section class="title-uploadpage">
          <h3 class="subTitle-uploadpage">
            <span class="col-uploadpage">Upload</span> any resources that other
            users might require
          </h3>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section class="dragDrop-uploadpage">
          <div id="content-uploadpage">
            <label class="file-up" for="file"></label>
            <input
              onChange={(event) => setFile(event.target.files[0])}
              type="file"
              id="file"
              name="file"
              multiple
            />
            <div>
              <button onClick={onSubmit} class="uploadbtn">
                Upload
              </button>
            </div>
          </div>
          <div class="logo-container-uploadpage">
            <img class="svg" src={Logouploadpage} alt="Logo" />
          </div>
        </section>
        <Form.Group>
          <Form.Control
            onChange={(event) => setTitle(event.target.value)}
            style={{ marginTop: "15px", marginLeft: "3%" }}
            size="lg"
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>
        <section class="links-uploadpage">
          <form>
            <input
              onChange={(event) => setLink(event.target.value)}
              class="onlineSources-uploadpage"
              placeholder="Enter link to video resources or to online documents...."
            ></input>
          </form>
        </section>
      </section>

      <hr class="linefoot-uploadpage" />

      <div class="footer-uploadpage">
        <h4 class="reserved-uploadpage">
          © 2020 Indo-Edu, Inc. All rights reserved.
        </h4>
        <img class="logofoot-uploadpage" src={Logo} alt="Logo" />
      </div>
    </React.Fragment>
  );
};

export default Upload;
