import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../page/Login";
import Base from "../components/Base";
import Order from "../page/Order";
import SidBar from "../components/SidBar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { useState } from "react";
import UserList from "../page/UserList";
import Categories from "../page/Categories";
import AddCategoris from "../page/AddCategoris";
import Song from "../page/Song";
import AddSong from "../page/AddSong";
const AppRoute = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

  return (
    <>
      <Router>
        {isLogin ? (
          <>
            <div class="main-container" id="container">
              <div class="overlay"></div>
              <div class="search-overlay"></div>
              <div class="rightbar-overlay"></div>
              <SidBar />
              <div id="content" class="main-content">
                <Header setIsLogin={setIsLogin} />
                <SubHeader />
                <Routes>
                  <Route path="/" element={<Base />} />
                  <Route path="/dashboard" element={<Base />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/user" element={<UserList />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/add-categories" element={<AddCategoris />} />
                  <Route path="/song-list" element={<Song />} />
                  <Route path="/add-music" element={<AddSong />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
};

export default AppRoute;
