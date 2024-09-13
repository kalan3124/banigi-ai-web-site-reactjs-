import React, { useEffect, useState } from "react";
import download from "../../assets/download.png";
import ImageCard from "./components/ImageCard";

const LandscapeDesignDash = (props) => {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    filterArr();
  }, []);

  const filterArr = async () => {
    props.setLoader(true);
    let data = await props.dataLoad();
    let dataN = data.filter((val) => val.type == "landscape");
    setImageData(dataN);
    props.setLoader(false);
  };

  return (
    <>
      <ImageCard imageData={imageData} />
    </>
  );
};

export default LandscapeDesignDash;
