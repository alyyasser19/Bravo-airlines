import { FunctionComponent, memo } from "react";
import Pilldefault from "./Pilldefault";

const HotelHeader: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-[3.5rem] text-primary-contrast font-baloo-bhai">
      <div className="self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[16.08rem] lg:py-[1.75rem] lg:pr-[3.33rem] lg:pl-[3.42rem] lg:box-border md:py-[1.75rem] md:px-[2rem] md:box-border">
        <img
          className="absolute h-[calc(100%_-_0.4px)] w-full top-[0.03rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/banner-background1@2x.png"
        />
        <div className="absolute top-[4.17rem] left-[0rem] w-[120rem] flex flex-col py-[0rem] px-[6.67rem] box-border items-start justify-start gap-[0.67rem] lg:pl-[3.33rem] lg:pr-[3.33rem] lg:box-border md:pl-[2rem] md:pr-[2rem] md:box-border">
          <div className="relative tracking-[0.02em] leading-[4rem] inline-block w-[106.67rem] sm:text-[2.67rem]">
            Stays in Los Angeles
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.67rem]">
            <Pilldefault
              beds="Recommended"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="#fff"
              bedsColor="#1262af"
            />
            <Pilldefault
              beds="Price"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="unset"
              bedsColor="#fff"
            />
            <Pilldefault
              beds="Rating"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="unset"
              bedsColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default HotelHeader;
