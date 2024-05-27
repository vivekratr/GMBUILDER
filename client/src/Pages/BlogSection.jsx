/* eslint-disable no-unused-vars */
import React, {useState,useContext } from "react";
// import Navbar from "../components/Navbar";
import PluralitySocialConnect from "plurality-social-connect";

import "./css/BlogSection.css";
import BackgroundImageDiv from "../components/BGImageDiv";
import { Context } from "../context/ContextProvider";

const BlogSection = () => {
  const { handleProfileDataReturned,profileData,
    setIsConnected,
    isConnected,
    childRef,
    writeBlog,
} = useContext(Context);
  const [activeButton, setActiveButton] = useState('Recommended For You');

  const hiddenButtonWrapperRef = React.useRef(null);

  // const handleProfileDataReturned = (data ) => {
  //   const receivedData = JSON.parse(JSON.stringify(data))
  //   console.log("Get profile data:", receivedData);
  //   alert(JSON.stringify(data));
  //   childRef.current.closeSocialConnectPopup();
  // };

  // Web3 function handles
  const handleGetAllAccounts = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get all accounts:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetConnectedAccount = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get connected account:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleMessageSignature = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get message signature:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleVerifyMessageSignature = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Verify message signature:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetBalance = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get balance:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleSendTransaction = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Send transaction:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetBlockNumber = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get block number:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetTransactionCount = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get transaction count:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleReadFromContract = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Read from contract:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleWriteToContract = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Write to contract:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleErrorMessage = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get error message:", receivedData);
      alert(JSON.stringify(data));
  };

  // Function to handle the click on the visible button
  const handleVisibleButtonClick = () => {
    if (hiddenButtonWrapperRef.current) {
      const hiddenButton =
        hiddenButtonWrapperRef.current.querySelector("button");
      if (hiddenButton) {
        hiddenButton.click();
      }
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="bg-black">
      <div>
         {/* navbar */}
      <div>
      <div className=" bg-black flex px-11 items-center justify-between p-[1.125rem] min-h-[120px] w-full overflow-hidden">
      <div className="relative left-0 bottom-2">
        <img
          src="https://i.imgur.com/T0Ew5Bq.png"
          className=" object-cover h-[103px]"
          alt=""
        />
      </div>

      <div className="">
        <ul className="flex items-center outline-none relative top-4 gap-[34px] min-h-[120px] min-w-[400px] justify-between space-x-6">
          <li>
            <a
              href="#"
              className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
            >
              Article
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
            >
              Communities
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
            >
              Write
            </a>
          </li>
        </ul>
      </div>

      <div className="w-[186px]">
        {/* hidden button */}
        <div ref={hiddenButtonWrapperRef} style={{ display: "none" }}>
          <PluralitySocialConnect
            options={{ apps: "facebook,twitter" }}
            onProfileDataReturned={async (d) => {
              await handleProfileDataReturned(d);
              setIsConnected(true);
            }}
            onGetAllAccounts={handleGetAllAccounts}
            onGetConnectedAccount={handleGetConnectedAccount}
            onGetMessageSignature={handleMessageSignature}
            onVerifyMessageSignature={handleVerifyMessageSignature}
            onGetBalance={handleGetBalance}
            onSendTransaction={handleSendTransaction}
            onGetBlockNumber={handleGetBlockNumber}
            onGetTransactionCount={handleGetTransactionCount}
            onReadFromContract={handleReadFromContract}
            onWriteToContract={handleWriteToContract}
            onErrorMessage={handleErrorMessage}
            // all customization params are optional
            customization={{
              height: "30px",
              width: "156px",
              initialBackgroundColor: "#E8A123",
              initialTextColor: "#FFFFFF",
              flipBackgroundColor: "#12AE83",
              flipTextColor: "#FFFFFF",
            }}
            ref={childRef}
          />
        </div>
        {/* showing button */}

        <div
          onClick={handleVisibleButtonClick}
          className="rounded-lg cursor-pointer w-full flex items-center justify-evenly relative box-border h-[3.25rem] overflow-hidden text-left text-[1.125rem] text-white font-inter border-[0.5px] border-solid border-[#FFFFFF4D]"
        >
          <img
            className={`flex items-center justify-center  object-cover ${
              isConnected
                ? `rounded-full w-[2rem]`
                : `w-[1.188rem] h-[1.875rem]`
            }`}
            alt=""
            src={
              isConnected
                ? `${profileData.profileUrl}`
                : `https://i.imgur.com/85UVZQv.png`
            }
          />
          <div className="flex items-center justify-center uppercase font-light">
            {isConnected ? `${profileData.name}` : `Connect`}
          </div>
        </div>
      </div>
    </div>
      </div>
      {/* navbar */}
      </div>

      {/* search bar */}
      <div className="bg-black flex w-full items-center pb-12 justify-center">
        <div className="container-input">
          <input
            type="text"
            placeholder="Search"
            name="text"
            className="input"
          />
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      {/* search bar */}

      {/* Toggle Buttons */}
      <div className="flex mb-[60px] pb-4 border-b-[0.1px] border-solid border-white transition-all duration-150 w-[1140px] mx-auto min-h-[62px] text-[1.125rem] capitalize font-medium font-inter text-white text-left gap-x-12 items-center justify-evenly">
        <button
          className={`focus:outline-none transition-all duration-200  ${
            activeButton === "Recommended For You" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Recommended For You")}
        >
          Recommended For You
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Recommended For You"
                ? " w-full border-white"
                : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all relative duration-200  ${
            activeButton === "Trending" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Trending")}
        >
          Trending
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Trending" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Crypto" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Crypto")}
        >
          Crypto
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Crypto" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Web 3.0" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Web 3.0")}
        >
          Web 3.0
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Web 3.0" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Technology" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Technology")}
        >
          Technology
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Technology" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Gaming" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Gaming")}
        >
          Gaming
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Gaming" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Funding" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Funding")}
        >
          Funding
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Funding" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
      </div>
      {/* Toggle Buttons */}

      {/* cards */}
      <div
        style={{ gridTemplateRows: ` 360px 360px 320px  auto` }}
        className="grid grid-cols-12 bg-black pb-[150px]   gap-x-[25px] gap-y-[33px] w-[1250px] mx-auto p-1 "
      >
        {/* 1st row */}
        {/* 1st column */}
        <div className="relative col-span-7">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/p1CFttI.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        {/* 2nd column */}
        <div className="relative col-span-5">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/0vAeccP.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>

        {/* 2nd row */}
        {/* 1st column */}
        <div className="relative col-span-4">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/0vAeccP.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        {/* 2nd column */}
        <div className="relative col-span-4">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/0vAeccP.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        {/* 3rd column */}
        <div className="relative col-span-4">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/B8HPy6z.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>

        {/* 3rd row */}
        {/* 1st column */}
        <div className="relative col-span-6 p-1">
          <div className="flex flex-col ">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center justify-center gap-1">
                <img
                  className="w-7 h-7 object-value"
                  src="https://i.imgur.com/2rUV7WM.png"
                  alt=""
                />
                <div className="w-[14.875rem] relative text-[1rem] capitalize font-inria-serif text-left inline-block text-white">
                  <span>Emmett Chen-Ran ·</span>
                  <span className="text-[#747474]">3 days ago</span>
                </div>
              </div>
              <img
                className="w-9 h-9 object-value"
                src="https://i.imgur.com/gBgyZBw.png"
                alt=""
              />
              <img
                className="w-7 h-[25px] object-value"
                src="https://i.imgur.com/L1lxGis.png"
                alt=""
              />
            </div>

            <div className="flex pt-10 gap-8">
              <div className="w-[354px] relative text-[1rem] capitalize font-inria-serif text-[#A8A8A8] text-left inline-block">
                <p className="m-0">
                  My name is Benoit. I have been a software engineer for the
                  past eight and a half years. I stayed at my previous (and
                  first) company for seven and a half years, then I joined a new
                  one in early 2022.
                </p>
                <p className="m-0">
                  This article comes from a recent self-reflection on the things
                  I wish I had started doing earlier in my career and the things
                  I wish I had done differently.
                </p>
              </div>

              <img
                className=" relative max-w-full overflow-hidden h-[268px] "
                alt=""
                src="https://i.imgur.com/0vAeccP.png"
              />
            </div>
          </div>
        </div>

        {/* 2nd column */}
        <div className="relative col-span-6 p-1">
          <div className="flex flex-col ">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center justify-center gap-1">
                <img
                  className="w-7 h-7 object-value"
                  src="https://i.imgur.com/2rUV7WM.png"
                  alt=""
                />
                <div className="w-[14.875rem] relative text-[1rem] capitalize font-inria-serif text-left inline-block text-white">
                  <span>Emmett Chen-Ran ·</span>
                  <span className="text-[#747474]">3 days ago</span>
                </div>
              </div>
              <img
                className="w-9 h-9 object-value"
                src="https://i.imgur.com/gBgyZBw.png"
                alt=""
              />
              <img
                className="w-7 h-[25px] object-value"
                src="https://i.imgur.com/L1lxGis.png"
                alt=""
              />
            </div>

            <div className="flex pt-10 gap-8">
              <div className="w-[354px] relative text-[1rem] capitalize font-inria-serif text-[#A8A8A8] text-left inline-block">
                <p className="m-0">
                  My name is Benoit. I have been a software engineer for the
                  past eight and a half years. I stayed at my previous (and
                  first) company for seven and a half years, then I joined a new
                  one in early 2022.
                </p>
                <p className="m-0">
                  This article comes from a recent self-reflection on the things
                  I wish I had started doing earlier in my career and the things
                  I wish I had done differently.
                </p>
              </div>

              <img
                className=" relative max-w-full overflow-hidden h-[268px] "
                alt=""
                src="https://i.imgur.com/0vAeccP.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
    </div>
  );
};

export default BlogSection;
