import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type BookingContainerType = {
  flightDetails?: string;
  airlineDetails?: string;
  flightPrice?: string;
  originAirportCode?: string;
  destinationAirportCode?: string;
  originCity?: string;
  destinationCity?: string;
  classType?: string;
  numberOfAdults?: string;
  bookingPlatform?: string;
  timeSinceBooking?: string;

  /** Style props */
  propTextAlign?: Property.TextAlign;
};

const BookingContainer: FunctionComponent<BookingContainerType> = memo(
  ({
    flightDetails,
    airlineDetails,
    flightPrice,
    originAirportCode,
    destinationAirportCode,
    originCity,
    destinationCity,
    classType,
    numberOfAdults,
    bookingPlatform,
    timeSinceBooking,
    propTextAlign,
  }) => {
    const arrNameStyle: CSS.Properties = useMemo(() => {
      return {
        textAlign: propTextAlign,
      };
    }, [propTextAlign]);

    return (
      <div className="self-stretch rounded-md flex flex-col p-[0.83rem] items-start justify-start gap-[0.83rem] text-left text-[1rem] text-lightslategray font-inter border-[1px] border-solid border-whitesmoke-200">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[0.33rem]">
            <img
              className="relative w-[2rem] h-[2rem]"
              alt=""
              src={flightDetails}
            />
            <div className="relative leading-[1.33rem]">{airlineDetails}</div>
          </div>
          <div className="relative text-[1.33rem] leading-[2rem] font-semibold text-gray-200 text-right">
            {flightPrice}
          </div>
        </div>
        <div className="self-stretch rounded-9xs bg-whitesmoke-100 flex flex-row p-[0.67rem] items-center justify-start gap-[0.58rem] text-[1.33rem] text-cornflowerblue-200">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.17rem]">
            <div className="relative font-semibold">{originAirportCode}</div>
            <div className="relative text-[1rem] text-lightslategray">
              {destinationAirportCode}
            </div>
          </div>
          <img
            className="relative w-[4.07rem] h-[1rem]"
            alt=""
            src="/flight-icon.svg"
          />
          <div className="flex-1 flex flex-col items-end justify-start gap-[0.17rem]">
            <div className="relative font-semibold">{originCity}</div>
            <div
              className="relative text-[1rem] text-lightslategray text-right"
              style={arrNameStyle}
            >
              {destinationCity}
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-9xs flex flex-row items-center justify-start gap-[1.67rem]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[0.67rem]">
            <img
              className="relative w-[1.33rem] h-[1.33rem] overflow-hidden shrink-0"
              alt=""
              src="/class-icon.svg"
            />
            <div className="relative leading-[1.33rem]">{classType}</div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[0.67rem]">
            <img
              className="relative w-[1.33rem] h-[1.33rem] overflow-hidden shrink-0"
              alt=""
              src="/calender.svg"
            />
            <div className="relative leading-[1.33rem]">{numberOfAdults}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row pt-[0.67rem] px-[0rem] pb-[0rem] items-center justify-between border-t-[1px] border-solid border-whitesmoke-200">
          <div className="relative leading-[1.33rem]">
            <span>{`Booked on `}</span>
            <span className="text-studio-darkmode-maincta-457eff">
              {bookingPlatform}
            </span>
          </div>
          <div className="relative leading-[1.33rem] font-semibold text-orange-100">
            {timeSinceBooking}
          </div>
        </div>
      </div>
    );
  }
);

export default BookingContainer;
