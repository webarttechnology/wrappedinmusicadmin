import React from "react";
import { useState } from "react";
import * as API from "../api/index";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Select from "react-dropdown-select";
import { header } from "../schemas/Validation";
const initialData = {
  name: "",
  category_id: "",
  subcategory_id: "2",
  music_file: "",
  description: "",
};

const AddSong = () => {
  const navigate = useNavigate();
  const [checkBox, setCheckBox] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [imageData, setImageData] = useState("");
  const [catagoriId, setCatagoriId] = useState("");
  const [catagoriData, setCatagoriData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataArry, setDataArry] = useState([]);

  const onChaeckBox = (idData) => {
    // setCheckBox(!checkBox);
    // setMoodId(idData);
    dataArry.includes(idData) == false
      ? dataArry.push(idData)
      : delete dataArry[dataArry.indexOf(idData)];
    console.log("dataArry", dataArry);
  };

  const focuseHandaler = () => {
    setIsOpen(true);
  };

  const imageUploading = (e) => {
    let images = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };

  const get_categoryList = async () => {
    try {
      const response = await API.get_subCategory(header);
      console.log("response", response);
      setCatagoriData(response.data.data);
    } catch (error) {}
  };

  const handalerChangesCata = async (e) => {
    setCatagoriId(e.target.value);
    try {
      const response = await API.subCategoryId(e.target.value, header);
      console.log("responseSSS", response);
      setSearchData(response.data.data);
    } catch (error) {}
  };

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const add_subcatagori = async () => {
    try {
      const reqObj = {
        name: formData.name,
        category_id: catagoriId,
        subcategory_id: catagoriId === "3" ? dataArry : formData.subcategory_id,
        description: formData.description,
        music_file: imageData,
      };
      console.log("reqObj", reqObj);
      const response = await API.add_songs(reqObj, header);
      console.log("response", response);
      // if (response.data.success === 1) {
      //   navigate("/categories");
      // }
    } catch (error) {}
  };

  const closeModal = () => {
    setIsOpen(false);
    //setSearchData("");
  };

  // const btnDisabal = !formData.name || !formData.details || !imageData;

  useEffect(() => {
    get_categoryList();
  }, []);

  return (
    <>
      <div class="col-lg-12 layout-spacing">
        <div class="statbox widget box box-shadow mb-4">
          <div class="widget-header">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4>Add Music</h4>
              </div>
            </div>
          </div>
          <div class="widget-content widget-content-area">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div class="form-group">
                  <label>
                    Title
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter here"
                    value={formData.name}
                    name="name"
                    onChange={handalerChanges}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label>
                    Choose category
                    <span class="text-danger">*</span>
                  </label>
                  <select
                    onChange={handalerChangesCata}
                    class="form-control"
                    name="category_id"
                  >
                    <option>--- Select ---</option>
                    {catagoriData.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label>
                    Sub-category
                    <span class="text-danger">*</span>
                  </label>
                  {catagoriId === "3" ? (
                    <>
                      <input
                        type="text"
                        onFocus={focuseHandaler}
                        className="form-control"
                        placeholder="Search Here"
                      />
                      {isOpen ? (
                        <div className="dropdown">
                          <span className="dropClose" onClick={closeModal}>
                            <i class="bi bi-x-square"></i>
                          </span>
                          <ul>
                            {searchData.map((item, index) => (
                              <li key={index}>
                                <label>
                                  <input
                                    type="checkbox"
                                    onChange={() => onChaeckBox(item.id)}
                                    className="mr-2"
                                  />
                                  {item.name}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <select
                      onChange={handalerChanges}
                      class="form-control"
                      name="subcategory_id"
                      //value={formData.subcategory_id}
                    >
                      <option>--- Select ---</option>
                      {searchData.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div class="form-group">
                  <label>
                    File
                    <span class="text-danger">*</span>
                  </label>
                  <div id="dropzone">
                    <form
                      encType="multipart/form-data"
                      action="/upload"
                      class="dropzone needsclick dz-clickable"
                    >
                      <label for="file" className="dz-message needsclick">
                        <div class="icon dripicons dripicons-browser-upload"></div>{" "}
                        <form encType="multipart/form-data">
                          <span class="dz-button">Upload files here.</span>
                          <br />
                          <span class="note needsclick">
                            (This is a Uploadzone. Browse your files)
                          </span>

                          <input
                            hidden
                            id="file"
                            type="file"
                            onChange={imageUploading}
                            class="image-preview-filepond"
                          />
                        </form>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div class="form-group">
                  <label>
                    Description
                    <span class="text-danger">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    name="description"
                    onChange={handalerChanges}
                    placeholder="Enter hare"
                    class="form-control"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="widget-footer text-right">
            <button
              //disabled={btnDisabal ? true : false}
              onClick={add_subcatagori}
              type="reset"
              class="btn btn-success mr-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSong;
