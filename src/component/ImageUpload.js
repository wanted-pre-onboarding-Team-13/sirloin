// [이미지추가]btn click시 이미지파일명이 [X]btn 과 함께 노출
// 추가 첨부 시, 최신 업로드 순으로 이미지파일 추가
import React, { useState, useRef, useEffect } from "react";
import "./ImageUpload.scss";

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const fileInput = useRef();

  const fileSelectedHandler = (e) => {
    const fileName = e.target.files[0].name;
    window.localStorage.setItem(
      JSON.stringify(fileName),
      JSON.stringify(fileName)
    );
    const imageAdd = () => {
      let imageArr = [...selectedFile];
      imageArr.unshift(fileName);
      setSelectedFile(imageArr);
    };
    imageAdd();
  };

  const handleFileBtn = (e) => {
    e.preventDefault();
    fileInput.current.click(); //onchange아니고 click!!!!
  };
  console.log(selectedFile);
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
        {selectedFile !== "" &&
          selectedFile.map((name) => (
            <div key={name} className="imgName">
              {name}
              <button>x</button>
            </div>
          ))}
      </div>
    </div>
  );
};
