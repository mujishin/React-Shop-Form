import Header from '../Components/Header'
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { upload } from "@testing-library/user-event/dist/upload";
import swal from "sweetalert";
// import IncDec from "../Pages/InDec";

export const InternationalOrders = (props) => {
  const form = useRef();

  const initialValues = { name: "", email: "", url: "", image: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [selectedFile, setselectedFile] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [urlone, setUrlone] = useState("");
  const [urltwo, setUrltwo] = useState("");
  const [urlout, setUrlout] = useState("");
  const [urloutone, setUrloutone] = useState("");
  const [urlouttwo, setUrlouttwo] = useState("");
  const [qty, setQty] = useState("");
  const [qtyone, setQtyone] = useState("");
  const [qtytwo, setqtytwo] = useState("");
  const [qtyout, setqtyout] = useState("");
  const [qtyoutone, setqtyoutone] = useState("");
  const [qtyouttwo, setqtyouttwo] = useState("");


  const [image, setImage] = useState();
  let formData = new FormData();
  const headers = {
    "Content-type": "multipart/form-data",
  };

  const onFileChange = (e) => {
    console.log("image", e.target.files[0]);
    formData.append("image", e.target.files[0]);
    if (e.traget && e.traget.files[0]) {
    }
  };
  const submitData = (e) => {
    e.preventDefault();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("url", url);
    formData.append("urlone", urlone);
    formData.append("urltwo", urltwo);
    formData.append("urlout", urlout);
    formData.append("urloutone", urloutone);
    formData.append("urlouttwo", urlouttwo);
    formData.append("qty", qty);
    formData.append("qtyone", qtyone);
    formData.append("qtytwo", qtytwo);
    formData.append("qtyout", qtyout);
    formData.append("qtyoutone", qtyoutone);
    formData.append("qtyouttwo", qtyouttwo);
    formData.append("image", image);
    console.log(formData);
    console.log("form Data", formData.get("image"));
    axios({
      method: "post",
      url: "https://cuion.website/admin/api/adds",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    swal({
      title: "Thank You ",
      text: "We will get back to You soon",
      icon: "success",
      button: "Thank You",
    });
  };


  return (
    <>
    <Header />
    
    <div class="row">
        <div class="form-section col-md-6 col-sm-12 tab-100">
          <div id="show-login" class="from-top wrapper">
            <div class="signup signup-heading">
              <h2>International Order</h2>
            </div>

            <form method="post">
              <div class="signup form-field">
                <label for="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div class="form-field">
                <label for="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@site.com"
                />
              </div>

              <div class="signup form-field">
                <label for="name">URL from other Third-party Vendors</label>

                <input
                  value={urlout}
                  onChange={(e) => {
                    setUrlout(e.target.value);
                  }}
                  type="text"
                  name="urlout"
                  id="name"
                  placeholder="Paste The URL"
                />
                <select  onChange={(e) => {
                    setqtyout(e.target.value);
                  }} className="qty_area" name="" id="">
                    <option value="Qty"
                   >QTY</option>
                  <option value="1"
                   >1</option>
                  <option value="2"
                  >2</option>
                  <option value="3"
                   >3</option>
                  </select>
                {/* <IncDec/> */}
                <a
                  class="btn btn-add_more"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i class="fa-sharp fa-solid fa-plus"></i>
                </a>

                <div class="collapse form-field" id="collapseExample">
                  <input value={urloutone}
                  onChange={(e) => {
                    setUrloutone(e.target.value);
                  }}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Paste The URL"
                  />
                   <select  onChange={(e) => {
                    setqtyoutone(e.target.value);
                  }} className="qty_area" name="" id="">
                    <option value="Qty"
                   >QTY</option>
                  <option value="1"
                   >1</option>
                  <option value="2"
                  >2</option>
                  <option value="3"
                   >3</option>
                  </select>
                </div>
                <div class="collapse form-field" id="collapseExample">
                  <input value={urlouttwo}
                  onChange={(e) => {
                    setUrlouttwo(e.target.value);
                  }}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Paste The URL"
                  />
                  <select  onChange={(e) => {
                    setqtyouttwo(e.target.value);
                  }} className="qty_area" name="" id="">
                    <option value="Qty"
                   >QTY</option>
                  <option value="1"
                  >1</option>
                  <option value="2"
                  >2</option>
                  <option value="3"
                  >3</option>
                  </select>
                </div>
              
              </div>

              <div class="signup form-field">
                <label for="name">URL from Shop India Mart</label>
                <input
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Paste The URL"
                />
                 <select  onChange={(e) => {
                    setQty(e.target.value);
                  }} className="qty_area" name="" id="">
                    <option value="Qty"
                   >QTY</option>
                  <option value="1"
                   >1</option>
                  <option value="2"
                  >2</option>
                  <option value="3"
                   >3</option>
                  </select>
                {/* <IncDec/> */}
                <a
                  class="btn btn-add_more"
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i class="fa-sharp fa-solid fa-plus"></i>
                </a>

                <div class="collapse form-field" id="collapseExample1">
                  <input value={urlone}
                  onChange={(e) => {
                    setUrlone(e.target.value);
                  }}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Paste The URL"
                  />
                   <select  onChange={(e) => {
                    setQtyone(e.target.value);
                  }} className="qty_area" name="" id="">
                    <option value="Qty"
                   >QTY</option>
                  <option value="1"
                   >1</option>
                  <option value="2"
                  >2</option>
                  <option value="3"
                   >3</option>
                  </select>
                </div>
                <div class="collapse form-field" id="collapseExample1">
                  <input value={urltwo}
                  onChange={(e) => {
                    setUrltwo(e.target.value);
                  }}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Paste The URL"
                  />
                   <select  onChange={(e) => {
                    setqtytwo(e.target.value);
                  }} className="qty_area" name="" id="">
                    <option value="Qty"
                   >QTY</option>
                  <option value="1"
                   >1</option>
                  <option value="2"
                  >2</option>
                  <option value="3"
                   >3</option>
                  </select>
                </div>
              </div>

              {/* <div class="form-field">
                <label for="upload">Please Upload Product Image</label>
                <input
                  value={image}
                  onChange={onFileChange}
                  type="file"
                  class="form-control file_upload"
                  id="inputGroupFile02"
                />
              </div> */}

              <div class="signup signup-submit">
                <button class="shine" onClick={submitData}>
                  Create Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <form action="" className="form_fields">
        <label className="form_labels">Name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="Name"
          type="text"
          placeholder="Name"
          required
        />
        <label className="form_labels">Phone</label>
        <textarea
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="phone "
          placeholder="Phone"
        ></textarea>
        <label className="form_labels">Email</label>
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="Enter your Mail"
        />
        <label className="form_labels">CV</label>
        <input
          value={image}
          onChange={onFileChange}
          name="image"
          type="file"
          placeholder="Location"
        />
        <button type="button" onClick={submitData} className="update_button">
          Update
        </button>
      </form> */}
      </>
  );
};

export default InternationalOrders;


