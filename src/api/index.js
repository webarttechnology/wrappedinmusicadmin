import axios from "axios";
import * as c from "../api/constant";

// ? REGISTRATION API
export const user_registration = async (data) => {
  try {
    const url = c.SIGNUP + "/login";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER LIST SHOW
export const user_listing = async (header) => {
  try {
    const url = c.SIGNUP + "/get-user";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER LIST SHOW
export const user_status = async (data, header) => {
  try {
    const url = c.SIGNUP + "/user-status-change";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const user_delete = async (data) => {
  try {
    const url = c.SIGNUP + "/delete-user/" + data;
    const res = await axios.delete(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const get_subCategory = async (data) => {
  try {
    const url = c.CATAGORIES;
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const add_subCategory = async (data) => {
  try {
    const url = c.SUBCATAGORIES;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getMain_subCategory = async (data) => {
  try {
    const url = c.SUBCATAGORIES;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const subCategoryId = async (data) => {
  try {
    const url = c.SUBCATAGORIES + "/" + data;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
