import React from "react";
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"; // where in our storge service we re gonna store the file
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  const handleUpload = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <h1>UPLOADING FILES AND IMAGES TO FIREBASE</h1>
      <div className="App">
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button className="btn" onClick={handleUpload}>
          UPLOAD
        </button>
        {imageList.map((url) => {
          return <img src={url} />;
        })}
      </div>
    </>
  );
}

export default App;
