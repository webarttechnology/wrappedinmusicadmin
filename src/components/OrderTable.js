import React from "react";

const OrderTable = ({ data, title }) => {
  return (
    <>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
        <div class="widget ecommerce-table">
          <div class="widget-heading">
            <h5 class="">{title}</h5>
          </div>
          <div class="widget-content">
            <div class="table-responsive text-center">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>
                      <div class="th-content">Order Id</div>
                    </th>
                    <th>
                      <div class="th-content">Client</div>
                    </th>
                    <th>
                      <div class="th-content">Amount</div>
                    </th>
                    <th>
                      <div class="th-content">Song Id</div>
                    </th>
                    <th>
                      <div class="th-content">Fulfillment Status</div>
                    </th>
                    <th>
                      <div class="th-content">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.order_no} </td>
                      <td>{item.registration.name}</td>
                      <td>$ {item.amount}</td>
                      <td>{item.Song.name}</td>
                      <td>
                        {item.status === "0" ? (
                          <span class="badge badge-info">Pending</span>
                        ) : (
                          <span class="badge badge-success">Completed</span>
                        )}
                      </td>
                      <td>
                        <div className="d-flex justify-content-center">
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
