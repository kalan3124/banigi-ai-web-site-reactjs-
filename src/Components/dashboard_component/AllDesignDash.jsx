import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";

const AllDesignDash = (props) => {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    filterArr();
  }, []);

  const filterArr = async () => {
    props.setLoader(true);
    let data = await props.dataLoad();
    setImageData(data);
    props.setLoader(false);
  };

  return (
    <>
      <ImageCard imageData={imageData} />
    </>
  );
};

export default AllDesignDash;
