import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../Components/PrimaryButton";
import customStyles from "../../../Components/selectCustomStyle";
import Select from "react-select";
import { checkImageSize } from "../../../common/checkImageSize";
import {
  getLanscapingPreferenceList,
  getSpaceTypes,
  getThemeList,
} from "../../../apis/OptionsApis";
import Swal from "sweetalert2";
import {
  getUserByID,
  saveGeneratedImage,
  saveMainUploadImage,
} from "../../../apis/usersApis";
import {
  createMask,
  generateImage,
  getGeneratedImage,
  getMask,
} from "../../../apis/Apis";
import { uploadImageToFireBase } from "../../../common/uplaodImages";
import GeneratedImagesViwer from "./components/GeneratedImagesViwer";
import checkAuth from "../../../auth/CheckAuth";
import { t } from "i18next";
import Resizer from "react-image-file-resizer";
import { errorMsg } from "../../../common/alert";

const LandscapeDesign = (props) => {
  const { authData } = checkAuth();
  const [type, setType] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [addtionalPro, setAddtionalPro] = useState("");
  const [noOfdeisign, setNoOfDesign] = useState(1);
  const [pathway, setPathway] = useState("");
  const [plant, setPlant] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [selectedFileDummy, setSelectedFileDummy] = useState("");
  const [exteriorSpaces, setExteriorSpaces] = useState([]);
  const [exteriorThemes, setExteriorThemes] = useState([]);
  const [pathways, setPathways] = useState([]);
  const [plants, setPlants] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [patterns, setPatterns] = useState([]);

  const [typeLabel, setTypeLabel] = useState("");
  const [styleLabel, setStyleLabel] = useState("");

  const [file, setFile] = useState("");
  const [loader, setLoader] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    getTypes();
    getStyles();
    getLanscapingPreferences();
    checkSub();
  }, []);

  const exterior_types = [
    {
      label: t("ST_EXT_001"),
      value: "ST-EXT-001",
    },
    {
      label: t("ST_EXT_002"),
      value: "ST-EXT-002",
    },
    {
      label: t("ST_EXT_003"),
      value: "ST-EXT-003",
    },
    {
      label: t("ST_EXT_004"),
      value: "ST-EXT-004",
    },
    {
      label: t("ST_EXT_005"),
      value: "ST-EXT-005",
    },
  ];
  const exterior_styles = [
    {
      label: t("DT_EXT_001"),
      value: "DT-EXT-001",
    },
    {
      label: t("DT_EXT_002"),
      value: "DT-EXT-002",
    },
    {
      label: t("DT_EXT_003"),
      value: "DT-EXT-003",
    },
    {
      label: t("DT_EXT_004"),
      value: "DT-EXT-004",
    },
    {
      label: t("DT_EXT_005"),
      value: "DT-EXT-005",
    },
    {
      label: t("DT_EXT_006"),
      value: "DT-EXT-006",
    },
    {
      label: t("DT_EXT_007"),
      value: "DT-EXT-007",
    },
    {
      label: t("DT_EXT_008"),
      value: "DT-EXT-008",
    },
    {
      label: t("DT_EXT_009"),
      value: "DT-EXT-009",
    },
    {
      label: t("DT_EXT_010"),
      value: "DT-EXT-010",
    },
    {
      label: t("DT_EXT_011"),
      value: "DT-EXT-011",
    },
    {
      label: t("DT_EXT_012"),
      value: "DT-EXT-012",
    },
    {
      label: t("DT_EXT_013"),
      value: "DT-EXT-013",
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

  const plants_list = [
    {
      label: t("plants_1"),
      value: "Plants",
    },
    {
      label: t("plants_2"),
      value: "Alliums",
    },
    {
      label: t("plants_3"),
      value: "Annuals",
    },
    {
      label: t("plants_4"),
      value: "Asiatic lilies mix color",
    },
    {
      label: t("plants_5"),
      value: "Begonia",
    },
    {
      label: t("plants_6"),
      value: "Biennials",
    },
    {
      label: t("plants_7"),
      value: "Black-eyed susan",
    },
    {
      label: t("plants_8"),
      value: "Bougainvillea",
    },
    {
      label: t("plants_9"),
      value: "Colorful zinnia",
    },
    {
      label: t("plants_10"),
      value: "Coneflower",
    },
    {
      label: t("plants_11"),
      value: "Coreopsis",
    },
    {
      label: t("plants_12"),
      value: "Dahlia mix color",
    },
    {
      label: t("plants_13"),
      value: "Daisies",
    },
    {
      label: t("plants_14"),
      value: "Delphinium",
    },
    {
      label: t("plants_15"),
      value: "Echinacea",
    },
    {
      label: t("plants_16"),
      value: "Echinacea",
    },
    {
      label: t("plants_17"),
      value: "Flowering perennials",
    },
    {
      label: t("plants_18"),
      value: "Flowering shrubs",
    },
    {
      label: t("plants_19"),
      value: "Forsythia",
    },
    {
      label: t("plants_20"),
      value: "Foxglove",
    },
    {
      label: t("plants_21"),
      value: "Foxglove",
    },
    {
      label: t("plants_22"),
      value: "Fragrant plants",
    },
    {
      label: t("plants_23"),
      value: "Gaillardia",
    },
    {
      label: t("plants_24"),
      value: "Geranium",
    },
    {
      label: t("plants_25"),
      value: "Gerbera daisies",
    },
    {
      label: t("plants_26"),
      value: "Gomphrena",
    },
    {
      label: t("plants_27"),
      value: "Heirloom roses",
    },
    {
      label: t("plants_28"),
      value: "Hibiscus",
    },
    {
      label: t("plants_29"),
      value: "Hydrangea",
    },
    {
      label: t("plants_30"),
      value: "Iris",
    },
    {
      label: t("plants_31"),
      value: "Lantana",
    },
    {
      label: t("plants_32"),
      value: "Lobelia mixed colors",
    },
    {
      label: t("plants_33"),
      value: "Marigold",
    },
    {
      label: t("plants_34"),
      value: "Petunia grandiflora mixed color",
    },
    {
      label: t("plants_35"),
      value: "Roses",
    },
    {
      label: t("plants_36"),
      value: "Roses",
    },
    {
      label: t("plants_37"),
      value: "Shrub with purple flowers",
    },
    {
      label: t("plants_38"),
      value: "Shrubs with pink flowers",
    },
    {
      label: t("plants_39"),
      value: "Snapdragon",
    },
    {
      label: t("plants_40"),
      value: "Succulent",
    },
    {
      label: t("plants_41"),
      value: "Tropicals",
    },
  ];

  const pathways_list = [
    {
      label: t("pathways_1"),
      value: "A Neutral stone pathway",
    },
    {
      label: t("pathways_2"),
      value: "Brick walkway",
    },
    {
      label: t("pathways_3"),
      value: "Concrete pathways",
    },
    {
      label: t("pathways_4"),
      value: "Contemporary Pathway",
    },
    {
      label: t("pathways_5"),
      value: "Dynamic pavers pathway",
    },
    {
      label: t("pathways_6"),
      value: "Flagstone walkway",
    },
    {
      label: t("pathways_7"),
      value: "Herringbone pathway",
    },
    {
      label: t("pathways_8"),
      value: "Pea gravel pathway",
    },
    {
      label: t("pathways_9"),
      value: "Stone pathway",
    },
  ];

  const checkSub = async () => {
    const data = await getUserByID(localStorage.getItem("uid"));
    if (data) setUserDetails(data.user);
  };

  async function getFile(event) {
    setLoader(true);
    const file = event.target.files[0];
    // let check = await checkImageSize(URL.createObjectURL(file));
    // if (check) {
    //   setSelectedFileDummy(URL.createObjectURL(file));
    //   setSelectedFile(file);
    //   setSelectedName(file.name);
    //   setFile(URL.createObjectURL(event.target.files[0]));
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
      let exterior_spaces = types.data["exterior_spaces"];
      exterior_spaces.forEach((e) => {
        let arr = removeChar(e);
        spaces.push({ value: arr[0], label: arr[1] });
      });
      setExteriorSpaces(spaces);
    }
  };

  const getStyles = async () => {
    let themes = [];
    const styles = await getThemeList();
    if (styles) {
      let exterior_themes = styles.data["exterior_themes"];
      exterior_themes.forEach((e) => {
        let arr = removeChar(e);
        themes.push({ value: arr[0], label: arr[1] });
      });
      setExteriorThemes(themes);
    }
  };

  const getLanscapingPreferences = async () => {
    let landscapePaths = [];
    let landscapePlants = [];
    const landscape = await getLanscapingPreferenceList();
    if (landscape) {
      let pathways = landscape.data["pathways"];
      let plants = landscape.data["plants"];
      pathways.forEach((e) => {
        landscapePaths.push({ value: e, label: e });
      });
      plants.forEach((e) => {
        landscapePlants.push({ value: e, label: e });
      });
      setPathways(landscapePaths);
      setPlants(landscapePlants);
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

  const validateInputs = () => {
    if (
      selectedName == "" ||
      type == "" ||
      style == "" ||
      pathway == "" ||
      plant == ""
    ) {
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
      console.log(pathway + " & " + plant);
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
              let landscape = "";
              if (pathway && plant) {
                landscape = pathway + " & " + plant;
              }

              if (pathway) {
                landscape = pathway;
              }

              if (plant) {
                landscape = plant;
              }

              let genarate_img = await generateImage(
                props,
                "landscaping",
                image_url,
                maskUrl,
                type,
                style,
                color,
                noOfdeisign,
                landscape,
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
                      // props.generatedImagesArr(
                      //   genarate_imgs.data.generated_images
                      // );

                      setGeneratedImages([
                        ...genarate_imgs.data.generated_images,
                      ]);

                      saveGeneratedImage(
                        props,
                        authData.uid,
                        mask.data.job_id,
                        genarate_imgs.data.generated_images.toString(),
                        typeLabel,
                        "landscape",
                        "",
                        styleLabel,
                        color,
                        noOfdeisign.toString(),
                        "",
                        pathway,
                        plant,
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

  const landscapeOptions = [
    { value: "Modern", label: "Modern" },
    { value: "City", label: "City" },
    { value: "Contemporary", label: "Contemporary" },
    { value: "Luxury", label: "Luxury" },
    { value: "Apartment", label: "Apartment" },
    { value: "Small", label: "Small" },
    { value: "Vegetable", label: "Vegetable" },
    { value: "Low Budget", label: "Low Budget" },
    { value: "Beach", label: "Beach" },
    { value: "Wedding", label: "Wedding" },
    { value: "Rural Garden", label: "Rural Garden" },
    { value: "Mediterranean", label: "Mediterranean" },
    { value: "Restaurant Garden", label: "Restaurant Garden" },
    { value: "Formal", label: "Formal" },
    { value: "American", label: "American" },
    { value: "English", label: "English" },
    { value: "Traditional", label: "Traditional" },
    { value: "Christmas", label: "Christmas" },
    { value: "Meditation", label: "Meditation" },
    { value: "Coastal", label: "Coastal" },
    { value: "Tropical", label: "Tropical" },
  ];
  const ModeOptions = [
    { value: "Beautiful Redesign", label: "Beautiful Redesign" },
    { value: "Creative Redesign", label: "Creative Redesign" },
    { value: "Fill The Room", label: "Fill The Room" },
  ];
  const styleOptions = [
    { value: "Backyard", label: "Backyard" },
    { value: "Patio", label: "Patio" },
    { value: "Terrace", label: "Terrace" },
    { value: "Front Yard", label: "Front Yard" },
    { value: "Courtyard", label: "Courtyard" },
    { value: "Pool Area", label: "Pool Area" },
    { value: "Porch", label: "Porch" },
    { value: "Playground", label: "Playground" },
  ];
  const NumberOfDesignOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  return (
    <>
      {loader ? (
        <div className="loading-state">
          <div className="loading"></div>
        </div>
      ) : null}
      <div className="dash_ExteriorDesign">
        <h3>
          {t("landscape")} {t("design")}
        </h3>

        <div className="dash_ExteriorDesignForm">
          <div className="dash_ExteriorDesignFirst">
            <div>
              <label htmlFor="">{t("landscape_type")} *</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                // defaultValue={exterior_types[0]}
                options={exterior_types}
                styles={customStyles}
                isSearchable={false}
                onChange={(e) => {
                  setTypeLabel(e.label);
                  setType(e.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="">{t("pathways")} *</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                // defaultValue={pathways_list[0]}
                options={pathways_list}
                styles={customStyles}
                isSearchable={false}
                onChange={(e) => setPathway(e.value)}
              />
            </div>
            <div>
              <label htmlFor="">{t("plants")} *</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                // defaultValue={plants_list[0]}
                options={plants_list}
                styles={customStyles}
                isSearchable={false}
                onChange={(e) => setPlant(e.value)}
              />
            </div>
          </div>
          <div className="dash_ExteriorDesignFirst">
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
              <label htmlFor="">{t("style")} *</label>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                // defaultValue={exterior_styles[0]}
                options={exterior_styles}
                styles={customStyles}
                isSearchable={false}
                onChange={(e) => {
                  setStyleLabel(e.label);
                  setStyle(e.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="">{t("number_of_designs")} *</label>
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
          </div>
          <div className="dash_ExteriorDesignSecond">
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
            <div className="customAiIntervationForm">
              <div className="customAiIntervationLabel">
                <label htmlFor="">{t("custom_ai_intervention")}</label>
                <input type="checkbox" name="" id="" />
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder={t("example_description")}
                onChange={(e) => setAddtionalPro(e.target.value)}
              ></textarea>
            </div>
            <div></div>
          </div>

          <div className="ExteriorDesignFileDiv">
            <div className="ExteriorDesignFile">
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

            <div className="ExteriorDesignFileImg"></div>
          </div>

          <div className="ExteriorDesignBtn">
            <PrimaryButton
              text={t("generate_image")}
              onClick={(e) => handleAi(e)}
            />
          </div>
          <GeneratedImagesViwer file={file} generatedImages={generatedImages} />
        </div>
      </div>
    </>
  );
};

export default LandscapeDesign;
