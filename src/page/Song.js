import React from "react";
import { Edit2 } from "react-feather";
import { Link } from "react-router-dom";

const Song = () => {
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
            <div class="table-responsive text-center">
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
                      <div class="th-content">Image</div>
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
                          //onClick={() => userDelete(item.id)}
                          class="align-items-center btn btn-danger d-flex font-20 px-2"
                        >
                          <i class="las la-times-circle"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
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
