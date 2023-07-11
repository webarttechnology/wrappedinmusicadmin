import React from "react";
import { useState } from "react";
import * as API from "../api/index";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Select from "react-dropdown-select";
import { header } from "../schemas/Validation";
import { toast } from "react-toastify";
const initialData = {
  name: "",
  category_id: "",
  subcategory_id: "2",
  music_file: "",
  description: "",
};

const AddScript = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [imageData, setImageData] = useState("");
  const [catagoriId, setCatagoriId] = useState("");
  const [catagoriData, setCatagoriData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataArry, setDataArry] = useState([]);
  const [moodArry, setMoodArry] = useState([]);
  const [tagArry, setTagArry] = useState([]);

  const onChaeckBox = async (idData, moodTag) => {
    moodArry.includes(moodTag) == false
      ? moodArry.push(moodTag)
      : delete moodArry[moodArry.indexOf(moodTag)];
    setTagArry(moodArry);
    setIsOpen(false);
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

  const moodTegSearch = async (e) => {
    try {
      const reqObj = {
        category_id: catagoriId,
        search_term: e.target.value,
      };
      console.log("reqObj", reqObj);
      const response = await API.moodTagSearchApi(reqObj, header);
      console.log("responseSSSSSS", response);
      if (response.data.success === 1) {
        setSearchData(response.data.data);
      }
    } catch (error) {}
  };

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const add_subcatagori = async () => {
    setIsLoading(true);
    const subArry = [];
    subArry.push(formData.subcategory_id);
    console.log("subArry", subArry);
    try {
      const reqObj = {
        name: formData.name,
        category_id: catagoriId,
        subcategory_id: catagoriId === "3" ? dataArry : subArry,
        description: formData.description,
      };
      console.log("reqObj", reqObj);
      const response = await API.add_script(reqObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        setIsLoading(false);
        toast(response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          type: "success",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/script-list");
      } else {
        setIsLoading(false);
      }
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

  console.log(tagArry);
  return (
    <>
      <div class="col-lg-12 layout-spacing">
        <div class="statbox widget box box-shadow mb-4">
          <div class="widget-header">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4>Add Script</h4>
              </div>
            </div>
          </div>
          <div class="widget-content widget-content-area">
            <div className="row">
              <div className="normal">
                <div className="row">
                  <div className="col-md-9">
                    <div className="row borderUS">
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
                                onFocus={() => setIsOpen(true)}
                                //onChange={moodTegSearch}
                                className="form-control"
                                placeholder="Search Here"
                              />
                              {isOpen ? (
                                <div className="dropdownW">
                                  <span
                                    className="dropClose"
                                    onClick={closeModal}
                                  >
                                    <i class="bi bi-x-square"></i>
                                  </span>
                                  <ul>
                                    {searchData.map((item, index) => (
                                      <li key={index}>
                                        <label>
                                          <input
                                            type="checkbox"
                                            defaultChecked={
                                              dataArry.includes(item.id)
                                                ? true
                                                : false
                                            }
                                            onChange={() =>
                                              onChaeckBox(item.id, item.name)
                                            }
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
                      <div className="col-md-12 d-none">
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
                              <label
                                for="file"
                                className="dz-message needsclick"
                              >
                                <div class="icon dripicons dripicons-browser-upload"></div>{" "}
                                <form encType="multipart/form-data">
                                  <span class="dz-button">
                                    Upload files here.
                                  </span>
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
                  <div className="col-md-3">
                    <h6>Mood Tag</h6>
                    <ul className="chooesTeg">
                      {tagArry.map((item, key) => {
                        return <li key={key}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="widget-footer">
            {isLoading ? (
              <button disabled type="reset" class="btn btn-info mr-2">
                Loading...
              </button>
            ) : (
              <button
                onClick={add_subcatagori}
                type="reset"
                class="btn btn-success mr-2"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddScript;
