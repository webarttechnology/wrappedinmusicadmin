import React from "react";
import { Edit2 } from "react-feather";
import * as API from "../api/index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { header } from "../schemas/Validation";
import { toast } from "react-toastify";
import { IMG } from "../api/constant";
const Song = () => {
  const [data, setData] = useState([]);
  const commonDataTable = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.song_listing(header);
      console.log("response", response);
      setData(response.data.data);
    } catch (error) {}
  };

  const userDelete = async (songId) => {
    try {
      const response = await API.song_delete(songId, header);
      if (response.data.success === 1) {
        commonDataTable();
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
      }
    } catch (error) {}
  };

  useEffect(() => {
    commonDataTable();
  }, []);

  return (
    <>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div class="widget ecommerce-table">
          <div class="widget-heading">
            <div class="row">
              <div class="col-xl-10 col-md-10 col-sm-10 col-12">
                <h5 class="">List of Music </h5>
              </div>
              <div className="col-md-2 text-lg-right">
                <Link
                  to="/add-music"
                  type="button"
                  class="btn btn-success font-20"
                >
                  <i class="las la-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="widget-content">
            <div class="table-responsive">
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>
                      <div class="th-content">ID</div>
                    </th>
                    <th>
                      <div class="th-content"> Title</div>
                    </th>
                    <th>
                      <div class="th-content">Details</div>
                    </th>
                    <th>
                      <div class="th-content">Genre</div>
                    </th>
                    <th>
                      <div class="th-content">Occasion</div>
                    </th>
                    <th>
                      <div class="th-content">Mood</div>
                    </th>
                    <th>
                      <div class="th-content">Amount</div>
                    </th>
                    <th>
                      <div class="th-content">File</div>
                    </th>
                    <th>
                      <div class="th-content">Thumbnail</div>
                    </th>
                    <th>
                      <div class="th-content">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <h4 className="text-center">No Record found</h4>
                  ) : (
                    data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1} </td>
                        <td width="150"> {item.name}</td>
                        <td width="400">
                          <p>{item.description}</p>
                        </td>
                        <td width="50">
                          {item.Songcategories[0].category.name === "Genre" ? (
                            <ul className="p-0 moodTag">
                              {item.Songcategories.map((catItem, index) => (
                                <li key={index}>
                                  {index + 1}) {catItem.subcategory.name}
                                </li>
                              ))}
                            </ul>
                          ) : undefined}
                        </td>
                        <td width="50">
                          {item.Songcategories[0].category.name === "Genre" ? (
                            <ul className="p-0 moodTag">
                              {item.Songcategories.map((catItem, index) => (
                                <li key={index}>
                                  {index + 1}) {catItem.subcategory.name}
                                </li>
                              ))}
                            </ul>
                          ) : undefined}
                        </td>
                        <td width="200">
                          <ul className="p-0 moodTag">
                            {item.Songcategories.map((catItem, index) => (
                              <li key={index}>
                                {index + 1}) {catItem.subcategory.name}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td>$ {item.amount}</td>
                        <td>
                          {item.music_file === "" ? (
                            "N/A"
                          ) : item.music_file ? (
                            <i class="bi bi-music-note-beamed musicFile"></i>
                          ) : (
                            ""
                          )}
                        </td>
                        <td>
                          <img className="w-50" src={IMG + item.image} />
                        </td>
                        <td width="80">
                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              //onClick={() => userStatus(item.id)}
                              class="align-items-center mr-2 btn btn-info d-flex font-20 px-2"
                            >
                              <Edit2 size={20} />
                            </button>
                            <button
                              type="button"
                              onClick={() => userDelete(item.id)}
                              class="align-items-center btn btn-danger d-flex font-20 px-2"
                            >
                              <i class="las la-times-circle"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
