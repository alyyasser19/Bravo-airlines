import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type FlightContainerType = {
  flightDetails?: string;
  airlineName?: string;
  departureTime?: string;
  flightDuration?: string;
  arrivalTime?: string;
  flightPrice?: string;

  /** Style props */
  propTransform?: Property.Transform;
};

const FlightContainer: FunctionComponent<FlightContainerType> = memo(
  ({
    flightDetails,
    airlineName,
    departureTime,
    flightDuration,
    arrivalTime,
    flightPrice,
    propTransform,
  }) => {
    const turkishIconStyle: CSS.Properties = useMemo(() => {
      return {
        transform: propTransform,
      };
    }, [propTransform]);

    return (
      <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-[0rem] pr-[0.5rem] pl-[2.08rem] items-center justify-center gap-[4.17rem] text-left text-[1.33rem] text-dimgray-300 font-components-button-large border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-[1.67rem] sm:box-border">
        <div className="w-1/5 flex flex-row items-center justify-start gap-[0.58rem] md:flex-col sm:flex-row sm:w-[100%!important]">
          <img
            className="relative w-[2.9rem] h-[3.83rem] sm:[transform:scale(0.8)]"
            alt=""
            src={flightDetails}
            style={turkishIconStyle}
          />
          <div className="relative tracking-[0.26px]">{airlineName}</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-between text-[1.75rem] text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
          <div className="relative w-[7.75rem] h-[4.33rem] mq428small:w-[6.67rem]">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1.33rem]">
              {departureTime}
            </div>
            <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-[1.33rem] tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-[1.33rem]">
              SIN
            </div>
          </div>
          <div className="relative w-[10.08rem] h-[4.58rem] text-center text-[1.33rem] text-gray-100 sm:[transform:scale(0.9)]">
            <img
              className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/flighticon.svg"
            />
            <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[1.08rem]">
              {flightDuration}
            </div>
          </div>
          <div className="relative w-[7.58rem] h-[4.33rem] text-right mq428small:w-[6.67rem]">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1.33rem]">
              {arrivalTime}
            </div>
            <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-[1.33rem] tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-[1.33rem]">
              LAX
            </div>
          </div>
        </div>
        <div className="w-[10.67rem] flex flex-row items-center justify-center text-center text-[2rem] text-orange-100">
          <img
            className="relative w-[0.08rem] h-[8.33rem] sm:hidden"
            alt=""
            src="/vector-1.svg"
          />
          <b className="flex-1 relative tracking-[0.34px]">{flightPrice}</b>
        </div>
      </div>
    );
  }
);

export default FlightContainer;
