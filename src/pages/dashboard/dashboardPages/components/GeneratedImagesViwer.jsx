import ReactCompareImage from "react-compare-image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import viewIcon from "../../../../assets/view.png";
import downloadIcon from "../../../../assets/down.png";

const GeneratedImagesViwer = (props) => {
  return (
    <div className="DesignGridDiv">
      <div className="DesignGridLayout">
        {Object.values(props.generatedImages).map((e, key) => {
          return [
            <div className="grid_item1" key={"desingn_generated_" + key}>
              {/* <ReactCompareImage
                key={"desingn_generated_"}
                leftImageCss={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                rightImageCss={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                leftImage={props.file}
                rightImage={e}
              /> */}
              <div className="container">
                <img src={e} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="floating-buttons">
                    <PhotoProvider>
                      <PhotoView src={e}>
                        <img
                          style={{
                            width: "20%",
                            height: "auto",
                            margin: "10px",
                            cursor: "pointer",
                          }}
                          src={viewIcon}
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <img
                      style={{
                        width: "20%",
                        height: "auto",
                        cursor: "pointer",
                        margin: "10px",
                      }}
                      src={downloadIcon}
                      alt=""
                      onClick={() => {
                        // alert();
                        window.location.href = e;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>,
          ];
        })}
      </div>
    </div>
  );
};

export default GeneratedImagesViwer;
