import { FunctionComponent, memo } from "react";
import DestinationContainer from "./DestinationContainer";

const PopularDestinationsContainer: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-left text-[1.5rem] text-cornflowerblue-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] sm:flex-[unset] sm:self-stretch">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <b className="self-stretch relative text-[2.5rem] tracking-[0.04em] capitalize text-darkslategray-600 sm:text-[1.83rem]">
            Most Popular Destinations
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[19.28rem] flex flex-row items-start justify-start gap-[0.83rem] md:hidden">
          <div className="relative text-[1.5rem] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[16.44rem] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/arrowright.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-1.33rem] mr-[-1.33rem] md:ml-[-1.33rem] md:mr-[-1.33rem] md:flex-wrap md:mt-[-1.33rem] md:mb-[-1.33rem]">
        <DestinationContainer
          destinationPrice="/parisimage@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <DestinationContainer
          destinationPrice="/greeceimage@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="8.33rem"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="3.95rem"
        />
        <DestinationContainer
          destinationPrice="/norwayimage@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="7.58rem"
          propDisplay="inline-block"
          propWidth1="7.58rem"
          propLeft="3.2rem"
        />
        <DestinationContainer
          destinationPrice="/tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="8.39rem"
          propDisplay="inline-block"
          propWidth1="8.39rem"
          propLeft="4.01rem"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast w-[19.28rem] hidden flex-row items-start justify-start gap-[0.83rem] text-right md:flex md:mt-[1.33rem]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[16.44rem] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
});

export default PopularDestinationsContainer;
