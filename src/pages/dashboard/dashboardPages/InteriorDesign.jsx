import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../Components/PrimaryButton";
import Select from "react-select";
import boho from "../../../assets/boho.png";
import desertChic from "../../../assets/desertChic.png";
import earthyForest from "../../../assets/earthyForest.png";
import highContrast from "../../../assets/highContrast.png";
import jewel from "../../../assets/jewel.png";
import Natural from "../../../assets/Natural.png";
import none from "../../../assets/none.png";
import relaxed from "../../../assets/relaxed.png";
import warmEarth from "../../../assets/warmEarth.png";
import customStyles from "../../../Components/selectCustomStyle";
import checkAuth from "../../../auth/CheckAuth";
import { getImageSize } from "react-image-size";
import Swal from "sweetalert2";
import { checkImageSize } from "../../../common/checkImageSize";
import {
  getColorPreferenceList,
  getSpaceTypes,
  getThemeList,
} from "../../../apis/OptionsApis";
import { uploadImageToFireBase } from "../../../common/uplaodImages";
import {
  createMask,
  generateImage,
  getGeneratedImage,
  getMask,
} from "../../../apis/Apis";
import {
  getUserByID,
  saveGeneratedImage,
  saveMainUploadImage,
} from "../../../apis/usersApis";
import ReactCompareImage from "react-compare-image";
import GeneratedImagesViwer from "./components/GeneratedImagesViwer";
import { t } from "i18next";
import Resizer from "react-image-file-resizer";
import { errorMsg } from "../../../common/alert";

const InteriorDesign = (props) => {
  const { authData } = checkAuth();
  const [type, setType] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [addtionalPro, setAddtionalPro] = useState("");
  const [noOfdeisign, setNoOfDesign] = useState(1);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileDummy, setSelectedFileDummy] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [interiorSpaces, setInteriorSpaces] = useState([]);
  const [interiorThemes, setInteriorThemes] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [patterns, setPatterns] = useState([]);

  const [typeLabel, setTypeLabel] = useState("");
  const [styleLabel, setStyleLabel] = useState("");

  const [file, setFile] = useState("");
  const [loader, setLoader] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    getTypes();
    getStyles();
    getColors();
    checkSub();
  }, []);

  // api arrays
  const interior_types = [
    {
      label: t("ST_INT_001"),
      value: "ST-INT-001",
    },
    {
      label: t("ST_INT_002"),
      value: "ST-INT-002",
    },
    {
      label: t("ST_INT_003"),
      value: "ST-INT-003",
    },
    {
      label: t("ST_INT_004"),
      value: "ST-INT-004",
    },
    {
      label: t("ST_INT_005"),
      value: "ST-INT-005",
    },
    {
      label: t("ST_INT_006"),
      value: "ST-INT-006",
    },
    {
      label: t("ST_INT_007"),
      value: "ST-INT-007",
    },
    {
      label: t("ST_INT_008"),
      value: "ST-INT-008",
    },
    {
      label: t("ST_INT_009"),
      value: "ST-INT-009",
    },
    {
      label: t("ST_INT_010"),
      value: "ST-INT-010",
    },
    {
      label: t("ST_INT_011"),
      value: "ST-INT-011",
    },
    {
      label: t("ST_INT_012"),
      value: "ST-INT-012",
    },
    {
      label: t("ST_INT_013"),
      value: "ST-INT-013",
    },
    {
      label: t("ST_INT_014"),
      value: "ST-INT-014",
    },
    {
      label: t("ST_INT_015"),
      value: "ST-INT-015",
    },
    {
      label: t("ST_INT_016"),
      value: "ST-INT-016",
    },
  ];
  const modes_list = [
    {
      label: t("mode_1"),
      value: "Beautiful Redesign",
    },
    {
      label: t("mode_2"),
      value: "Creative Redesign",
    },
    {
      label: t("mode_3"),
      value: "Fill The Room",
    },
  ];
  const interior_style = [
    {
      label: t("DT_INT_001"),
      value: "DT-INT-001",
    },
    {
      label: t("DT_INT_002"),
      value: "DT-INT-002",
    },
    {
      label: t("DT_INT_003"),
      value: "DT-INT-003",
    },
    {
      label: t("DT_INT_004"),
      value: "DT-INT-004",
    },
    {
      label: t("DT_INT_005"),
      value: "DT-INT-005",
    },
    {
      label: t("DT_INT_006"),
      value: "DT-INT-006",
    },
    {
      label: t("DT_INT_007"),
      value: "DT-INT-007",
    },
    {
      label: t("DT_INT_008"),
      value: "DT-INT-008",
    },
    {
      label: t("DT_INT_009"),
      value: "DT-INT-009",
    },
    {
      label: t("DT_INT_010"),
      value: "DT-INT-010",
    },
    {
      label: t("DT_INT_011"),
      value: "DT-INT-011",
    },
    {
      label: t("DT_INT_012"),
      value: "DT-INT-012",
    },
    {
      label: t("DT_INT_013"),
      value: "DT-INT-013",
    },
    {
      label: t("DT_INT_014"),
      value: "DT-INT-014",
    },
    {
      label: t("DT_INT_015"),
      value: "DT-INT-015",
    },
  ];
  const colors_list = [
    {
      label: t("color_1"),
      value: "beige, gray, white",
    },
    {
      label: t("color_2"),
      value: "beige, green, gray",
    },
    {
      label: t("color_3"),
      value: "black, orange, white",
    },
    {
      label: t("color_4"),
      value: "black, white, gray",
    },
    {
      label: t("color_5"),
      value: "blazing orange, yellow cream, gray",
    },
    {
      label: t("color_6"),
      value: "blue, atmosphere, coral",
    },
    {
      label: t("color_7"),
      value: "blue, beige, gray",
    },
    {
      label: t("color_8"),
      value: "blue, grass green, gray",
    },
    {
      label: t("color_9"),
      value: "blue, green, gray",
    },
    {
      label: t("color_10"),
      value: "blue, taupe, gray",
    },

    {
      label: t("color_11"),
      value: "brown, beige, white",
    },
    {
      label: t("color_12"),
      value: "champagne, honey yellow",
    },
    {
      label: t("color_13"),
      value: "coral, green, white",
    },
    {
      label: t("color_14"),
      value: "creamy white, brown, green",
    },
    {
      label: t("color_15"),
      value: "dark teal, yellow, gray",
    },
    {
      label: t("color_16"),
      value: "desert sand, brown, burgundy",
    },
    {
      label: t("color_17"),
      value: "earth tone, olive green, gray",
    },
    {
      label: t("color_18"),
      value: "earthy greens, gray, yellow",
    },
    {
      label: t("color_19"),
      value: "earthy greens, yellow, white",
    },
    {
      label: t("color_20"),
      value: "forest green, light gray, white",
    },
    {
      label: t("color_21"),
      value: "golden, royal blue, white",
    },
    {
      label: t("color_22"),
      value: "hunter green, red, dark gray",
    },
    {
      label: t("color_23"),
      value: "indigo, gray, white",
    },
    {
      label: t("color_24"),
      value: "light gray, american silver, white",
    },
    {
      label: t("color_25"),
      value: "light orange, blush, gray",
    },
    {
      label: t("color_26"),
      value: "light yellow, green, gray",
    },
    {
      label: t("color_27"),
      value: "lime green, orange, white",
    },
    {
      label: t("color_28"),
      value: "living coral, forest green, gray",
    },
    {
      label: t("color_29"),
      value: "living coral, spiced apple, peach",
    },
    {
      label: t("color_30"),
      value: "moss green, beige, white",
    },
    {
      label: t("color_31"),
      value: "northern sky, blue, coffee",
    },
    {
      label: t("color_32"),
      value: "olive green, gray, white",
    },
    {
      label: t("color_33"),
      value: "orange, blue, white",
    },
    {
      label: t("color_34"),
      value: "orange, gray, white",
    },
    {
      label: t("color_35"),
      value: "pale green, purple, white",
    },
    {
      label: t("color_36"),
      value: "pale lilac, lime green, gray",
    },
    {
      label: t("color_37"),
      value: "pink, white, gray",
    },
    {
      label: t("color_38"),
      value: "radiant yellow, living coral, gray",
    },
    {
      label: t("color_39"),
      value: "red, brown, gray",
    },
    {
      label: t("color_40"),
      value: "royal purple, gray, white",
    },
    {
      label: t("color_41"),
      value: "ruby red, gray",
    },
    {
      label: t("color_42"),
      value: "sea green, marsala, gray",
    },
    {
      label: t("color_43"),
      value: "soft pink, peach amber",
    },
    {
      label: t("color_44"),
      value: "soft pink, peach amber, green",
    },
    {
      label: t("color_45"),
      value: "teal, yellow, gray",
    },
    {
      label: t("color_46"),
      value: "turquoise, beige, white",
    },
    {
      label: t("color_47"),
      value: "turquoise, cobalt, white",
    },
    {
      label: t("color_48"),
      value: "turquoise, teal blue, kelly green",
    },
    {
      label: t("color_49"),
      value: "yellow, blue, white",
    },
    {
      label: t("color_50"),
      value: "yellow, gray, white",
    },
  ];
  //
  const checkSub = async () => {
    const data = await getUserByID(localStorage.getItem("uid"));
    if (data) setUserDetails(data.user);
  };

  async function getFile(event) {
    setLoader(true);
    const file = event.target.files[0];
    // let check = await checkImageSize(URL.createObjectURL(file));
    // if (check) {
    //   setFile(URL.createObjectURL(file));
    //   setSelectedFileDummy(URL.createObjectURL(file));
    //   setSelectedFile(file);
    //   setSelectedName(file.name);
    // }
    // setLoader(false);
    if (file) {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        const { width, height } = img;

        // Validate dimensions
        if (width < 512 || height < 512) {
          Swal.fire({
            title: "",
            text: t("image_dimensions_message"),
            icon: "error",
            confirmButtonText: "OK",
            color: "red",
            width: "20rem",
            heightAuto: true,
            confirmButtonColor: "red",
            background: "antiquewhite",
          });

          URL.revokeObjectURL(objectUrl);
          setLoader(false);
          return;
        }

        // Determine new dimensions
        const maxDimension = Math.max(width, height);
        const minDimension = Math.min(width, height);

        let newWidth, newHeight;

        if (maxDimension > 2048) {
          const scaleFactor = 2048 / maxDimension;
          newWidth = width * scaleFactor;
          newHeight = height * scaleFactor;
        } else if (minDimension < 512) {
          const scaleFactor = 512 / minDimension;
          newWidth = width * scaleFactor;
          newHeight = height * scaleFactor;
        } else {
          newWidth = width;
          newHeight = height;
        }

        console.log(newWidth);

        // Resize image
        Resizer.imageFileResizer(
          file,
          newWidth,
          newHeight,
          "JPEG",
          80,
          0,
          (file) => {
            setSelectedFileDummy(URL.createObjectURL(file));
            setSelectedFile(file);
            setSelectedName(file.name);
            setFile(URL.createObjectURL(file));
            setLoader(false);
          },
          "file"
        );

        URL.revokeObjectURL(objectUrl);
        setLoader(false);
      };

      img.src = objectUrl;
    }
  }

  const getTypes = async () => {
    setLoader(true);
    let spaces = [];
    const types = await getSpaceTypes();
    if (types) {
      let interior_spaces = types.data["interior_spaces"];
      interior_spaces.forEach((e) => {
        let arr = removeChar(e);
        spaces.push({ value: arr[0], label: arr[1] });
      });
      setInteriorSpaces(spaces);
    }
  };

  const getStyles = async () => {
    let themes = [];
    const styles = await getThemeList();
    if (styles) {
      let interior_themes = styles.data["interior_themes"];
      interior_themes.forEach((e) => {
        let arr = removeChar(e);
        themes.push({ value: arr[0], label: arr[1] });
      });
      setInteriorThemes(themes);
    }
  };

  const getColors = async () => {
    let colorP = [];
    const colors = await getColorPreferenceList();
    if (colors) {
      let patterns = colors.data["color"];
      patterns.forEach((e) => {
        colorP.push({ value: e, label: e });
      });
      setPatterns(colorP);
    }
    setLoader(false);
  };

  const removeChar = (e) => {
    let str = JSON.stringify(e);
    let remove1 = str.replace(/{/g, "");
    let remove2 = remove1.replace(/}/g, "");
    let remove3 = remove2.replace(/"/g, "");
    var arr = remove3.split(":");

    return arr;
  };

  const handleAi = async (e) => {
    e.preventDefault();

    // if (!authData.uid) {
    //   props.openLogin(true);
    //   return 0;
    // }

    setLoader(true);
    if (userDetails && userDetails.subscription) {
      if (userDetails.available_token == 0) {
        errorMsg("You have not credits");
        window.location = "/dashboard/myPricing";
        setLoader(false);
        return 0;
      }
    }
    let validate = validateInputs();
    if (validate) {
      let maskUrl = [];
      let image_url = await uploadImageToFireBase(selectedName, selectedFile);

      if (image_url) {
        console.log("Running....");
        let mask = await createMask(props, image_url);
        if (mask) {
          saveMainUploadImage(props, authData.uid, mask.data.job_id, image_url);
          let job_id = mask.data.job_id;
          let stop = "";
          let run = setInterval(async () => {
            let data = await getMask(props, job_id);
            console.log(data.data.job_status);
            if (data.data.job_status == "done") {
              stop = data.data.job_status;
              if (data.data.masks) {
                // console.log(data.data.masks);
                data.data.masks.forEach((e) => {
                  maskUrl.push(e.url);
                });
              }
              clearInterval(run);
              console.log("image generating...");
              let genarate_img = await generateImage(
                props,
                "interior",
                image_url,
                maskUrl,
                type,
                style,
                color,
                noOfdeisign,
                addtionalPro
              );
              console.log("image generated");
              if (genarate_img) {
                if (genarate_img.data.job_id) {
                  console.log("getting...");
                  let run_generate_imgs = setInterval(async () => {
                    let genarate_imgs = await getGeneratedImage(
                      props,
                      genarate_img.data.job_id
                    );
                    console.log(genarate_imgs.data.job_status);
                    if (genarate_imgs.data.job_status == "done") {
                      // console.log(genarate_imgs.data.generated_images);
                      setGeneratedImages([
                        ...genarate_imgs.data.generated_images,
                      ]);
                      // props.generatedImagesArr(
                      //   genarate_imgs.data.generated_images
                      // );
                      saveGeneratedImage(
                        props,
                        authData.uid,
                        mask.data.job_id,
                        genarate_imgs.data.generated_images.toString(),
                        typeLabel,
                        "interior",
                        "",
                        styleLabel,
                        color,
                        noOfdeisign.toString(),
                        "",
                        "",
                        "",
                        addtionalPro
                      );
                      setLoader(false);
                      clearInterval(run_generate_imgs);
                    }
                  }, 2000);
                }
              }
            }
          }, 2000);
        }
      }
    }
  };

  const validateInputs = () => {
    if (selectedName == "" || type == "" || style == "" || color == "") {
      setLoader(false);
      Swal.fire({
        title: "",
        text: t("check_all_the_inputs"),
        icon: "warning",
        confirmButtonText: "OK",
        color: "red",
        width: "20rem",
        heightAuto: true,
        confirmButtonColor: "red",
        background: "antiquewhite",
      });
      return false;
    } else {
      return true;
    }
  };

  const InteriorOptions = [
    { value: "Bath Room", label: "Bath Room" },
    { value: "Bed Room", label: "Bed Room" },
    { value: "Dining Room", label: "Dining Room" },
    { value: "Hallway", label: "Hallway" },
    { value: "Kids Room", label: "Kids Room" },
    { value: "Kitchen", label: "Kitchen" },
    { value: "Living Room", label: "Living Room" },
    { value: "Office", label: "Office" },
  ];

  const ModeOptions = [
    { value: "Beautiful Redesign", label: "Beautiful Redesign" },
    { value: "Creative Redesign", label: "Creative Redesign" },
    { value: "Fill The Room", label: "Fill The Room" },
  ];

  const styleOptions = [{ value: "Classic", label: "classic" }];

  const colourOptions = [
    { value: "Boho", label: "Boho", image: boho },
    { value: "Desert Chic", label: "Desert", image: desertChic },
    { value: "Earthy Forest", label: "Earthy Forest", image: earthyForest },
    { value: "High contrast", label: "High contrast", image: highContrast },
    { value: "Jewel", label: "Jewel", image: jewel },
    { value: "Natural", label: "Natural", image: Natural },
    { value: "Relaxed", label: "Relaxed", image: relaxed },
    { value: "Warm Earth", label: "Warm Earth", image: warmEarth },
    { value: "None", label: "None", image: none },
  ];

  const NumberOfDesignOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  const renderOption = (option) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{option.label}</span>
      <img
        src={option.image}
        alt={option.value}
        style={{ width: "fit-content", marginRight: "15px" }}
      />
    </div>
  );
  return (
    <>
      {loader ? (
        <div className="loading-state">
          <div className="loading"></div>
        </div>
      ) : null}
      <div className="dash_InteriorDesign">
        <h3>
          {t("interior")} {t("design")}
        </h3>

        <div className="dash_interiorDesignForm">
          <div className="dash_interiorDesignFirst">
            <div>
              <label htmlFor="">{t("interior_type")}</label>

              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                // defaultValue={interior_types[0]}
                options={interior_types}
                styles={customStyles}
                isSearchable={false}
                onChange={(e) => {
                  setTypeLabel(e.label);
                  setType(e.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="">{t("mode")}</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                defaultValue={modes_list[0]}
                options={modes_list}
                styles={customStyles}
                isSearchable={false}
              />
            </div>
            <div>
              <label htmlFor="">{t("style")}</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                // defaultValue={interior_style[0]}
                options={interior_style}
                styles={customStyles}
                isSearchable={false}
                onChange={(e) => {
                  setStyleLabel(e.label);
                  setStyle(e.value);
                }}
              />
            </div>
          </div>
          <div className="dash_interiorDesignSecond">
            <div>
              <label htmlFor="">{t("color")}</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                // defaultValue={colors_list[0]}
                options={colors_list}
                styles={customStyles}
                isSearchable={false}
                // getOptionLabel={(option) => renderOption(option)}
                getOptionValue={(option) => option.value}
                onChange={(e) => setColor(e.value)}
              />
            </div>
            <div>
              <label htmlFor="">{t("number_of_designs")}</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                defaultValue={NumberOfDesignOptions[0]}
                options={NumberOfDesignOptions}
                styles={customStyles}
                isSearchable={false}
                onChange={(e) => setNoOfDesign(parseInt(e.value))}
              />
            </div>
            <div>
              <label htmlFor="">{t("ai_intervention")}</label>
              <div className="intervation_radio">
                <div className="veryLowInter">
                  <input type="radio" name="intervation" id="" />
                  <label htmlFor="">{t("very_low")}</label>
                </div>

                <div className="LowInter">
                  <input type="radio" name="intervation" id="" />
                  <label htmlFor="">{t("low")}</label>
                </div>

                <div className="MediumInter">
                  <input type="radio" name="intervation" id="" />
                  <label htmlFor="">{t("medium")}</label>
                </div>

                <div className="ExtremeInter">
                  <input type="radio" name="intervation" id="" />
                  <label htmlFor="">{t("extreme")}</label>
                </div>
              </div>
            </div>
          </div>
          <div className="dash_interiorDesignThird">
            <div className="customAiIntervationForm">
              <div className="customAiIntervationLabel">
                <label htmlFor="">{t("custom_ai_intervention")}</label>
                <input type="checkbox" name="" id="" />
              </div>

              <textarea
                name=""
                id=""
                cols=""
                rows="5"
                placeholder={t("example_description")}
                onChange={(e) => setAddtionalPro(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="interiorDesignFileDiv">
            <div className="interiorDesignFile">
              {file.length == 0 ? (
                <span>
                  {" "}
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.4699 14.0226C10.6105 13.8821 10.8012 13.8032 10.9999 13.8032C11.1987 13.8032 11.3893 13.8821 11.5299 14.0226L13.5299 16.0226C13.6036 16.0912 13.6627 16.174 13.7037 16.266C13.7447 16.358 13.7667 16.4573 13.7685 16.558C13.7703 16.6587 13.7518 16.7588 13.714 16.8522C13.6763 16.9455 13.6202 17.0304 13.5489 17.1016C13.4777 17.1728 13.3929 17.229 13.2995 17.2667C13.2061 17.3044 13.1061 17.3229 13.0054 17.3212C12.9047 17.3194 12.8054 17.2973 12.7134 17.2563C12.6214 17.2154 12.5386 17.1563 12.4699 17.0826L11.7499 16.3626V20.5526C11.7499 20.7515 11.6709 20.9422 11.5302 21.0829C11.3896 21.2235 11.1988 21.3026 10.9999 21.3026C10.801 21.3026 10.6102 21.2235 10.4696 21.0829C10.3289 20.9422 10.2499 20.7515 10.2499 20.5526V16.3626L9.52991 17.0826C9.46125 17.1563 9.37845 17.2154 9.28645 17.2563C9.19445 17.2973 9.09513 17.3194 8.99443 17.3212C8.89373 17.3229 8.7937 17.3044 8.70031 17.2667C8.60692 17.229 8.52209 17.1728 8.45087 17.1016C8.37965 17.0304 8.32351 16.9455 8.28579 16.8522C8.24807 16.7588 8.22954 16.6587 8.23132 16.558C8.23309 16.4573 8.25514 16.358 8.29613 16.266C8.33712 16.174 8.39622 16.0912 8.46991 16.0226L10.4699 14.0226Z"
                      fill="#C79952"
                    />
                    <path
                      d="M11.476 2.30249C8.726 2.30249 6.512 4.50249 6.512 7.19949C6.512 7.66149 6.577 8.10849 6.697 8.53049C7.194 8.67449 7.66 8.89049 8.08 9.17049C8.16639 9.22282 8.24132 9.29207 8.3003 9.37407C8.35927 9.45607 8.40108 9.54914 8.4232 9.64769C8.44533 9.74625 8.44732 9.84825 8.42906 9.9476C8.41079 10.0469 8.37265 10.1416 8.31692 10.2258C8.26118 10.31 8.18901 10.3822 8.10472 10.4378C8.02044 10.4935 7.92578 10.5315 7.82642 10.5497C7.72706 10.5679 7.62506 10.5658 7.52652 10.5436C7.42799 10.5214 7.33495 10.4795 7.253 10.4205C6.66992 10.0341 5.98546 9.82918 5.286 9.83149C3.325 9.83149 1.75 11.4015 1.75 13.3175C1.75 15.2335 3.325 16.8025 5.286 16.8025C5.48491 16.8025 5.67568 16.8815 5.81633 17.0222C5.95698 17.1628 6.036 17.3536 6.036 17.5525C6.036 17.7514 5.95698 17.9422 5.81633 18.0828C5.67568 18.2235 5.48491 18.3025 5.286 18.3025C2.513 18.3025 0.25 16.0785 0.25 13.3175C0.25 10.6125 2.42 8.42449 5.114 8.33449C5.04614 7.95997 5.012 7.58011 5.012 7.19949C5.012 3.65849 7.914 0.80249 11.476 0.80249C14.634 0.80249 17.272 3.04649 17.831 6.02349C20.131 7.00049 21.75 9.26149 21.75 11.9055C21.75 14.9795 19.562 17.5365 16.657 18.1585C16.4625 18.2001 16.2594 18.1628 16.0924 18.0547C15.9254 17.9466 15.8081 17.7765 15.7665 17.582C15.7249 17.3875 15.7622 17.1843 15.8703 17.0173C15.9784 16.8503 16.1485 16.7331 16.343 16.6915C18.583 16.2115 20.25 14.2455 20.25 11.9055C20.25 9.76849 18.86 7.94349 16.912 7.27749C16.3886 7.09848 15.8392 7.00725 15.286 7.00749C14.703 7.00749 14.146 7.10749 13.628 7.28749C13.4414 7.34842 13.2383 7.33375 13.0624 7.24664C12.8865 7.15953 12.7517 7.00692 12.6871 6.82158C12.6224 6.63623 12.633 6.43292 12.7166 6.25529C12.8001 6.07765 12.95 5.93986 13.134 5.87149C14.1039 5.53291 15.1401 5.4284 16.158 5.56649C15.8085 4.60668 15.1712 3.77813 14.3333 3.19396C13.4953 2.60979 12.4975 2.29846 11.476 2.30249Z"
                      fill="#C79952"
                    />
                  </svg>
                  {t("tap_to_upload_interior_image")}
                </span>
              ) : (
                <img src={file} alt="" className="uploadedImage" />
              )}

              <input type="file" name="" id="" onChange={getFile} />
            </div>

            <div className="interiorDesignFileImg"></div>
          </div>

          <div className="InteriorDesignBtn">
            <PrimaryButton
              text={t("generate_image")}
              onClick={(e) => handleAi(e)}
            />
          </div>
        </div>
        <GeneratedImagesViwer file={file} generatedImages={generatedImages} />
      </div>
    </>
  );
};

export default InteriorDesign;
