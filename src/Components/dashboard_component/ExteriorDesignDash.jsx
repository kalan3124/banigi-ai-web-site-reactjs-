import React, { useEffect, useState } from "react";
import download from "../../assets/download.png";
import ImageCard from "./components/ImageCard";

const ExteriorDesignDash = (props) => {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    filterArr();
  }, []);

  const filterArr = async () => {
    props.setLoader(true);
    let data = await props.dataLoad();
    if (data) {
      let dataN = data.filter((val) => val.type == "exterior");
      console.log(dataN);
      setImageData(dataN);
    }

    props.setLoader(false);
  };

  return (
    <>
      <ImageCard imageData={imageData} />
    </>
  );
};

export default ExteriorDesignDash;
