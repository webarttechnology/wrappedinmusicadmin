import React, { useState } from "react";
import { CheckCircle } from "react-feather";

const SongTemplete = ({ uploadtemplete }) => {
  // ? Templete Type
  const [isTemplete, setIsTemplete] = useState(false);

  const [templeteData, setTempleteData] = useState("");
  const [adminTemFile, setAdminTemFile] = useState("");

  const templeteType = (e) => {
    const typeData = e.target.value;
    setIsTemplete(true);
    if (typeData === "1") {
      setTempleteData("1");
    } else if (typeData === "2") {
      setTempleteData("2");
    } else if (typeData === "3") {
      setTempleteData("3");
    } else if (typeData === "4") {
      setTempleteData("4");
    } else if (typeData === "5") {
      setTempleteData("5");
    } else if (typeData === "6") {
      setTempleteData("6");
    } else if (typeData === "7") {
      setTempleteData("7");
    } else if (typeData === "8") {
      setTempleteData("8");
    }
    console.log("typeData", typeData);
  };
  return (
    <>
      <div class="col-lg-12 layout-spacing">
        <div class="statbox widget box box-shadow mb-4">
          <div class="widget-header">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4>Add Templete</h4>
              </div>
            </div>
          </div>

          <div class="widget-content widget-content-area">
            <div className="row">
              <div className="col-md-9 borderUS">
                <div className="normal">
                  <div className="justify-content-center row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Templete Type
                          <span class="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          onChange={templeteType}
                        >
                          <option>--- Select Templete---</option>
                          <option value="8">Happy birthday</option>
                          <option value="1">Intro-Middle-Outro</option>
                          <option value="2">Intro-Outro</option>
                          {/* <option value="3">Middle-Outro</option>
                          <option value="4">Intro-Middle</option>
                          <option value="5">Intro</option>
                          <option value="6">Outro</option>
                          <option value="7">Middle</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                  {templeteData === "1" || templeteData === "3" ? (
                    <>
                      <div className="row">
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Templete
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Templete files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      onChange={uploadtemplete}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Sample
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Sample files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      // onChange={imageUploadingThum}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Middle Start
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter here"
                              // value={formData.second}
                              name="start"
                              // onChange={handalerChanges}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Message duration
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter here"
                              //value={formData.second}
                              name="end"
                              //onChange={handalerChanges}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Duration Of Song
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter here"
                              //value={formData.second}
                              name="end"
                              //onChange={handalerChanges}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <button class="btn btn-info mr-2">
                            Add Templete
                          </button>
                        </div>
                      </div>
                    </>
                  ) : templeteData === "2" || templeteData === "8" ? (
                    <>
                      <div className="row">
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Templete
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Templete files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      onChange={uploadtemplete}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Sample
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Sample files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      // onChange={imageUploadingThum}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Duration Of Song
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter here"
                              //value={formData.second}
                              name="end"
                              //onChange={handalerChanges}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button class="btn btn-info mr-2">
                            Add Templete
                          </button>
                        </div>
                      </div>
                    </>
                  ) : templeteData === "4" || templeteData === "7" ? (
                    <>
                      <div className="row">
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Templete
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Templete files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      onChange={uploadtemplete}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Sample
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Sample files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      // onChange={imageUploadingThum}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Middle Start
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter here"
                              // value={formData.second}
                              name="start"
                              // onChange={handalerChanges}
                            />
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Message duration
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter here"
                              //value={formData.second}
                              name="end"
                              //onChange={handalerChanges}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button class="btn btn-info mr-2">
                            Add Templete
                          </button>
                        </div>
                      </div>
                    </>
                  ) : templeteData === "5" ? (
                    ""
                  ) : templeteData === "6" ? (
                    <>
                      <div className="row">
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Templete
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Templete files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      onChange={uploadtemplete}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Upload Sample
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
                                    <span
                                      class={
                                        adminTemFile
                                          ? "dz-button text-success"
                                          : "dz-button"
                                      }
                                    >
                                      {adminTemFile ? (
                                        <span className="d-inline-block mr-2">
                                          <CheckCircle
                                            color="green"
                                            size="30"
                                          />
                                        </span>
                                      ) : (
                                        ""
                                      )}

                                      {adminTemFile
                                        ? "File Uploaded successfully"
                                        : "Upload Sample files here"}
                                    </span>
                                    <input
                                      hidden
                                      id="file"
                                      type="file"
                                      // onChange={imageUploadingThum}
                                      class="image-preview-filepond"
                                    />
                                  </form>
                                </label>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div class="form-group">
                            <label>
                              Duration Of Song
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter here"
                              //value={formData.second}
                              name="end"
                              //onChange={handalerChanges}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button class="btn btn-info mr-2">
                            Add Templete
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  {/* <div className="row">
                  <div className="col-md-12">
                    <button class="btn btn-success mr-2">Confirm</button>
                  </div>
                </div> */}
                </div>
              </div>
              <div className="col-md-3">
                <h5 className="mb-3">Templete type Added</h5>
                <ul className="typeoftemplete">
                  <li>
                    <CheckCircle color="green" size="20" />
                    <span>Intro-Middle-Outro</span>
                  </li>
                  <li>
                    <CheckCircle color="green" size="20" />
                    <span>Intro-Outro</span>
                  </li>
                  <li>
                    <CheckCircle color="green" size="20" />
                    <span>Happy birthday</span>
                  </li>
                  {/* <li>
                    <CheckCircle color="green" size="20" />
                    <span>Intro-Middle</span>
                  </li>
                  <li>
                    <CheckCircle color="green" size="20" />
                    <span>Intro</span>
                  </li>
                  <li>
                    <CheckCircle color="green" size="20" />
                    <span>Outro</span>
                  </li>
                  <li>
                    <CheckCircle color="green" size="20" />
                    <span>Middle</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongTemplete;
