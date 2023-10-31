import React from "react";
import { CheckCircle } from "react-feather";

const SongTemplete = ({
  templeteData,
  uploadtemplete,
  isTemplete,
  adminTemFile,
}) => {
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
              <div className="normal">
                <div className="justify-content-center row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label>
                        Templete Type
                        <span class="text-danger">*</span>
                      </label>
                      <select className="form-control">
                        <option>--- Select Templete---</option>
                        <option value="1">Intro-Middle-Outro</option>
                        <option value="2">Intro-Outro</option>
                        <option value="3">Middle-Outro</option>
                        <option value="4">Intro-Middle</option>
                        <option value="5">Intro</option>
                        <option value="6">Outro</option>
                        <option value="7">Middle</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                          <label for="file" className="dz-message needsclick">
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
                                    <CheckCircle color="green" size="30" />
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
                          <label for="file" className="dz-message needsclick">
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
                                    <CheckCircle color="green" size="30" />
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

                  <div
                    className={
                      templeteData === "1" && templeteData === "3"
                        ? "col-md-4 "
                        : "d-none"
                    }
                  >
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

                  <div
                    className={
                      templeteData === "1" && templeteData === "3"
                        ? "col-md-4 "
                        : "d-none"
                    }
                  >
                    <div class="form-group">
                      <label>
                        Middle End
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongTemplete;
