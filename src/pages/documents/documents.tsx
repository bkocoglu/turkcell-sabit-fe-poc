import React from "react";
import styles from "./documents.module.scss";
import plusBlue from "../../assets/images/plus-blue.svg";
import plusBlack from "../../assets/images/plusBlack.svg";
import plusGreen from "../../assets/images/plusGreen.svg";
import dokuman from "../../assets/images/dokuman-ico.svg";
import tablo from "../../assets/images/tablo-ico.svg";
import sunum from "../../assets/images/sunum-ico.svg";
import share from "../../assets/images/share.svg";
import lifebox from "../../assets/images/lifebox-dashboard.png";
import plusWhite from "../../assets/images/plus-white.svg";
import { PageTitle } from "@components/dashboard/pageTitle/pageTitle";
import { getTranslateValue } from "@components/translate/Language";
import { useSelector } from "react-redux";
import { RootStore } from "@redux/store";

export const Documents = () => {
  const { data } = useSelector((state: RootStore) => state.parameters);

  return (
    <div className={styles.panel + " " + styles.documentPanel}>
      <div className={styles.documentTitleArea}>
        <PageTitle title={getTranslateValue("our-document", "Dökümanlarım")} />
        <a className={styles.blackButton}>
          <img src={plusWhite} alt="" />
        </a>
        <div className={styles.buttons}>
          <a className={styles.wordButton} href="#">
            <img src={plusBlack} />
            <span>{getTranslateValue("document", "Doküman")}</span>
            <img src={dokuman} width="24" />
          </a>
          <a className={styles.excel} href="#">
            <img src={plusBlue} />
            <span>{getTranslateValue("table", "Tablo")}</span>
            <img src={tablo} width="24" />
          </a>
          <a className={styles.ppx} href="#">
            <img src={plusGreen} />
            <span>{getTranslateValue("presentation", "Sunum")}</span>
            <img src={sunum} width="24" />
          </a>
        </div>
      </div>
      <div className={styles.searchArea}>
        <h2 className={styles.lastUpdateText}>
          {getTranslateValue("document-recently-updated", "Son Güncellenenler")}
        </h2>
      </div>
      <div className={styles.whiteBackground}>
        <div className={styles.filterButtons}>
          <div className={styles.filter}>
            <input type="radio" id="all" name="filter" value="all" />
            <label htmlFor="all">
              <svg
                version="1.1"
                width="12px"
                height="12px"
                viewBox="0 0 12.0 12.0"
                fill="#696d80"
              >
                <defs>
                  <clipPath id="i0">
                    <path d="M1440,0 L1440,720 L0,720 L0,0 L1440,0 Z"></path>
                  </clipPath>
                  <clipPath id="i1">
                    <path d="M10.4,0 C11.1731986,0 11.8,0.62680135 11.8,1.4 L11.8,10.4 C11.8,11.1731986 11.1731986,11.8 10.4,11.8 L1.4,11.8 C0.62680135,11.8 0,11.1731986 0,10.4 L0,1.4 C0,0.62680135 0.62680135,0 1.4,0 Z M10.3,1.4 L1.5,1.4 L1.4,1.5 L1.4,10.3 L1.5,10.4 L10.3,10.4 L10.4,10.3 L10.4,1.5 L10.3,1.4 Z M7.6,3.7 C7.87614237,3.7 8.1,3.92385763 8.1,4.2 L8.1,7.6 C8.1,7.87614237 7.87614237,8.1 7.6,8.1 L4.2,8.1 C3.92385763,8.1 3.7,7.87614237 3.7,7.6 L3.7,4.2 C3.7,3.92385763 3.92385763,3.7 4.2,3.7 L7.6,3.7 Z"></path>
                  </clipPath>
                </defs>
                <g transform="translate(-319.0 -261.0)">
                  <g clip-path="url(#i0)">
                    <g transform="translate(307.0 201.0)">
                      <g transform="translate(0.0 50.0)">
                        <g transform="translate(11.999999999999908 10.0)">
                          <g transform="translate(0.09999999999990905 0.09999999999990905)">
                            <g clip-path="url(#i1)">
                              <polygon
                                points="0,0 11.8,0 11.8,11.8 0,11.8 0,0"
                                stroke="none"
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span>{getTranslateValue("all", "Tümü")}</span>
            </label>
          </div>
          <div className={styles.filter}>
            <input type="radio" id="docs" name="filter" value="docs" />
            <label htmlFor="docs">
              <svg
                version="1.1"
                width="12px"
                height="12px"
                viewBox="0 0 12.0 12.0"
                fill="#696d80"
              >
                <defs>
                  <clipPath id="i2">
                    <path d="M1440,0 L1440,720 L0,720 L0,0 L1440,0 Z"></path>
                  </clipPath>
                  <clipPath id="i3">
                    <path d="M6.74560799,0 C6.97870298,0 7.20110407,0.0868879542 7.36751227,0.24362456 L11.3929206,4.03507755 C11.563973,4.19618846 11.66,4.41624751 11.66,4.64794872 L11.66,10.551368 C11.66,11.2208745 11.0934708,11.76 10.3971506,11.76 L1.26284936,11.76 C0.566529179,11.76 0,11.2208745 0,10.551368 L0,1.20863248 C0,0.539125912 0.566529273,0 1.26284936,0 L6.74560799,0 Z M1.385,1.313 L1.355,10.416 L10.274,10.446 L10.3040103,5.392 L7.67664247,5.39290598 C6.74880409,5.39290598 5.99664247,4.64074436 5.99664247,3.71291401 L5.996,1.341 L1.385,1.313 Z M8.62315789,8.1 C9.07152068,8.1 9.43845115,8.44746897 9.44281352,8.879573 C9.44281352,9.31120329 9.07538248,9.659145 8.62315789,9.659145 L3.04965517,9.659145 C2.59743069,9.659145 2.23,9.31120339 2.23,8.879573 C2.23,8.44794244 2.59743088,8.1 3.04965517,8.1 L8.62315789,8.1 Z M7.46829487,6.05 C7.91867016,6.05 8.28357103,6.39593843 8.28794887,6.829573 C8.28794887,7.26120362 7.92051909,7.609145 7.46829487,7.609145 L4.19424728,7.609145 C3.7420228,7.609145 3.37459211,7.26120339 3.37459211,6.829573 C3.37459211,6.39794244 3.74202299,6.05 4.19424728,6.05 L7.46829487,6.05 Z M7.355,2.106 L7.35664247,3.71290598 C7.35664247,3.8896371 7.49991135,4.03290598 7.67662736,4.03290599 L9.45543652,4.08384361 L7.355,2.106 Z"></path>
                  </clipPath>
                </defs>
                <g transform="translate(-405.0 -261.0)">
                  <g clip-path="url(#i2)">
                    <g transform="translate(307.0 201.0)">
                      <g transform="translate(0.0 50.0)">
                        <g transform="translate(86.0 0.0)">
                          <g transform="translate(12.000000000000092 9.999999999999982)">
                            <g transform="translate(0.17000000000007276 0.11999999999989086)">
                              <g clip-path="url(#i3)">
                                <polygon
                                  points="0,0 11.66,0 11.66,11.76 0,11.76 0,0"
                                  stroke="none"
                                ></polygon>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span>{getTranslateValue("document", "Doküman")}</span>
            </label>
          </div>
          <div className={styles.filter}>
            <input type="radio" id="table" name="filter" value="table" />
            <label htmlFor="table">
              <svg
                version="1.1"
                width="12px"
                height="12px"
                viewBox="0 0 12.0 12.0"
                fill="#696d80"
              >
                <defs>
                  <clipPath id="i4">
                    <path d="M1440,0 L1440,720 L0,720 L0,0 L1440,0 Z"></path>
                  </clipPath>
                  <clipPath id="i5">
                    <path d="M9.90443058,0 C10.4309241,0 10.86,0.468083095 10.86,1.04880342 L10.86,10.311197 C10.86,10.8919172 10.4309241,11.36 9.90443058,11.36 L0.955569801,11.36 C0.429076163,11.36 0,10.8919171 0,10.311197 L0,1.04880342 C0,0.468083182 0.42907625,0 0.955569801,0 L9.90443058,0 Z M1.18899999,8.67795985 L1.11983333,10.061 L3.159,10.131 L3.159,8.746 L1.18899999,8.67795985 Z M7.698,8.678 L7.628,10.061 L9.66925,10.131012 L9.669,8.746 L7.698,8.678 Z M4.49,8.678 L4.42,10.061 L6.368,10.131 L6.368,8.745 L4.49,8.678 Z M1.189,5.978 L1.119,7.31 L3.159,7.38 L3.159,6.046 L1.189,5.978 Z M4.49,5.978 L4.42,7.31 L6.368,7.38 L6.368,6.045 L4.49,5.978 Z M7.698,5.978 L7.628,7.31 L9.669,7.38 L9.669,6.046 L7.698,5.978 Z M1.189,2.974 L1.119,4.61 L3.159,4.68 L3.159,3.042 L1.189,2.974 Z M4.49,2.974 L4.42,4.61 L6.368,4.68 L6.368,3.041 L4.49,2.974 Z M7.698,2.974 L7.628,4.61 L9.669,4.68 L9.669,3.042 L7.698,2.974 Z"></path>
                  </clipPath>
                </defs>
                <g transform="translate(-517.0 -261.0)">
                  <g clip-path="url(#i4)">
                    <g transform="translate(307.0 201.0)">
                      <g transform="translate(0.0 50.0)">
                        <g transform="translate(198.0 0.0)">
                          <g transform="translate(12.0000000000001 9.999999999999826)">
                            <g transform="translate(0.5699999999999363 0.31999999999970896)">
                              <g clip-path="url(#i5)">
                                <polygon
                                  points="0,0 10.86,0 10.86,11.36 0,11.36 0,0"
                                  stroke="none"
                                ></polygon>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span>{getTranslateValue("table", "Tablo")}</span>
            </label>
          </div>
          <div className={styles.filter}>
            <input type="radio" id="pptx" name="filter" value="pptx" />
            <label htmlFor="pptx">
              <svg
                version="1.1"
                width="12px"
                height="12px"
                viewBox="0 0 12.0 12.0"
                fill="#696d80"
              >
                <defs>
                  <clipPath id="i6">
                    <path d="M1440,0 L1440,720 L0,720 L0,0 L1440,0 Z"></path>
                  </clipPath>
                  <clipPath id="i7">
                    <path d="M9.99189169,0 C10.7701741,0 11.4,0.63413998 11.4,1.41637961 C11.4,1.73585122 11.2943189,2.03889021 11.1050683,2.28415328 L11.0590075,2.337 L11.0596858,9.241939 C11.0596858,9.78785963 10.6457036,10.237932 10.1122953,10.2955153 L9.99627291,10.301739 L8.27700751,10.3 L8.73776531,10.8077529 C8.9173372,11.1291748 8.82670799,11.5256933 8.53709543,11.7488533 L8.44431338,11.810352 C8.33509863,11.8689982 8.21123405,11.9 8.0874881,11.9 C7.82041884,11.9 7.57413259,11.7568741 7.46143651,11.5566149 L6.43700751,10.447 L6.43837963,11.162427 C6.43837963,11.4988266 6.21094802,11.7869108 5.88347879,11.8745013 L5.78236429,11.8946114 L5.69450529,11.9 C5.28379069,11.9 4.95063094,11.568811 4.95063098,11.1625473 L4.94900751,10.448 L3.95489608,11.5211376 C3.85999486,11.6870931 3.70674166,11.8092936 3.51926196,11.866588 L3.40285996,11.8930067 L3.30421123,11.9 C3.17246257,11.9 3.04107077,11.8650074 2.93797546,11.8024543 C2.58493656,11.602512 2.45689786,11.1577242 2.68030576,10.7688293 L3.10800751,10.3 L1.39664007,10.301739 C0.84773734,10.301739 0.397161887,9.88806141 0.339524728,9.35735209 L0.333295635,9.24194547 L0.333007505,2.329 L0.288186518,2.27662949 C0.133147254,2.07307606 0.0356172323,1.83060935 0.00804720849,1.57275241 L0,1.41637961 C0,0.63414459 0.629853962,0 1.40814092,0 L9.99189169,0 Z M9.67100751,2.831 L1.72200751,2.831 L1.72300751,8.924 L4.5722061,8.9255353 C4.62561799,8.91708811 4.67974691,8.9144332 4.72357788,8.91681166 L4.78022403,8.9240595 L5.59629549,8.92444977 L5.66641938,8.91896406 L5.71086148,8.91872193 L5.7668095,8.92400008 L6.6105401,8.92474181 C6.66748169,8.91764265 6.72500121,8.91718686 6.76088804,8.92214169 L9.67200751,8.924 L9.67100751,2.831 Z"></path>
                  </clipPath>
                </defs>
                <g transform="translate(-603.0 -261.0)">
                  <g clip-path="url(#i6)">
                    <g transform="translate(307.0 201.0)">
                      <g transform="translate(0.0 50.0)">
                        <g transform="translate(284.0 0.0)">
                          <g transform="translate(12.00000000000005 10.0)">
                            <g transform="translate(0.29999249497700475 0.09999999999990905)">
                              <g clip-path="url(#i7)">
                                <polygon
                                  points="0,0 11.4,0 11.4,11.9 0,11.9 0,0"
                                  stroke="none"
                                ></polygon>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span>{getTranslateValue("presentation", "Sunum")}</span>
            </label>
          </div>
        </div>
        <div className={styles.lastUpdateTable}>
          <a href="#" className={styles.tableItem}>
            <div className={styles.tableItemDetail}>
              <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1">
                <title>74313DC1-C54F-4A82-8F91-D84857B4FA90</title>
                <g
                  id="Main"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="1.0.0.0.L.D.SKLS_Dokumanlariniz_Normal_Kullanici"
                    transform="translate(-307.000000, -303.000000)"
                    fill="#696D80"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Group-5"
                      transform="translate(307.000000, 293.000000)"
                    >
                      <g
                        id="Light/icons/24px/word"
                        transform="translate(0.000000, 10.500000)"
                      >
                        <path
                          d="M15.415608,2.1 C15.6404316,2.1 15.8556597,2.18355312 16.0169432,2.33546289 L20.0423515,6.12691588 C20.2071943,6.28217809 20.3,6.49425923 20.3,6.71794872 L20.3,20.821368 C20.3,21.4766726 19.7443797,22 19.0671506,22 L4.93284936,22 C4.25562033,22 3.7,21.4766726 3.7,20.821368 L3.7,3.27863248 C3.7,2.62332786 4.25562033,2.1 4.93284936,2.1 L15.415608,2.1 Z M14.696,3.382 L5.025,3.383 L5.025,20.716 L18.974,20.716 L18.973,7.432 L16.3466425,7.43290598 C15.4353726,7.43290598 14.6966425,6.69417582 14.6966425,5.78290598 L14.696,3.382 Z M15.7885658,17.197435 C16.2198174,17.197435 16.5740206,17.531052 16.5782214,17.947008 C16.5782214,18.3625938 16.2236253,18.69658 15.7885658,18.69658 L8.21506307,18.69658 C7.78000366,18.69658 7.42540789,18.3625939 7.42540789,17.947008 C7.42540789,17.5314221 7.78000366,17.197435 8.21506307,17.197435 Z M14.137024,14.49829 C14.570728,14.49829 14.9224663,14.8307954 14.9266783,15.247863 C14.9266783,15.663449 14.5720833,15.997435 14.137024,15.997435 L9.86297641,15.997435 C9.427917,15.997435 9.07332123,15.6634489 9.07332123,15.247863 C9.07332123,14.8322771 9.427917,14.49829 9.86297641,14.49829 Z M15.7885658,11.799145 C16.2198174,11.799145 16.5740206,12.132762 16.5782214,12.548718 C16.5782214,12.9643038 16.2236253,13.29829 15.7885658,13.29829 L8.21506307,13.29829 C7.78000366,13.29829 7.42540789,12.9643039 7.42540789,12.548718 C7.42540789,12.1331321 7.78000366,11.799145 8.21506307,11.799145 Z M14.137024,9.1 C14.5719069,9.1 14.9224829,9.43020154 14.9266783,9.849573 C14.9266783,10.265159 14.5720833,10.599145 14.137024,10.599145 L9.86297641,10.599145 C9.427917,10.599145 9.07332123,10.2651589 9.07332123,9.849573 C9.07332123,9.43398713 9.427917,9.1 9.86297641,9.1 Z M15.996,4.108 L15.9966425,5.78290598 C15.9966425,5.97620565 16.1533428,6.13290598 16.3466425,6.13290598 L18.146,6.132 L15.996,4.108 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <div className={styles.name}>Aarhus</div>
                <div className={styles.path}>
                  lifebox.com/m/lorem/ipsum/dolor
                </div>
              </div>
            </div>
            <div className={styles.tableItemDate}>27 Jun</div>
            <a href="#" className={styles.tableItemShare}>
              <img src={share} alt="" />
            </a>
          </a>
          <a href="#" className={styles.tableItem}>
            <div className={styles.tableItemDetail}>
              <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1">
                <title>74313DC1-C54F-4A82-8F91-D84857B4FA90</title>
                <g
                  id="Main"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="1.0.0.0.L.D.SKLS_Dokumanlariniz_Normal_Kullanici"
                    transform="translate(-307.000000, -303.000000)"
                    fill="#696D80"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Group-5"
                      transform="translate(307.000000, 293.000000)"
                    >
                      <g
                        id="Light/icons/24px/word"
                        transform="translate(0.000000, 10.500000)"
                      >
                        <path
                          d="M15.415608,2.1 C15.6404316,2.1 15.8556597,2.18355312 16.0169432,2.33546289 L20.0423515,6.12691588 C20.2071943,6.28217809 20.3,6.49425923 20.3,6.71794872 L20.3,20.821368 C20.3,21.4766726 19.7443797,22 19.0671506,22 L4.93284936,22 C4.25562033,22 3.7,21.4766726 3.7,20.821368 L3.7,3.27863248 C3.7,2.62332786 4.25562033,2.1 4.93284936,2.1 L15.415608,2.1 Z M14.696,3.382 L5.025,3.383 L5.025,20.716 L18.974,20.716 L18.973,7.432 L16.3466425,7.43290598 C15.4353726,7.43290598 14.6966425,6.69417582 14.6966425,5.78290598 L14.696,3.382 Z M15.7885658,17.197435 C16.2198174,17.197435 16.5740206,17.531052 16.5782214,17.947008 C16.5782214,18.3625938 16.2236253,18.69658 15.7885658,18.69658 L8.21506307,18.69658 C7.78000366,18.69658 7.42540789,18.3625939 7.42540789,17.947008 C7.42540789,17.5314221 7.78000366,17.197435 8.21506307,17.197435 Z M14.137024,14.49829 C14.570728,14.49829 14.9224663,14.8307954 14.9266783,15.247863 C14.9266783,15.663449 14.5720833,15.997435 14.137024,15.997435 L9.86297641,15.997435 C9.427917,15.997435 9.07332123,15.6634489 9.07332123,15.247863 C9.07332123,14.8322771 9.427917,14.49829 9.86297641,14.49829 Z M15.7885658,11.799145 C16.2198174,11.799145 16.5740206,12.132762 16.5782214,12.548718 C16.5782214,12.9643038 16.2236253,13.29829 15.7885658,13.29829 L8.21506307,13.29829 C7.78000366,13.29829 7.42540789,12.9643039 7.42540789,12.548718 C7.42540789,12.1331321 7.78000366,11.799145 8.21506307,11.799145 Z M14.137024,9.1 C14.5719069,9.1 14.9224829,9.43020154 14.9266783,9.849573 C14.9266783,10.265159 14.5720833,10.599145 14.137024,10.599145 L9.86297641,10.599145 C9.427917,10.599145 9.07332123,10.2651589 9.07332123,9.849573 C9.07332123,9.43398713 9.427917,9.1 9.86297641,9.1 Z M15.996,4.108 L15.9966425,5.78290598 C15.9966425,5.97620565 16.1533428,6.13290598 16.3466425,6.13290598 L18.146,6.132 L15.996,4.108 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <div className={styles.name}>Aarhus</div>
                <div className={styles.path}>
                  lifebox.com/m/lorem/ipsum/dolor
                </div>
              </div>
            </div>
            <div className={styles.tableItemDate}>27 Jun</div>
            <a href="#" className={styles.tableItemShare}>
              <img src={share} alt="" />
            </a>
          </a>
          <a href="#" className={styles.tableItem}>
            <div className={styles.tableItemDetail}>
              <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1">
                <title>74313DC1-C54F-4A82-8F91-D84857B4FA90</title>
                <g
                  id="Main"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="1.0.0.0.L.D.SKLS_Dokumanlariniz_Normal_Kullanici"
                    transform="translate(-307.000000, -303.000000)"
                    fill="#696D80"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Group-5"
                      transform="translate(307.000000, 293.000000)"
                    >
                      <g
                        id="Light/icons/24px/word"
                        transform="translate(0.000000, 10.500000)"
                      >
                        <path
                          d="M15.415608,2.1 C15.6404316,2.1 15.8556597,2.18355312 16.0169432,2.33546289 L20.0423515,6.12691588 C20.2071943,6.28217809 20.3,6.49425923 20.3,6.71794872 L20.3,20.821368 C20.3,21.4766726 19.7443797,22 19.0671506,22 L4.93284936,22 C4.25562033,22 3.7,21.4766726 3.7,20.821368 L3.7,3.27863248 C3.7,2.62332786 4.25562033,2.1 4.93284936,2.1 L15.415608,2.1 Z M14.696,3.382 L5.025,3.383 L5.025,20.716 L18.974,20.716 L18.973,7.432 L16.3466425,7.43290598 C15.4353726,7.43290598 14.6966425,6.69417582 14.6966425,5.78290598 L14.696,3.382 Z M15.7885658,17.197435 C16.2198174,17.197435 16.5740206,17.531052 16.5782214,17.947008 C16.5782214,18.3625938 16.2236253,18.69658 15.7885658,18.69658 L8.21506307,18.69658 C7.78000366,18.69658 7.42540789,18.3625939 7.42540789,17.947008 C7.42540789,17.5314221 7.78000366,17.197435 8.21506307,17.197435 Z M14.137024,14.49829 C14.570728,14.49829 14.9224663,14.8307954 14.9266783,15.247863 C14.9266783,15.663449 14.5720833,15.997435 14.137024,15.997435 L9.86297641,15.997435 C9.427917,15.997435 9.07332123,15.6634489 9.07332123,15.247863 C9.07332123,14.8322771 9.427917,14.49829 9.86297641,14.49829 Z M15.7885658,11.799145 C16.2198174,11.799145 16.5740206,12.132762 16.5782214,12.548718 C16.5782214,12.9643038 16.2236253,13.29829 15.7885658,13.29829 L8.21506307,13.29829 C7.78000366,13.29829 7.42540789,12.9643039 7.42540789,12.548718 C7.42540789,12.1331321 7.78000366,11.799145 8.21506307,11.799145 Z M14.137024,9.1 C14.5719069,9.1 14.9224829,9.43020154 14.9266783,9.849573 C14.9266783,10.265159 14.5720833,10.599145 14.137024,10.599145 L9.86297641,10.599145 C9.427917,10.599145 9.07332123,10.2651589 9.07332123,9.849573 C9.07332123,9.43398713 9.427917,9.1 9.86297641,9.1 Z M15.996,4.108 L15.9966425,5.78290598 C15.9966425,5.97620565 16.1533428,6.13290598 16.3466425,6.13290598 L18.146,6.132 L15.996,4.108 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <div className={styles.name}>Aarhus</div>
                <div className={styles.path}>
                  lifebox.com/m/lorem/ipsum/dolor
                </div>
              </div>
            </div>
            <div className={styles.tableItemDate}>27 Jun</div>
            <a href="#" className={styles.tableItemShare}>
              <img src={share} alt="" />
            </a>
          </a>
          <a href="#" className={styles.tableItem}>
            <div className={styles.tableItemDetail}>
              <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1">
                <title>74313DC1-C54F-4A82-8F91-D84857B4FA90</title>
                <g
                  id="Main"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="1.0.0.0.L.D.SKLS_Dokumanlariniz_Normal_Kullanici"
                    transform="translate(-307.000000, -303.000000)"
                    fill="#696D80"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Group-5"
                      transform="translate(307.000000, 293.000000)"
                    >
                      <g
                        id="Light/icons/24px/word"
                        transform="translate(0.000000, 10.500000)"
                      >
                        <path
                          d="M15.415608,2.1 C15.6404316,2.1 15.8556597,2.18355312 16.0169432,2.33546289 L20.0423515,6.12691588 C20.2071943,6.28217809 20.3,6.49425923 20.3,6.71794872 L20.3,20.821368 C20.3,21.4766726 19.7443797,22 19.0671506,22 L4.93284936,22 C4.25562033,22 3.7,21.4766726 3.7,20.821368 L3.7,3.27863248 C3.7,2.62332786 4.25562033,2.1 4.93284936,2.1 L15.415608,2.1 Z M14.696,3.382 L5.025,3.383 L5.025,20.716 L18.974,20.716 L18.973,7.432 L16.3466425,7.43290598 C15.4353726,7.43290598 14.6966425,6.69417582 14.6966425,5.78290598 L14.696,3.382 Z M15.7885658,17.197435 C16.2198174,17.197435 16.5740206,17.531052 16.5782214,17.947008 C16.5782214,18.3625938 16.2236253,18.69658 15.7885658,18.69658 L8.21506307,18.69658 C7.78000366,18.69658 7.42540789,18.3625939 7.42540789,17.947008 C7.42540789,17.5314221 7.78000366,17.197435 8.21506307,17.197435 Z M14.137024,14.49829 C14.570728,14.49829 14.9224663,14.8307954 14.9266783,15.247863 C14.9266783,15.663449 14.5720833,15.997435 14.137024,15.997435 L9.86297641,15.997435 C9.427917,15.997435 9.07332123,15.6634489 9.07332123,15.247863 C9.07332123,14.8322771 9.427917,14.49829 9.86297641,14.49829 Z M15.7885658,11.799145 C16.2198174,11.799145 16.5740206,12.132762 16.5782214,12.548718 C16.5782214,12.9643038 16.2236253,13.29829 15.7885658,13.29829 L8.21506307,13.29829 C7.78000366,13.29829 7.42540789,12.9643039 7.42540789,12.548718 C7.42540789,12.1331321 7.78000366,11.799145 8.21506307,11.799145 Z M14.137024,9.1 C14.5719069,9.1 14.9224829,9.43020154 14.9266783,9.849573 C14.9266783,10.265159 14.5720833,10.599145 14.137024,10.599145 L9.86297641,10.599145 C9.427917,10.599145 9.07332123,10.2651589 9.07332123,9.849573 C9.07332123,9.43398713 9.427917,9.1 9.86297641,9.1 Z M15.996,4.108 L15.9966425,5.78290598 C15.9966425,5.97620565 16.1533428,6.13290598 16.3466425,6.13290598 L18.146,6.132 L15.996,4.108 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <div className={styles.name}>Aarhus</div>
                <div className={styles.path}>
                  lifebox.com/m/lorem/ipsum/dolor
                </div>
              </div>
            </div>
            <div className={styles.tableItemDate}>27 Jun</div>
            <a href="#" className={styles.tableItemShare}>
              <img src={share} alt="" />
            </a>
          </a>
          <a href="#" className={styles.tableItem}>
            <div className={styles.tableItemDetail}>
              <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1">
                <title>74313DC1-C54F-4A82-8F91-D84857B4FA90</title>
                <g
                  id="Main"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="1.0.0.0.L.D.SKLS_Dokumanlariniz_Normal_Kullanici"
                    transform="translate(-307.000000, -303.000000)"
                    fill="#696D80"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Group-5"
                      transform="translate(307.000000, 293.000000)"
                    >
                      <g
                        id="Light/icons/24px/word"
                        transform="translate(0.000000, 10.500000)"
                      >
                        <path
                          d="M15.415608,2.1 C15.6404316,2.1 15.8556597,2.18355312 16.0169432,2.33546289 L20.0423515,6.12691588 C20.2071943,6.28217809 20.3,6.49425923 20.3,6.71794872 L20.3,20.821368 C20.3,21.4766726 19.7443797,22 19.0671506,22 L4.93284936,22 C4.25562033,22 3.7,21.4766726 3.7,20.821368 L3.7,3.27863248 C3.7,2.62332786 4.25562033,2.1 4.93284936,2.1 L15.415608,2.1 Z M14.696,3.382 L5.025,3.383 L5.025,20.716 L18.974,20.716 L18.973,7.432 L16.3466425,7.43290598 C15.4353726,7.43290598 14.6966425,6.69417582 14.6966425,5.78290598 L14.696,3.382 Z M15.7885658,17.197435 C16.2198174,17.197435 16.5740206,17.531052 16.5782214,17.947008 C16.5782214,18.3625938 16.2236253,18.69658 15.7885658,18.69658 L8.21506307,18.69658 C7.78000366,18.69658 7.42540789,18.3625939 7.42540789,17.947008 C7.42540789,17.5314221 7.78000366,17.197435 8.21506307,17.197435 Z M14.137024,14.49829 C14.570728,14.49829 14.9224663,14.8307954 14.9266783,15.247863 C14.9266783,15.663449 14.5720833,15.997435 14.137024,15.997435 L9.86297641,15.997435 C9.427917,15.997435 9.07332123,15.6634489 9.07332123,15.247863 C9.07332123,14.8322771 9.427917,14.49829 9.86297641,14.49829 Z M15.7885658,11.799145 C16.2198174,11.799145 16.5740206,12.132762 16.5782214,12.548718 C16.5782214,12.9643038 16.2236253,13.29829 15.7885658,13.29829 L8.21506307,13.29829 C7.78000366,13.29829 7.42540789,12.9643039 7.42540789,12.548718 C7.42540789,12.1331321 7.78000366,11.799145 8.21506307,11.799145 Z M14.137024,9.1 C14.5719069,9.1 14.9224829,9.43020154 14.9266783,9.849573 C14.9266783,10.265159 14.5720833,10.599145 14.137024,10.599145 L9.86297641,10.599145 C9.427917,10.599145 9.07332123,10.2651589 9.07332123,9.849573 C9.07332123,9.43398713 9.427917,9.1 9.86297641,9.1 Z M15.996,4.108 L15.9966425,5.78290598 C15.9966425,5.97620565 16.1533428,6.13290598 16.3466425,6.13290598 L18.146,6.132 L15.996,4.108 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <div className={styles.name}>Aarhus</div>
                <div className={styles.path}>
                  lifebox.com/m/lorem/ipsum/dolor
                </div>
              </div>
            </div>
            <div className={styles.tableItemDate}>27 Jun</div>
            <a href="#" className={styles.tableItemShare}>
              <img src={share} alt="" />
            </a>
          </a>
          <a href="#" className={styles.tableItem}>
            <div className={styles.tableItemDetail}>
              <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1">
                <title>74313DC1-C54F-4A82-8F91-D84857B4FA90</title>
                <g
                  id="Main"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="1.0.0.0.L.D.SKLS_Dokumanlariniz_Normal_Kullanici"
                    transform="translate(-307.000000, -303.000000)"
                    fill="#696D80"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Group-5"
                      transform="translate(307.000000, 293.000000)"
                    >
                      <g
                        id="Light/icons/24px/word"
                        transform="translate(0.000000, 10.500000)"
                      >
                        <path
                          d="M15.415608,2.1 C15.6404316,2.1 15.8556597,2.18355312 16.0169432,2.33546289 L20.0423515,6.12691588 C20.2071943,6.28217809 20.3,6.49425923 20.3,6.71794872 L20.3,20.821368 C20.3,21.4766726 19.7443797,22 19.0671506,22 L4.93284936,22 C4.25562033,22 3.7,21.4766726 3.7,20.821368 L3.7,3.27863248 C3.7,2.62332786 4.25562033,2.1 4.93284936,2.1 L15.415608,2.1 Z M14.696,3.382 L5.025,3.383 L5.025,20.716 L18.974,20.716 L18.973,7.432 L16.3466425,7.43290598 C15.4353726,7.43290598 14.6966425,6.69417582 14.6966425,5.78290598 L14.696,3.382 Z M15.7885658,17.197435 C16.2198174,17.197435 16.5740206,17.531052 16.5782214,17.947008 C16.5782214,18.3625938 16.2236253,18.69658 15.7885658,18.69658 L8.21506307,18.69658 C7.78000366,18.69658 7.42540789,18.3625939 7.42540789,17.947008 C7.42540789,17.5314221 7.78000366,17.197435 8.21506307,17.197435 Z M14.137024,14.49829 C14.570728,14.49829 14.9224663,14.8307954 14.9266783,15.247863 C14.9266783,15.663449 14.5720833,15.997435 14.137024,15.997435 L9.86297641,15.997435 C9.427917,15.997435 9.07332123,15.6634489 9.07332123,15.247863 C9.07332123,14.8322771 9.427917,14.49829 9.86297641,14.49829 Z M15.7885658,11.799145 C16.2198174,11.799145 16.5740206,12.132762 16.5782214,12.548718 C16.5782214,12.9643038 16.2236253,13.29829 15.7885658,13.29829 L8.21506307,13.29829 C7.78000366,13.29829 7.42540789,12.9643039 7.42540789,12.548718 C7.42540789,12.1331321 7.78000366,11.799145 8.21506307,11.799145 Z M14.137024,9.1 C14.5719069,9.1 14.9224829,9.43020154 14.9266783,9.849573 C14.9266783,10.265159 14.5720833,10.599145 14.137024,10.599145 L9.86297641,10.599145 C9.427917,10.599145 9.07332123,10.2651589 9.07332123,9.849573 C9.07332123,9.43398713 9.427917,9.1 9.86297641,9.1 Z M15.996,4.108 L15.9966425,5.78290598 C15.9966425,5.97620565 16.1533428,6.13290598 16.3466425,6.13290598 L18.146,6.132 L15.996,4.108 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <div className={styles.name}>Aarhus</div>
                <div className={styles.path}>
                  lifebox.com/m/lorem/ipsum/dolor
                </div>
              </div>
            </div>
            <div className={styles.tableItemDate}>27 Jun</div>
            <a href="#" className={styles.tableItemShare}>
              <img src={share} alt="" />
            </a>
          </a>
          <a href="#" className={styles.tableItem}>
            <div className={styles.tableItemDetail}>
              <svg width="24px" height="25px" viewBox="0 0 24 25" version="1.1">
                <title>74313DC1-C54F-4A82-8F91-D84857B4FA90</title>
                <g
                  id="Main"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="1.0.0.0.L.D.SKLS_Dokumanlariniz_Normal_Kullanici"
                    transform="translate(-307.000000, -303.000000)"
                    fill="#696D80"
                    fill-rule="nonzero"
                  >
                    <g
                      id="Group-5"
                      transform="translate(307.000000, 293.000000)"
                    >
                      <g
                        id="Light/icons/24px/word"
                        transform="translate(0.000000, 10.500000)"
                      >
                        <path
                          d="M15.415608,2.1 C15.6404316,2.1 15.8556597,2.18355312 16.0169432,2.33546289 L20.0423515,6.12691588 C20.2071943,6.28217809 20.3,6.49425923 20.3,6.71794872 L20.3,20.821368 C20.3,21.4766726 19.7443797,22 19.0671506,22 L4.93284936,22 C4.25562033,22 3.7,21.4766726 3.7,20.821368 L3.7,3.27863248 C3.7,2.62332786 4.25562033,2.1 4.93284936,2.1 L15.415608,2.1 Z M14.696,3.382 L5.025,3.383 L5.025,20.716 L18.974,20.716 L18.973,7.432 L16.3466425,7.43290598 C15.4353726,7.43290598 14.6966425,6.69417582 14.6966425,5.78290598 L14.696,3.382 Z M15.7885658,17.197435 C16.2198174,17.197435 16.5740206,17.531052 16.5782214,17.947008 C16.5782214,18.3625938 16.2236253,18.69658 15.7885658,18.69658 L8.21506307,18.69658 C7.78000366,18.69658 7.42540789,18.3625939 7.42540789,17.947008 C7.42540789,17.5314221 7.78000366,17.197435 8.21506307,17.197435 Z M14.137024,14.49829 C14.570728,14.49829 14.9224663,14.8307954 14.9266783,15.247863 C14.9266783,15.663449 14.5720833,15.997435 14.137024,15.997435 L9.86297641,15.997435 C9.427917,15.997435 9.07332123,15.6634489 9.07332123,15.247863 C9.07332123,14.8322771 9.427917,14.49829 9.86297641,14.49829 Z M15.7885658,11.799145 C16.2198174,11.799145 16.5740206,12.132762 16.5782214,12.548718 C16.5782214,12.9643038 16.2236253,13.29829 15.7885658,13.29829 L8.21506307,13.29829 C7.78000366,13.29829 7.42540789,12.9643039 7.42540789,12.548718 C7.42540789,12.1331321 7.78000366,11.799145 8.21506307,11.799145 Z M14.137024,9.1 C14.5719069,9.1 14.9224829,9.43020154 14.9266783,9.849573 C14.9266783,10.265159 14.5720833,10.599145 14.137024,10.599145 L9.86297641,10.599145 C9.427917,10.599145 9.07332123,10.2651589 9.07332123,9.849573 C9.07332123,9.43398713 9.427917,9.1 9.86297641,9.1 Z M15.996,4.108 L15.9966425,5.78290598 C15.9966425,5.97620565 16.1533428,6.13290598 16.3466425,6.13290598 L18.146,6.132 L15.996,4.108 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <div className={styles.name}>Aarhus</div>
                <div className={styles.path}>
                  lifebox.com/m/lorem/ipsum/dolor
                </div>
              </div>
            </div>
            <div className={styles.tableItemDate}>27 Jun</div>
            <a href="#" className={styles.tableItemShare}>
              <img src={share} alt="" />
            </a>
          </a>
          <div className={styles.tableFooter}>
            <p>
              {getTranslateValue(
                "document-finishing",
                "Son işlem yapılan 10 dosya gösterilmektedir."
              )}
            </p>
            <div className={styles.tableFooterLink}>
              <img src={lifebox} alt="" />
              <a href={data?.lifeBoxUrl}>
                {getTranslateValue("see all", "Tümünü Gör")} <img src="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};