import React from "react";
import WaveImage from "./WaveImage";

const HomePageAboutUs = () => {
  return (
    <div className="flex max-w-7xl mx-auto justify-center gap-8">
      <div>
        <h1 className="text-4xl font-bold mb-8">
          About <span className="text-red-500">Us</span>
        </h1>
        <p className="max-w-[690px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        {/* <img src="https://i.postimg.cc/d3T34bJP/Frame-27.png" alt="About_us_img" className='max-w-[456px] max-h-[456px]' /> */}
        <WaveImage/>
      </div>
    </div>
  );
};

export default HomePageAboutUs;
