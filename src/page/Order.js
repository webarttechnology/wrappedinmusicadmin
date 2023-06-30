import React from "react";
import * as API from "../api/index";
import { useEffect } from "react";
import { useState } from "react";
const Order = () => {
  const [data, setData] = useState([]);
  const commonDataTable = async () => {
    try {
      const response = await API.user_listing();
      console.log("response", response);
      setData(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    commonDataTable();
  }, []);

  return (
    <>
      <div
        id="tabsWithIcons"
        class="col-xl-12 col-lg-12 col-md-12 layout-spacing"
      >
        <div class="statbox widget box box-shadow">
          <div class="widget-header">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h2>Order</h2>
              </div>
            </div>
          </div>
          <div class="widget-content widget-content-area rounded-corner-pills-icon">
            <ul
              class="nav nav-pills mb-4 mt-3  justify-content-center"
              id="rounded-corner-pills-icon-tab"
              role="tablist"
            >
              <li class="nav-item ml-2 mr-2">
                <a
                  class="nav-link mb-2 active text-center"
                  id="rounded-corner-pills-icon-home-tab"
                  data-toggle="pill"
                  href="#rounded-corner-pills-icon-home"
                  role="tab"
                  aria-controls="rounded-corner-pills-icon-home"
                  aria-selected="true"
                >
                  <i class="las la-shopping-cart"></i> New Orders
                </a>
              </li>
              <li class="nav-item ml-2 mr-2">
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
                id="rounded-corner-pills-icon-home"
                role="tabpanel"
                aria-labelledby="rounded-corner-pills-icon-home-tab"
              >
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                  <div class="widget ecommerce-table">
                    <div class="widget-heading">
                      <h5 class="">List of Songs </h5>
                    </div>
                    <div class="widget-content">
                      <div class="table-responsive text-center">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>
                                <div class="th-content">ID</div>
                              </th>
                              <th>
                                <div class="th-content">Song Title</div>
                              </th>
                              <th>
                                <div class="th-content">Album</div>
                              </th>
                              <th>
                                <div class="th-content">Duration</div>
                              </th>
                              <th>
                                <div class="th-content">Add To Favourites</div>
                              </th>
                              <th>
                                <div class="th-content">More</div>
                              </th>
                              <th>
                                <div class="th-content">Action</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                            <tr>
                              <td>01 </td>
                              <td>Bloodlust</td>
                              <td>Dream Your Moments</td>
                              <td>5:26</td>
                              <td>
                                <i class="lar la-heart"></i>
                              </td>
                              <td>
                                <i class="las la-ellipsis-h"></i>
                              </td>
                              <td>
                                <i class="las la-shopping-cart"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="rounded-corner-pills-icon-about"
                role="tabpanel"
                aria-labelledby="rounded-corner-pills-icon-about-tab"
              >
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                  <div class="widget ecommerce-table">
                    <div class="widget-heading">
                      <h5 class="">List of Songs </h5>
                    </div>
                    <div class="widget-content">
                      <div class="table-responsive text-center">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>
                                <div class="th-content">ID</div>
                              </th>
                              <th>
                                <div class="th-content">Song Title</div>
                              </th>
                              <th>
                                <div class="th-content">Album</div>
                              </th>
                              <th>
                                <div class="th-content">Duration</div>
                              </th>
                              <th>
                                <div class="th-content">Add To Favourites</div>
                              </th>
                              <th>
                                <div class="th-content">More</div>
                              </th>
                              <th>
                                <div class="th-content">Action</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item, index) => (
                              <tr>
                                <td>{index + 1} </td>
                                <td>{item.name}</td>
                                <td>Dream Your Moments</td>
                                <td>5:26</td>
                                <td>
                                  <i class="lar la-heart"></i>
                                </td>
                                <td>
                                  <i class="las la-ellipsis-h"></i>
                                </td>
                                <td>
                                  <i class="las la-shopping-cart"></i>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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

export default Order;
