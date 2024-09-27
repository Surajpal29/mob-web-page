import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PersonIcon from "@mui/icons-material/Person";
import Groups2Icon from "@mui/icons-material/Groups2";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import InfoIcon from "@mui/icons-material/Info";
import images from "../components/imagefile.js";

const image =
  "https://s3-alpha-sig.figma.com/img/9c1a/b700/6fc120580122cc5c1443394d7cbd3883?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VfsXu5sc086Hww00JIfBINNUdwFSsv5dvU0GikGGJJp4JS--DJONLEn8Xwi01kfVyoMdPd0y791WCc9NbB5qxxBDakz0maL6m9xwgG4HQfwDUXk8HdXp8ZX1RTJx6~sQTMRomedNCooGms5OBxRf85wdh-ibS~ljQt7~i~mNH8IXgjpOvE6crbIUhEc9YMK9ohgTK-pOp4W~uakryhs~147umTD13cBfbnwruoPBfWqFd5ARx3~AlBAY1g9nxnELcD7ZaCf4RrHMCx6Ca0zNGNFuOnGQbU2hO65UBDAhsphpgBeIzjYOV1wh4~6PpOCdu6AOmk1lQeq9b6F7EsclPA__";

const HomePage = () => {
  const arr = [images.factory, images.tap, images.leaf];

  return (
    <div className="w-full">
      <div className="w-full pt-5 px-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <nav className="w-[40px] h-[40px] rounded-full bg-cyan-100 object-contain overflow-hidden">
              <img src={image} alt="profile image" />
            </nav>
            <div>
              <h3 className="font-serif font-semibold text-base text-customYellow">
                Brooklyn Simmons
              </h3>
              <h5 className="font-medium leading-3">Hi Good morning!!</h5>
            </div>
          </div>
          <NotificationsIcon />
        </div>
        <hr className="w-full h-[.1px] mt-5 bg-customWhite opacity-20" />
        <div className="mt-4">
          <h2 className="font-bold text-2xl leading-5">
            your impact on <br /> earth
          </h2>
        </div>
        <div className="flex gap-3 mt-5 justify-center">
          {/** Circle Cards */}
          {[
            {
              title: "your community percentile",
              percentage: "65%",
              color:
                "conic-gradient(rgba(83, 129, 5, 1) 0% 65%, gray 65% 100%)",
              imgSrc: images.flowerPot,
            },
            {
              title: "your percentile across globe",
              percentage: "32%",
              color: "conic-gradient(rgba(83, 129, 5, 1) 0% 32%, gray 5% 100%)",
              imgSrc: images.globe,
            },
          ].map(({ title, percentage, color, imgSrc }, index) => (
            <div key={index} className="w-[140px]">
              <div
                className={`w-[145px] h-[145px] rounded-full rotate-[-90deg] bg-gray-500 flex items-center justify-center`}
                style={{ background: color }}
              >
                <div className="w-[112px] h-[112px] rounded-full bg-black flex items-center rotate-90 justify-center">
                  <div className="w-[105px] h-[105px] bg-yellow-500 rounded-full flex items-center justify-center">
                    <img src={imgSrc} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex mt-3 items-center">
                <h5 className="font-normal text-xs">{title}</h5>
                <h3 className="text-lg font-bold text-customYellow">
                  {percentage}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-full h-[.1px] mt-10 bg-customWhite opacity-20" />
        <div className="h-[270px] mt-5 flex gap-5 overflow-x-auto">
          {arr.map((item, index) => (
            <div
              key={index}
              className="w-[144px] h-full rounded-lg bg-customgray shadow-customshadow flex flex-col items-center justify-center px-3"
            >
              <div className="w-[110px] h-[90px]">
                <img src={item} alt="factory" />
              </div>
              <div>
                <div className="mt-5">
                  <h4 className="text-base font-semibold text-customtextgray leading-4">
                    Carbon Emission
                  </h4>
                  <h4 className="font-bold text-2xl mt-2">2230</h4>
                </div>
                <div className="flex gap-2 mt-2">
                  <h6>20%</h6>
                  <span className="w-[18px] h-[18px] bg-green-300 text-black flex items-center justify-center">
                    <ArrowDownwardIcon className="text-xs" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-full h-[.1px] mt-10 bg-customWhite opacity-20" />
        <div>
          <h3 className="text-customYellow text-2xl font-bold mt-5">
            Toxin Eliminated
          </h3>
          <div className="">
            <div className="w-full h-[100px] flex gap-3 mt-5 pr-5">
              {[
                { label: "Lead", symbol: "Pb", value: 82, atomicWeight: 207.2 },
                {
                  label: "Cadmium",
                  symbol: "Cd",
                  value: 48,
                  atomicWeight: 112.414,
                },
                {
                  label: "Arsenic",
                  symbol: "As",
                  value: 33,
                  atomicWeight: 74.922,
                },
              ].map(({ label, symbol, value, atomicWeight }, index) => (
                <div
                  key={index}
                  className="h-full w-[110px] bg-custom-radial p-1 rounded-lg"
                >
                  <p className="text-sm leading-3 px-3">{value}</p>
                  <div className="flex items-center justify-center">
                    <h5 className="text-3xl font-bold">{symbol}</h5>
                  </div>
                  <div className="w-full px-5">
                    <p>{label}</p>
                    <p>{atomicWeight}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-[100px] bg-custom-radial-blue flex gap-5 rounded-lg">
              <div className="h-full object-contain">
                <img
                  src={images.chemicalformula}
                  alt="chemicalformula"
                  className="h-full"
                />
              </div>
              <div className="h-full flex flex-col items-end justify-around">
                <InfoIcon className="text-black" />
                <h5 className="font-bold text-2xl">Trihalomethanes</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[66px] mt-10 bg-customYellow">
        <div className="h-full text-black flex items-center justify-around">
          <div className="relative">
            <div className="w-[44px] h-[44px] flex items-center justify-center bg-customYellow z-40 shadow-md shadow-gray-600 absolute bottom-6 left-[-5px] rounded-lg">
              <PersonIcon />
            </div>
            <h5 className="font-bold">You</h5>
          </div>
          <AdsClickIcon />
          <Groups2Icon />
          <HandshakeIcon />
          <HistoryEduIcon />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
