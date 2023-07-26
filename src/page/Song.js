import React from "react";
import { Edit2 } from "react-feather";
import * as API from "../api/index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { header } from "../schemas/Validation";
import { toast } from "react-toastify";
import { IMG } from "../api/constant";
import Songtable from "./Songtable";
const Song = () => {
  const [data, setData] = useState([]);

  const orderDataTable = async (data) => {
    try {
      const response = await API.song_listing(data, header);
      console.log("response", response);
      setData(response.data.data);
    } catch (error) {}
  };

  const commonDataTable = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.song_listing(header);
      console.log("songList", response);
      setData(response.data.data);
      // response.data.data.map(async (item, index) => {
      //   const songResponse = await API.song_catagoriId(item.id, header);
      //   console.log("songResponse", songResponse);
      // });
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
            <ul
              class="nav nav-pills mb-4 mt-3  justify-content-center"
              id="rounded-corner-pills-icon-tab"
              role="tablist"
            >
              <li class="nav-item ml-2 mr-2" onClick={() => orderDataTable(1)}>
                <a
                  class="nav-link mb-2 active text-center"
                  id="rounded-corner-pills-icon-home-tab"
                  data-toggle="pill"
                  href="#rounded-corner-pills-icon-all"
                  role="tab"
                  aria-controls="rounded-corner-pills-icon-home"
                  aria-selected="true"
                >
                  <i class="bi bi-border-style mb-0"></i> All Orders
                </a>
              </li>
              <li class="nav-item ml-2 mr-2" onClick={() => orderDataTable(2)}>
                <a
                  class="nav-link mb-2 text-center"
                  id="rounded-corner-pills-icon-home-tab"
                  data-toggle="pill"
                  href="#rounded-corner-pills-icon-home"
                  role="tab"
                  aria-controls="rounded-corner-pills-icon-home"
                  aria-selected="true"
                >
                  <i class="las la-shopping-cart"></i> Pending Orders
                </a>
              </li>
              <li class="nav-item ml-2 mr-2" onClick={() => orderDataTable(3)}>
                <a
                  class="nav-link mb-2 text-center"
                  id="rounded-corner-pills-icon-about-tab"
                  data-toggle="pill"
                  href="#rounded-corner-pills-icon-about"
                  role="tab"
                  aria-controls="rounded-corner-pills-icon-about"
                  aria-selected="false"
                >
                  <i class="las la-check"></i> Completed Orders
                </a>
              </li>
            </ul>
            <div class="tab-content" id="rounded-corner-pills-icon-tabContent">
              <div
                class="tab-pane fade show active"
                id="rounded-corner-pills-icon-all"
                role="tabpanel"
                aria-labelledby="rounded-corner-pills-icon-home-tab"
              >
                <Songtable
                  title="ALL Order"
                  userDelete={userDelete}
                  data={data}
                />
              </div>
              <div
                class="tab-pane fade show "
                id="rounded-corner-pills-icon-home"
                role="tabpanel"
                aria-labelledby="rounded-corner-pills-icon-home-tab"
              >
                <Songtable
                  title="ALL Order"
                  userDelete={userDelete}
                  data={data}
                />
              </div>
              <div
                class="tab-pane fade"
                id="rounded-corner-pills-icon-about"
                role="tabpanel"
                aria-labelledby="rounded-corner-pills-icon-about-tab"
              >
                <Songtable
                  title="ALL Order"
                  userDelete={userDelete}
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
