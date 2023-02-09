import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import React from 'react'

export default function Mainframe() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
