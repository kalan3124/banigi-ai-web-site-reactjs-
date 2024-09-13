import { PhotoProvider, PhotoView } from "react-photo-view";
import download from "../../../assets/download.png";
import viewIcon from "../../../assets/view.png";

const ImageCard = (props) => {
  return (
    <>
      <div className="AllDesignDash">
        {Object.values(props.imageData).map((main, key) => {
          return Object.values(main.generated_image_url).map((e, key) => {
            return [
              <div className="card">
                <img key={"my_All" + key} src={e} alt="" />
                <div className="card-container">
                  <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                    {main.type} <br />
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#c8c4c4",
                        fontWeight: "normal",
                      }}
                    >
                      {main.color
                        ? main.category + "," + main.color
                        : main.category}
                      {/* {main.category},{main.color} */}
                    </span>
                  </span>
                  <div>
                    <a href={e}>
                      <img
                        style={{ width: "40px", height: "37px" }}
                        src={download}
                        alt=""
                      />
                    </a>
                    <PhotoProvider>
                      <PhotoView src={e}>
                        <img
                          style={{
                            width: "40px",
                            height: "37px",
                            cursor: "pointer",
                            marginLeft: "12px",
                          }}
                          src={viewIcon}
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
              </div>,
            ];
          });
        })}
      </div>
    </>
  );
};

export default ImageCard;
