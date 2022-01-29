import React, { useState, useRef } from 'react';
import 'utils/styles/ImageUpload.scss';

const ImageUpload = ({ title }) => {
  const [selectedFile, setSelectedFile] = useState([]);

  const fileInput = useRef();

  const fileSelectedHandler = (e) => {
    try {
      const fileName = e.target.files[0].name;
      const file = e.target.files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
        window.localStorage.setItem(fileName, fileName);
        const addImg = () => {
          let imageArr = [...selectedFile];
          imageArr.unshift(fileName);
          setSelectedFile(imageArr);
        };
        addImg();
      } else {
        alert('JPEG, PNG, JPG 파일만 업로드 가능합니다.');
        e.target.value = null;
      }
    } catch (error) {}
  };

  const addImgBtn = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const removeImgBtn = (e) => {
    setSelectedFile(selectedFile.filter((name) => name !== e));
    window.localStorage.removeItem(e);
  };

  return (
    <div className='container'>
      <div className='title'>
        <h2>{title} 이미지</h2>
      </div>
      <div className='imgAddContainer'>
        <input type='file' style={{ display: 'none' }} onChange={fileSelectedHandler} ref={fileInput} />
        <button onClick={addImgBtn} className='imageAddBtn'>
          +&nbsp;이미지추가
        </button>
        <div className='imgNameContainer'>
          {selectedFile !== '' &&
            selectedFile.map((name, i) => {
              return (
                <div key={name} className='imgName'>
                  {name}
                  <button className='deleteBtn' onClick={() => removeImgBtn(name)}>
                    x
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
