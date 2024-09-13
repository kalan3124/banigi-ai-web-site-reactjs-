import React, { useState } from 'react'

const TryDesignForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedName, setSelectedName] = useState("");
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setSelectedName(file.name);
    };

    return (
        <>

            <div className="tryDesignFormDiv">
                <form action="">
                    <div className="tryDesignFile">

                        <span> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.4699 14.0226C10.6105 13.8821 10.8012 13.8032 10.9999 13.8032C11.1987 13.8032 11.3893 13.8821 11.5299 14.0226L13.5299 16.0226C13.6036 16.0912 13.6627 16.174 13.7037 16.266C13.7447 16.358 13.7667 16.4573 13.7685 16.558C13.7703 16.6587 13.7518 16.7588 13.714 16.8522C13.6763 16.9455 13.6202 17.0304 13.5489 17.1016C13.4777 17.1728 13.3929 17.229 13.2995 17.2667C13.2061 17.3044 13.1061 17.3229 13.0054 17.3212C12.9047 17.3194 12.8054 17.2973 12.7134 17.2563C12.6214 17.2154 12.5386 17.1563 12.4699 17.0826L11.7499 16.3626V20.5526C11.7499 20.7515 11.6709 20.9422 11.5302 21.0829C11.3896 21.2235 11.1988 21.3026 10.9999 21.3026C10.801 21.3026 10.6102 21.2235 10.4696 21.0829C10.3289 20.9422 10.2499 20.7515 10.2499 20.5526V16.3626L9.52991 17.0826C9.46125 17.1563 9.37845 17.2154 9.28645 17.2563C9.19445 17.2973 9.09513 17.3194 8.99443 17.3212C8.89373 17.3229 8.7937 17.3044 8.70031 17.2667C8.60692 17.229 8.52209 17.1728 8.45087 17.1016C8.37965 17.0304 8.32351 16.9455 8.28579 16.8522C8.24807 16.7588 8.22954 16.6587 8.23132 16.558C8.23309 16.4573 8.25514 16.358 8.29613 16.266C8.33712 16.174 8.39622 16.0912 8.46991 16.0226L10.4699 14.0226Z" fill="#C79952" />
                            <path d="M11.476 2.30249C8.726 2.30249 6.512 4.50249 6.512 7.19949C6.512 7.66149 6.577 8.10849 6.697 8.53049C7.194 8.67449 7.66 8.89049 8.08 9.17049C8.16639 9.22282 8.24132 9.29207 8.3003 9.37407C8.35927 9.45607 8.40108 9.54914 8.4232 9.64769C8.44533 9.74625 8.44732 9.84825 8.42906 9.9476C8.41079 10.0469 8.37265 10.1416 8.31692 10.2258C8.26118 10.31 8.18901 10.3822 8.10472 10.4378C8.02044 10.4935 7.92578 10.5315 7.82642 10.5497C7.72706 10.5679 7.62506 10.5658 7.52652 10.5436C7.42799 10.5214 7.33495 10.4795 7.253 10.4205C6.66992 10.0341 5.98546 9.82918 5.286 9.83149C3.325 9.83149 1.75 11.4015 1.75 13.3175C1.75 15.2335 3.325 16.8025 5.286 16.8025C5.48491 16.8025 5.67568 16.8815 5.81633 17.0222C5.95698 17.1628 6.036 17.3536 6.036 17.5525C6.036 17.7514 5.95698 17.9422 5.81633 18.0828C5.67568 18.2235 5.48491 18.3025 5.286 18.3025C2.513 18.3025 0.25 16.0785 0.25 13.3175C0.25 10.6125 2.42 8.42449 5.114 8.33449C5.04614 7.95997 5.012 7.58011 5.012 7.19949C5.012 3.65849 7.914 0.80249 11.476 0.80249C14.634 0.80249 17.272 3.04649 17.831 6.02349C20.131 7.00049 21.75 9.26149 21.75 11.9055C21.75 14.9795 19.562 17.5365 16.657 18.1585C16.4625 18.2001 16.2594 18.1628 16.0924 18.0547C15.9254 17.9466 15.8081 17.7765 15.7665 17.582C15.7249 17.3875 15.7622 17.1843 15.8703 17.0173C15.9784 16.8503 16.1485 16.7331 16.343 16.6915C18.583 16.2115 20.25 14.2455 20.25 11.9055C20.25 9.76849 18.86 7.94349 16.912 7.27749C16.3886 7.09848 15.8392 7.00725 15.286 7.00749C14.703 7.00749 14.146 7.10749 13.628 7.28749C13.4414 7.34842 13.2383 7.33375 13.0624 7.24664C12.8865 7.15953 12.7517 7.00692 12.6871 6.82158C12.6224 6.63623 12.633 6.43292 12.7166 6.25529C12.8001 6.07765 12.95 5.93986 13.134 5.87149C14.1039 5.53291 15.1401 5.4284 16.158 5.56649C15.8085 4.60668 15.1712 3.77813 14.3333 3.19396C13.4953 2.60979 12.4975 2.29846 11.476 2.30249Z" fill="#C79952" />
                        </svg>{selectedName || "Tap to upload interior image Or Drag Image here direclty"}</span>
                        <input type="file" name="" id="" onChange={handleFileChange} />
                    </div>
                    <div className="selectOptionDiv">


                        <label htmlFor="">Interior Type</label>
                        <select name="" id="" className='custom-select'>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                        </select>
                        <label htmlFor="">Interior Type</label>
                        <select name="" id="" className='custom-select'>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                        </select>
                        <label htmlFor="">Interior Type</label>
                        <select name="" id="" className='custom-select'>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                        </select>
                        <label htmlFor="">Interior Type</label>
                        <select name="" id="" className='custom-select'>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                        </select>
                        <label htmlFor="">Interior Type</label>
                        <select name="" id="" className='custom-select'>
                            <option value="">Bed Room</option>
                            <option value="">Befdsd Room</option>
                            <option value="">Bed Room</option>
                            <option value="">Bed Room</option>
                        </select>
                        <label htmlFor="">AI Intervention</label>
                        <div className="intervation_radio">
                            <div className="veryLowInter">
                                <input type="radio" name="intervation" id="" />
                                <label htmlFor="">Very Low</label>
                            </div>

                            <div className="LowInter">
                                <input type="radio" name="intervation" id="" />
                                <label htmlFor="">Low</label>
                            </div>

                            <div className="MediumInter">
                                <input type="radio" name="intervation" id="" />
                                <label htmlFor="">Medium</label>
                            </div>

                            <div className="ExtremeInter">
                                <input type="radio" name="intervation" id="" />
                                <label htmlFor="">Extreme</label>
                            </div>

                        </div>

                        <div className="customAiIntervationForm">
                            <div className="customAiIntervationLabel">
                                <label htmlFor="">Custom AI Intervation
                                </label>
                                <input type="checkbox" name="" id="" />
                            </div>

                            <textarea name="" id="" cols="30" rows="5" placeholder='e.g A clean looking living room with black and yellow textures and a coffee table made from hardwood.'></textarea>
                        </div>


                    </div>

                    <button>Generate Image</button>
                </form>
            </div>

        </>
    )
}

export default TryDesignForm
