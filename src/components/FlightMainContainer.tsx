import { FunctionComponent, memo } from "react";

type FlightMainContainerType = {
  flightOrigin?: string;
  flightDestination?: string;
  flightOriginCode?: string;
  departureDate?: string;
  returnDate?: string;
};

const FlightMainContainer: FunctionComponent<FlightMainContainerType> = memo(
  ({
    flightOrigin,
    flightDestination,
    flightOriginCode,
    departureDate,
    returnDate,
  }) => {
    return (
      <div className="flex-1 rounded-lg flex flex-col p-[1.67rem] items-center justify-center gap-[1.75rem] text-left text-[2rem] text-cornflowerblue-300 font-components-button-large border-[1px] border-solid border-whitesmoke-200 lg:w-[43.33rem] md:w-full md:block md:mb-[2.5rem] md:flex-[unset] md:self-stretch">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="relative w-[3.73rem] h-[2.33rem]">
            <b className="absolute top-[0rem] left-[0rem] tracking-[0.04em] capitalize inline-block w-[3.73rem]">
              {flightOrigin}
            </b>
          </div>
          <img
            className="relative w-[9.78rem] h-[2rem]"
            alt=""
            src={flightDestination}
          />
          <div className="relative w-[4.27rem] h-[2.33rem] text-right">
            <b className="absolute top-[0rem] left-[0rem] tracking-[0.04em] capitalize inline-block w-[4.27rem]">
              {flightOriginCode}
            </b>
          </div>
        </div>
        <div className="relative text-[1.67rem] tracking-[0.04em] capitalize text-black">
          <b>{departureDate}</b>
          <span>{returnDate}</span>
        </div>
      </div>
    );
  }
);

export default FlightMainContainer;
