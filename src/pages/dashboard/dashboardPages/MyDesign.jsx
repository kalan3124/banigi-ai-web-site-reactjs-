import React, { useState } from "react";
import InteriorDesignDash from "../../../Components/dashboard_component/InteriorDesignDash";
import ExteriorDesignDash from "../../../Components/dashboard_component/ExteriorDesignDash";
import LandscapeDesignDash from "../../../Components/dashboard_component/LandscapeDesignDash";
import CustomDesignDash from "../../../Components/dashboard_component/CustomDesignDash";
import AllDesignDash from "../../../Components/dashboard_component/AllDesignDash";
import { useEffect } from "react";
import { getThemeList } from "../../../apis/OptionsApis";
import checkAuth from "../../../auth/CheckAuth";
import { getAllImagesByUid } from "../../../apis/usersApis";
import { t } from "i18next";

const MyDesign = () => {
  const { authData } = checkAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // loadData();
  }, []);

  const loadData = async () => {
    let data = await getAllImagesByUid(setLoader, localStorage.getItem("uid"));
    // console.log(data.images);
    return data.images;
  };

  const tabs = [
    {
      title: t("all"),
      content: <AllDesignDash dataLoad={loadData} setLoader={setLoader} />,
    },
    {
      title: t("interior_design"),
      content: <InteriorDesignDash dataLoad={loadData} setLoader={setLoader} />,
    },
    // {
    //   title: t("exterior_design"),
    //   content: <ExteriorDesignDash dataLoad={loadData} setLoader={setLoader} />,
    // },
    {
      title: t("landscape_design"),
      content: (
        <LandscapeDesignDash dataLoad={loadData} setLoader={setLoader} />
      ),
    },
    {
      title: t("custom_design"),
      content: <CustomDesignDash dataLoad={loadData} setLoader={setLoader} />,
    },
  ];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <button
        key={index}
        onClick={() => handleTabClick(index)}
        className={activeTab === index ? "active" : ""}
      >
        {tab.title}
      </button>
    ));
  };
  return (
    <>
      {loader ? (
        <div className="loading-state">
          <div className="loading"></div>
        </div>
      ) : null}

      <div className="myDesignSection">
        <h3>My Design</h3>

        <div className="tabs-container">
          <div className="tab-heading">{renderTabs()}</div>

          <div className="tab_content_div">
            <div className="tab-content">{tabs[activeTab]?.content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDesign;
