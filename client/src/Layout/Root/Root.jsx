import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="min-h-[calc(100vh-189px)]
      "
      >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
