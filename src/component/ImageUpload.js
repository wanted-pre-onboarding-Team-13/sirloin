// [이미지추가]btn click시 이미지파일명이 [X]btn 과 함께 노출
// 추가 첨부 시, 최신 업로드 순으로 이미지파일 추가
import React, { useState, useRef, useEffect } from "react";
import "./ImageUpload.scss";

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const fileInput = useRef();

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    window.localStorage.setItem(
      JSON.stringify(e.target.files[0].name),
      JSON.stringify(e.target.files[0].name)
    );
  };

  const handleFileBtn = (e) => {
    e.preventDefault();
    fileInput.current.click(); //onchange아니고 click!!!!
  };

  return (
    <div className="container">
      <div className="title">
        <h2>상품 소개 이미지</h2>
      </div>
      <div className="imgAddContainer">
        <input
          type="file"
          style={{ display: "none" }}
          onChange={fileSelectedHandler}
          ref={fileInput}
        />
        <button onClick={handleFileBtn}>버튼</button>
        <div className="imgName">{selectedFile.name}</div>
      </div>
    </div>
  );
};
