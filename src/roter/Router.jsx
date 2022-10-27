import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { Setting } from "../pages/Setting";
import {SignUp} from "../pages/SignUp";
import { SharePage } from "../pages/SharePage";
import { ShareMovie } from '../components/movie/ShareMovie';

export const Router = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/setting" element={<Setting />} />
    <Route path="/share" element={<SharePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route path="/sharemovie" element={<ShareMovie />} /> */}

    <Route path="/*" element={<Page404 />} />
  </Routes>
  )
}
