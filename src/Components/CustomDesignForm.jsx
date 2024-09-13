import React, { useRef, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Swal from "sweetalert2";
import { getImageSize } from "react-image-size";
import {
  getColorPreferenceList,
  getLanscapingPreferenceList,
  getSpaceTypes,
  getThemeList,
} from "../apis/OptionsApis";
import { useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";
import {
  createMask,
  generateImage,
  generateImageCustom,
  getGeneratedImage,
  getMask,
} from "../apis/Apis";
import { SUPABASE_BUCKET_PATH } from "../constants/config";
import { uploadImageToFireBase } from "../common/uplaodImages";
import checkAuth from "../auth/CheckAuth";
import { getUserByID, saveGeneratedImage, saveMainUploadImage } from "../apis/usersApis";
import Select from "react-select";
import customStyles from "../Components/selectCustomStyle";
import { t } from "i18next";
import Resizer from "react-image-file-resizer";
import { errorMsg } from "../common/alert";

const CustomDesignForm = (props) => {
  const { authData } = checkAuth();
  const selectTypeInputRef = useRef(null);
  const selectStyleInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [selectedFileDummy, setSelectedFileDummy] = useState("");
  const [roomAddPro, setRoomAddPro] = useState("");
  const [avoidAddPro, setAvoidAddPro] = useState("");
  const [noOfdeisign, setNoOfDesign] = useState(1);

  const [showRoomTypeExample, setShowRoomTypeExample] = useState(false);
  const [showAvoidThingsExample, setShowAvoidThingsExample] = useState(false);
  const [interiorSpaces, setInteriorSpaces] = useState([]);
  const [interiorThemes, setInteriorThemes] = useState([]);
  const [masks, setMasks] = useState([]);
  const [maskUrls, setMaskUrls] = useState([]);

  const [typeLabel, setTypeLabel] = useState("");
  const [styleLabel, setStyleLabel] = useState("");
  const [type, setType] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [patterns, setPatterns] = useState([]);
  const [addtionalPro, setAddtionalPro] = useState("");
  const [maskElement, setMaskElement] = useState("");
  const [pathways, setPathways] = useState([]);
  const [plants, setPlants] = useState([]);
  const [pathway, setPathway] = useState("");
  const [plant, setPlant] = useState("");
  const [material, setMaterial] = useState("");
  const [maskCategory, setMaskCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [jobId, setJobId] = useState("");
  const [collectMaskKeys, setCollectMaskKeys] = useState({});

  const [activeTab, setActiveTab] = useState(1);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    removeVal();
    getTypes();
    getStyles();
    getColors();
    getLanscapingPreferences();
    checkSub();
  }, [activeTab]);

  const mask_categories = [
    {
      label: t("architectural"),
      value: "architectural",
    },
    {
      label: t("furnishing"),
      value: "furnishing",
    },
    // {
    //   label: t("landscaping"),
    //   value: "landscaping",
    // },
  ];

  const mask_elements = [
    {
      label: t("wall"),
      value: "wall",
    },
    {
      label: t("floor"),
      value: "floor",
    },
    {
      label: t("ceiling"),
      value: "ceiling",
    },
  ];

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

  const patterns_list = [
    {
      label: t("pattern_1"),
      value: "ditsy",
    },
    {
      label: t("pattern_2"),
      value: "fleur-de-lis",
    },
    {
      label: t("pattern_3"),
      value: "floral",
    },
    {
      label: t("pattern_4"),
      value: "geometric",
    },
    {
      label: t("pattern_5"),
      value: "greek lines",
    },
    {
      label: t("pattern_6"),
      value: "harlequin",
    },
    {
      label: t("pattern_7"),
      value: "jacquard",
    },
    {
      label: t("pattern_8"),
      value: "ogee",
    },
    {
      label: t("pattern_9"),
      value: "polka dot",
    },
    {
      label: t("pattern_10"),
      value: "stripes",
    },
    {
      label: t("pattern_11"),
      value: "toile",
    },
    {
      label: t("pattern_12"),
      value: "trellis",
    },
    {
      label: t("pattern_13"),
      value: "zigzag",
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

  const materials_list = [
    {
      label: t("material_preference_1"),
      value: "oak wood flooring",
    },
    {
      label: t("material_preference_2"),
      value: "ceramic tile",
    },
    {
      label: t("material_preference_3"),
      value: "marble flooring",
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

  const checkSub = async () => {
    const data = await getUserByID(localStorage.getItem("uid"));
    if (data) setUserDetails(data.user);
  };

  const handleFileChange = async (event) => {
    props.manageLoader(true);
    setMaskUrls([]);
    setMasks([]);
    if (!authData.uid) {
      props.openLogin(true);
      props.manageLoader(false);
      return 0;
    }
    const file = event.target.files[0];
    // let check = await checkImageSize(URL.createObjectURL(file));
    // if (check) {
    //   setSelectedFileDummy(URL.createObjectURL(file));
    //   props.selectImage(URL.createObjectURL(file));
    //   setSelectedFile(file);
    //   setSelectedName(file.name);

    //   // new handle ai
    //   newHandleImageAI(file);
    // }

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
          props.manageLoader(false);
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
            props.selectImage(URL.createObjectURL(file));
            setSelectedFile(file);
            setSelectedName(file.name);

            // new handle ai
            props.manageLoader(true);
            newHandleImageAI(file);
          },
          "file"
        );

        URL.revokeObjectURL(objectUrl);
        props.manageLoader(false);
      };

      img.src = objectUrl;
    }
  };

  const newHandleImageAI = async (file) => {
    let maskUrl = [];
    let image_url = await uploadImageToFireBase(file.name, file);
    // console.log(image_url);
    setImageUrl(image_url);
    if (image_url) {
      console.log("Running....");
      let mask = await createMask(props, image_url);
      if (mask) {
        saveMainUploadImage(props, authData.uid, mask.data.job_id, image_url);
        let job_id = mask.data.job_id;
        setJobId(job_id);
        let stop = "";
        let run = setInterval(async () => {
          let data = await getMask(props, job_id);
          console.log(data.data.job_status);
          if (data.data.job_status == "done") {
            stop = data.data.job_status;
            if (data.data.masks) {
              console.log(data.data.masks);
              data.data.masks.forEach((e) => {
                maskUrl.push(e.url);
              });
            }
            setMasks(data.data.masks);
            clearInterval(run);
            props.manageLoader(false);
            // console.log("image generating...");
            // let addtions_pro = "";
            // if (roomAddPro) {
            //   addtions_pro = roomAddPro;
            // }

            // if (addtions_pro && avoidAddPro) {
            //   addtions_pro = roomAddPro + ". Avoid " + avoidAddPro;
            // }
            // let genarate_img = await generateImage(
            //   props,
            //   "custom",
            //   image_url,
            //   maskUrl,
            //   interiorSpaces.length > 0 ? interiorSpaces[1].value : "",
            //   interiorThemes.length > 0 ? interiorThemes[1].value : "",
            //   "",
            //   1,
            //   addtions_pro
            // );
            // console.log("image generated");
            // if (genarate_img) {
            //   if (genarate_img.data.job_id) {
            //     console.log("getting...");
            //     let run_generate_imgs = setInterval(async () => {
            //       let genarate_imgs = await getGeneratedImage(
            //         props,
            //         genarate_img.data.job_id
            //       );
            //       console.log(genarate_imgs.data.job_status);
            //       if (genarate_imgs.data.job_status == "done") {
            //         // console.log(genarate_imgs.data.generated_images);
            //         // setGeneratedImages([
            //         //   ...genarate_imgs.data.generated_images,
            //         // ]);
            //         props.generatedImagesArr(
            //           genarate_imgs.data.generated_images
            //         );
            //         saveGeneratedImage(
            //           props,
            //           authData.uid,
            //           mask.data.job_id,
            //           genarate_imgs.data.generated_images.toString(),
            //           "custom",
            //           "custom",
            //           "",
            //           "",
            //           "",
            //           1,
            //           "",
            //           "",
            //           "",
            //           addtions_pro
            //         );
            //         props.manageLoader(false);
            //         clearInterval(run_generate_imgs);
            //       }
            //     }, 2000);
            //   }
            // }
          }
        }, 2000);
      }
    }
  };

  const getTypes = async () => {
    props.manageLoader(true);
    let spaces = [];
    // const types = await getSpaceTypes();
    let interior_spaces = [];
    // if (types) {
    //   if (activeTab == 1) {
    //     console.log(1);
    //     interior_spaces = types.data["interior_spaces"];
    //   }

    //   if (activeTab == 2 || activeTab == 3) {
    //     interior_spaces = types.data["exterior_spaces"];
    //   }

    //   interior_spaces.forEach((e) => {
    //     let arr = removeChar(e);
    //     spaces.push({ value: arr[0], label: arr[1] });
    //   });
    //   setInteriorSpaces(spaces);
    // }
    if (activeTab == 1) {
      console.log(1);
      // interior_spaces = types.data["interior_spaces"];
      interior_spaces = interior_types;
    }

    if (activeTab == 2 || activeTab == 3) {
      // interior_spaces = types.data["exterior_spaces"];
      interior_spaces = exterior_types;
    }
    setInteriorSpaces(interior_spaces);
  };

  // const getTypes = async () => {
  //   props.manageLoader(true);
  //   let spaces = [];
  //   const types = await getSpaceTypes();
  //   if (types) {
  //     let interior_spaces = types.data["interior_spaces"];
  //     interior_spaces.forEach((e) => {
  //       let arr = removeChar(e);
  //       if (
  //         (arr[1].includes("room") || arr[1].includes("Room")) &&
  //         !arr[1].includes("Bathroom")
  //       ) {
  //         spaces.push({ value: arr[0], label: arr[1] });
  //       }
  //     });
  //     setInteriorSpaces(spaces);
  //   }
  // };

  const getStyles = async () => {
    let themes = [];
    // const styles = await getThemeList();
    let interior_themes = [];
    // if (styles) {
    //   if (activeTab == 1) {
    //     console.log(1);
    //     interior_themes = styles.data["interior_themes"];
    //   }

    //   if (activeTab == 2 || activeTab == 3) {
    //     interior_themes = styles.data["exterior_themes"];
    //   }
    //   interior_themes.forEach((e) => {
    //     let arr = removeChar(e);
    //     themes.push({ value: arr[0], label: arr[1] });
    //   });
    //   setInteriorThemes(themes);
    // }
    if (activeTab == 1) {
      interior_themes = interior_style;
    }

    if (activeTab == 2 || activeTab == 3) {
      interior_themes = exterior_styles;
    }
    setInteriorThemes(interior_themes);
    // props.manageLoader(false);
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
    // props.manageLoader(false);
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
    props.manageLoader(false);
  };

  const openRoomTypeExample = () => {
    setShowRoomTypeExample(!showRoomTypeExample);
  };
  const openAvoidThingsExample = () => {
    setShowAvoidThingsExample(!showAvoidThingsExample);
  };

  const removeChar = (e) => {
    let str = JSON.stringify(e);
    let remove1 = str.replace(/{/g, "");
    let remove2 = remove1.replace(/}/g, "");
    let remove3 = remove2.replace(/"/g, "");
    var arr = remove3.split(":");

    return arr;
  };

  const checkImageSize = async (path) => {
    const dimensions = await getImageSize(path);

    if (
      dimensions.width > 512 &&
      dimensions.width < 2048 &&
      dimensions.height > 512 &&
      dimensions.height < 2048
    ) {
      console.log(dimensions.width + " x " + dimensions.height);
      return true;
    } else {
      console.log(dimensions.width + " x " + dimensions.height);
      Swal.fire({
        title: "",
        text: t("minimum_dimension_maximum"),
        icon: "error",
        confirmButtonText: "OK",
        color: "red",
        width: "20rem",
        heightAuto: true,
        confirmButtonColor: "red",
        background: "antiquewhite",
      });
      props.manageLoader(false);
      return false;
    }
  };

  const uploadImageToSupabase = async () => {
    console.log("uploading...");
    let { data } = await supabase.storage
      .from("banigi-ai images")
      .upload(
        "deisign-images" + "/" + window.crypto.randomUUID(),
        selectedFile
      );
    if (data) {
      console.log("uploaded");
      return SUPABASE_BUCKET_PATH + data.path;
    }
  };

  const validateInputs = () => {
    if (selectedName == "") {
      showAlert(t("please_upload_image"));
      return false;
    }

    if (maskUrls.length == 0) {
      showAlert(t("please_select_mask_images"));
      return false;
    }

    if (activeTab == 1) {
      // Furnishing
      if (maskCategory == "") {
        showAlert(t("please_select_mask_category"));
        return false;
      }

      if (maskElement == "") {
        showAlert(t("please_select_mask_elemnt"));
        return false;
      }

      if (maskCategory == "furnishing") {
        if (color == "") {
          showAlert(t("please_select_color"));
          return false;
        }
      }

      // architectural
      if (maskCategory == "architectural") {
        if (maskElement == "wall") {
          if (color == "") {
            showAlert(t("please_select_color"));
            return false;
          }
        }
        if (maskElement == "floor") {
          if (material == "") {
            showAlert(t("please_select_material"));
            return false;
          }
        }
        if (maskElement == "ceiling") {
          if (color == "") {
            showAlert(t("please_select_color"));
            return false;
          }
        }
      }
    }

    if (activeTab == 3) {
      if (pathway == "") {
        showAlert(t("please_select_pathways"));
        return false;
      }

      if (plant == "") {
        showAlert(t("please_select_plants"));
        return false;
      }
    }

    if (type == "") {
      showAlert(t("please_select_type"));
      return false;
    }
    if (style == "") {
      showAlert(t("please_select_style"));
      return false;
    }

    return true;
  };

  const getEx = (ex) => {
    setRoomAddPro(ex);
  };

  const getAvoidEx = (ex) => {
    setAvoidAddPro(ex);
  };

  const handleAi = async (e) => {
    e.preventDefault();
    console.log(color);
    if (!authData.uid) {
      props.openLogin(true);
      return 0;
    }

    props.manageLoader(true);
    if (userDetails && userDetails.subscription) {
      if (userDetails.available_token == 0) {
        errorMsg("You have not credits");
        props.manageLoader(false);
        return 0;
      }
    }
    let validate = validateInputs();
    if (validate) {
      let maskUrl = [];
      // let image_url = await uploadImageToFireBase(selectedName, selectedFile);

      // if (image_url) {
      // console.log("Running....");
      // let mask = await createMask(props, image_url);
      // if (mask) {
      // saveMainUploadImage(props, authData.uid, mask.data.job_id, image_url);
      let job_id = "";
      let stop = "";
      // let run = setInterval(async () => {
      // let data = await getMask(props, job_id);
      // console.log(data.data.job_status);
      // if (data.data.job_status == "done") {
      // stop = data.data.job_status;
      // if (data.data.masks) {
      //   // console.log(data.data.masks);
      //   data.data.masks.forEach((e) => {
      //     maskUrl.push(e.url);
      //   });
      // }
      // clearInterval(run);
      console.log("image generating...");
      // let addtions_pro = "";
      // if (roomAddPro) {
      //   addtions_pro = roomAddPro;
      // }

      // if (addtions_pro && avoidAddPro) {
      //   addtions_pro = roomAddPro + ". Avoid " + avoidAddPro;
      // }
      let landscape = "";
      if (pathway && plant) {
        landscape = pathway + " & " + plant;
      } else if (pathway) {
        landscape = pathway;
      } else if (plant) {
        landscape = plant;
      }
      console.log(maskCategory);
      let genarate_img = await generateImageCustom(
        props,
        maskCategory ? maskCategory : "landscaping",
        imageUrl,
        maskUrls,
        type,
        style,
        activeTab == 1 ? maskElement : "wall floor ceiling",
        color,
        noOfdeisign,
        landscape,
        material,
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
              // setGeneratedImages([
              //   ...genarate_imgs.data.generated_images,
              // ]);
              props.generatedImagesArr(genarate_imgs.data.generated_images);
              saveGeneratedImage(
                props,
                authData.uid,
                jobId,
                genarate_imgs.data.generated_images.toString(),
                "custom",
                "custom",
                "",
                "",
                "",
                1,
                "",
                "",
                "",
                addtionalPro
              );
              props.manageLoader(false);
              clearInterval(run_generate_imgs);
            }
          }, 2000);
        }
      }

      // }
      // }, 2000);
      // }
      // }
    } else {
      props.manageLoader(false);
    }
  };

  const handleMasks = (e, url, key) => {
    if (e.target.checked) {
      // setMaskUrls([...maskUrls, url]);
      setClickAble(key, url);
    } else {
      // var newArray = maskUrls.filter((value) => value != url);
      // setMaskUrls([...newArray]);
      setClickAble(key, url);
    }
  };

  const ModeOptions = [
    { value: "Beautiful Redesign", label: "Beautiful Redesign" },
    { value: "Creative Redesign", label: "Creative Redesign" },
    { value: "Fill The Room", label: "Fill The Room" },
  ];

  const NumberOfDesignOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  // const maskElementsLand = [{ value: "wall floor ceiling", label: "All" }];

  const maskElements = [
    { value: "wall", label: "Wall" },
    { value: "floor", label: "Floor" },
    { value: "ceiling", label: "Ceiling" },
  ];

  const materials = [
    { value: "oak wood flooring", label: "oak wood flooring" },
    { value: "ceramic tile", label: "ceramic tile" },
    { value: "marble flooring", label: "marble flooring" },
  ];

  const maskCategoriesForInt = [
    { value: "architectural", label: "Architectural" },
    { value: "furnishing", label: "Furnishing" },
  ];

  const maskCategoriesForExt = [{ value: "landscaping", label: "Landscaping" }];

  const handleTabClick = (index) => {
    setActiveTab(index);
    onClear();
    // let elemet = document.getElementsByClassName("react-select__single-value");
    // elemet[0].innerHTML = "";
    // console.log(elemet[0].innerHTML);
  };

  const showAlert = (msg) => {
    return Swal.fire({
      title: "",
      text: msg,
      icon: "warning",
      confirmButtonText: "OK",
      color: "red",
      width: "20rem",
      heightAuto: true,
      confirmButtonColor: "red",
      background: "antiquewhite",
    });
  };

  const onClear = () => {
    // console.log("ref");
    selectTypeInputRef.current.clearValue();
    selectStyleInputRef.current.clearValue();
  };

  const removeVal = () => {
    // console.log("load");
    setType("");
    setStyle("");
    setColor("");
    setAddtionalPro("");
    setPathway("");
    setPlant("");
    // setMaskElement("");
    setMaterial("");
    // setMaskCategory("");
    setTypeLabel("");

    // setInteriorSpaces([]);
    // setPatterns([]);
    // setPathways([]);
    // setPlants([]);
  };

  const setClickAble = (key, url) => {
    if (collectMaskKeys[key] && collectMaskKeys[key].clicked) {
      setCollectMaskKeys({ ...collectMaskKeys, [key]: { clicked: false } });
      var newArray = maskUrls.filter((value) => value != url);
      setMaskUrls([...newArray]);
    } else {
      setCollectMaskKeys({ ...collectMaskKeys, [key]: { clicked: true } });
      setMaskUrls([...maskUrls, url]);
    }
  };

  const clickColor = (key) => {
    return collectMaskKeys[key] && collectMaskKeys[key].clicked
      ? "#c79952"
      : "";
  };

  console.log(maskUrls);
  return (
    <form>
      <div className="tryDesignFormDiv">
        <form id="aiForm" action="">
          <div
            className="tryDesignFile"
            style={selectedFile ? { padding: 0 } : { padding: "80px 35px" }}
          >
            {selectedFile ? (
              <img className="ai_image_view" src={selectedFileDummy} alt="" />
            ) : null}

            {selectedFile ? null : (
              <span>
                {" "}
                <svg
                  width="22"
                  height="22"
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
            )}
            <input type="file" name="" id="" onChange={handleFileChange} />
          </div>
          {masks.length > 0 ? (
            <>
              <div className="selectOptionDiv">
                <label htmlFor="">{t("mask_images")}</label>
              </div>
              <div className="mask-images">
                {Object.values(masks).map((element, key) => {
                  return [
                    <div
                      className="mask-image"
                      style={{
                        border: "1px solid",
                        borderRadius: "8px",
                        // backgroundColor: "rgb(108 81 39 / 15%)",
                        marginRight: "4px",
                        marginBottom: "4px",
                        cursor: "pointer",
                        borderColor: clickColor(key),
                        backgroundColor: clickColor(key),
                        width:"48%"
                      }}
                      onClick={() => setClickAble(key, element.url)}
                    >
                      <div className="container-masks">
                        <img width={"100%"} src={selectedFileDummy} alt="" />
                        <img
                          width={"100%"}
                          className="mask-image mask-image-gen"
                          src={element.url}
                          alt=""
                        />
                        {/* <input
                          checked={
                            collectMaskKeys[key] && collectMaskKeys[key].clicked
                              ? true
                              : false
                          }
                          className="mask-check"
                          type="checkbox"
                          onChange={(e) => handleMasks(e, element.url, key)}
                        /> */}
                      </div>
                      <div className="mask-elemnt-name">
                        <span>{element.name}</span>
                      </div>
                    </div>,
                  ];
                })}
              </div>
            </>
          ) : null}
          <div className="selectOptionDiv" style={{ display: "none" }}>
            <label htmlFor="">Room Type *</label>
            <textarea
              value={roomAddPro}
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Enter the prompt and describe your room design by writing the room type, how you would want to look like."
              onChange={(e) => setRoomAddPro(e.target.value)}
            ></textarea>

            <div className="roomTypeExample">
              <p onClick={openRoomTypeExample}>
                Example
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 1.5L8.75 9L1.25 16.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              {showRoomTypeExample && (
                <div className="roomTypeExamplePara">
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={(e) =>
                      getEx(
                        "Beautiful classic bedroom with the colors of gold, purple and grey."
                      )
                    }
                  >
                    Beautiful classic bedroom with the colors of gold, purple
                    and grey.
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={(e) =>
                      getEx(
                        "Beautiful Scandinavian living room with colors of white and beige, modular furniture with cotton textiles."
                      )
                    }
                  >
                    Beautiful Scandinavian living room with colors of white and
                    beige, modular furniture with cotton textiles.
                  </p>
                </div>
              )}
            </div>
            <label htmlFor="">Avoid Things</label>
            <textarea
              value={avoidAddPro}
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Enter the prompt and describe the things or colors that you do not like it in design."
              onChange={(e) => setAvoidAddPro(e.target.value)}
            ></textarea>

            <div className="roomTypeExample">
              <p onClick={openAvoidThingsExample}>
                Example
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 1.5L8.75 9L1.25 16.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>

              {showAvoidThingsExample && (
                <div className="roomTypeExamplePara">
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => getAvoidEx("Purple, carpet, window")}
                  >
                    Purple, carpet, window
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => getAvoidEx("Wood , pink")}
                  >
                    Wood , pink
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="tab-heading tab-heading-new">
            <button
              onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? "active" : ""}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "16px",
                height: "58px",
              }}
              type="button"
            >
              {t("interior")}
            </button>
            {/* <button
              onClick={() => handleTabClick(2)}
              className={activeTab === 2 ? "active" : ""}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "16px",
                height: "58px",
              }}
              type="button"
            >
              {t("exterior")}
            </button> */}
            <button
              onClick={() => handleTabClick(3)}
              className={activeTab === 3 ? "active" : ""}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "16px",
                height: "58px",
              }}
              type="button"
            >
              {t("landscape")}
            </button>
          </div>
          <div className="selectOptionDiv">
            {activeTab == 1 ? (
              <>
                <label htmlFor="">{t("mask_category")} *</label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  // defaultValue={
                  //   activeTab == 1
                  //     ? maskCategoriesForInt[0]
                  //     : maskCategoriesForExt[0]
                  // }
                  options={
                    // activeTab == 1 ? maskCategoriesForInt : maskCategoriesForExt
                    mask_categories
                  }
                  styles={customStyles}
                  isSearchable={false}
                  onChange={(e) => setMaskCategory(e.value)}
                />
                <label htmlFor="">{t("masking_elemnt")} *</label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  // defaultValue={mask_elements[0]}
                  options={mask_elements}
                  styles={customStyles}
                  isSearchable={false}
                  onChange={(e) => setMaskElement(e.value)}
                />
              </>
            ) : null}
            {activeTab == 1 &&
            maskElement == "floor" &&
            maskCategory == "architectural" ? (
              <>
                <label htmlFor="">{t("material")} *</label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  // defaultValue={materials_list[0]}
                  options={materials_list}
                  styles={customStyles}
                  isSearchable={false}
                  onChange={(e) => setMaterial(e.value)}
                />
              </>
            ) : null}
            {activeTab === 1 ? (
              <>
                {maskCategory == "architectural" && maskElement == "floor" ? (
                  <></>
                ) : (
                  <>
                    <label htmlFor="">{t("color")} *</label>
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
                  </>
                )}
              </>
            ) : null}
            <label htmlFor="">{t("type")} *</label>
            <Select
              ref={selectTypeInputRef}
              className="react-select-container"
              classNamePrefix="react-select"
              // defaultValue={interiorSpaces[0]}
              options={interiorSpaces}
              styles={customStyles}
              isSearchable={false}
              onChange={(e) => {
                if (e) {
                  setTypeLabel(e.label);
                  setType(e.value);
                }
              }}
              // value={typeLabel}
            />
            {/* <button type="button" onClick={()=>onClear()}>ok</button> */}
            <label htmlFor="">{t("style")} *</label>
            <Select
              ref={selectStyleInputRef}
              className="react-select-container"
              classNamePrefix="react-select"
              // defaultValue={interiorThemes[0]}
              options={interiorThemes}
              styles={customStyles}
              isSearchable={false}
              onChange={(e) => {
                if (e) {
                  setStyleLabel(e.label);
                  setStyle(e.value);
                }
              }}
            />
            <label htmlFor="">{t("mode")}</label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              defaultValue={modes_list[0]}
              options={modes_list}
              styles={customStyles}
              isSearchable={false}
            />
            {activeTab === 3 ? (
              <>
                {/* <label htmlFor="">Material *</label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  defaultValue={materials[0]}
                  options={materials}
                  styles={customStyles}
                  isSearchable={false}
                  onChange={(e) => setMaterial(e.value)}
                /> */}
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
              </>
            ) : null}
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
          </div>
          <PrimaryButton
            text={t("generate_image")}
            onClick={(e) => handleAi(e)}
          />
        </form>
      </div>
    </form>
  );
};

export default CustomDesignForm;
