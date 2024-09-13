import React from 'react'
import downloadImg from "../../../assets/downloadApp.png"
import appStore from "../../../assets/appStore.png"
import playStore from "../../../assets/playStore.png"
import { t } from 'i18next'



const DownloadApp = () => {
    return (
        <>

            <div className="downloadAppDiv">

                <div className="downloadAppInfo">
                    <div className="downloadAppText">
                        <h2>
                            {t("download_from_app_and_play_store")}
                        </h2>
                        <p>{t("download_from_app_and_play_store")}</p>
                        <div className="downloadBtn">
                            <img src={appStore} alt="" />
                            <img src={playStore} alt="" />
                        </div>
                    </div>

                    <div className="DownloadAppImg">
                        <div className="mobileImgDiv">
                        <img src={downloadImg} alt="" />
                        </div>
                       
                    </div>
                </div>



            </div>

        </>
    )
}

export default DownloadApp
