import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

// 상단바 형성

const Navbar = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        {/* <img
          src="https://gateway.pinata.cloud/ipfs/QmeYuyNj6JwtNspPTqabkS3MBi7zDe6dAob957b61X5XJn"
          width="40"
          height="40"
          alt=""
          // 👆 메인 페이지에 판매중인 이미지 띄우기
        /> */}
        <div className="profileIcon">
          <Link to="/Login">
            <FaUserCircle size="40" />
          </Link>
        </div>
      </div>
      <div className="logo">
        <Link to="/">
          <img
            width={250}
            src="data:image/png;base64,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"
          alt ="logo"/>{" "}
        </Link>
      </div>

      <Link to="/post/:id">
        <div className="headerItem">
          <h1>게시판</h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
