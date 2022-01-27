import React, { useState, useRef } from "react";
import "utils/styles/ImageUpload.scss";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState([]);

  //input: display none하고 btn에서 대신 input onchage실행
  const fileInput = useRef();

  const fileSelectedHandler = (e) => {
    const fileName = e.target.files[0].name;
    window.localStorage.setItem(
      JSON.stringify(fileName),
      JSON.stringify(fileName)
    );
    const addImg = () => {
      let imageArr = [...selectedFile];
      imageArr.unshift(fileName);
      setSelectedFile(imageArr);
    };
    addImg();
  };

  const addImgBtn = (e) => {
    e.preventDefault();
    fileInput.current.click(); //onchange아니고 click!!!!
  };

  const removeImgBtn = (e) => {
    setSelectedFile(selectedFile.filter((name) => name !== e));
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
        <button onClick={addImgBtn}>버튼</button>
        {selectedFile !== "" &&
          selectedFile.map((name, i) => {
            return (
              <div key={name} className="imgName">
                {name}
                <button onClick={() => removeImgBtn(name)}>x</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageUpload;
