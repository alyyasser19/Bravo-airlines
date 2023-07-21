import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type DestinationContainerType = {
  destinationPrice?: string;
  destinationName?: string;
  destinationPriceRange?: string;

  /** Style props */
  propWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth1?: Property.Width;
  propLeft?: Property.Left;
};

const DestinationContainer: FunctionComponent<DestinationContainerType> = memo(
  ({
    destinationPrice,
    destinationName,
    destinationPriceRange,
    propWidth,
    propDisplay,
    propWidth1,
    propLeft,
  }) => {
    const detailsStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const divStyle: CSS.Properties = useMemo(() => {
      return {
        display: propDisplay,
        width: propWidth1,
      };
    }, [propDisplay, propWidth1]);

    const fromStyle: CSS.Properties = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    return (
      <button className="cursor-pointer [border:none] py-[0rem] px-[1.33rem] bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-[1.33rem] md:box-border md:w-6/12 sm:w-full">
        <div className="self-stretch relative rounded-3xs h-[15.17rem] overflow-hidden shrink-0">
          <img
            className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={destinationPrice}
          />
          <div className="absolute w-[calc(100%_-_0.59px)] top-[0rem] right-[0.02rem] left-[0.02rem] flex flex-row py-[0.67rem] px-[1rem] box-border items-start justify-start">
            <b className="flex-1 relative text-[1.67rem] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
              {destinationName}
            </b>
            <div
              className="relative w-[7.58rem] h-[4.92rem]"
              style={detailsStyle}
            >
              <div
                className="absolute top-[1.75rem] left-[0rem] text-[3.17rem] leading-[3.17rem] font-baloo-bhai text-primary-contrast text-right inline-block w-[7.58rem]"
                style={divStyle}
              >
                {destinationPriceRange}
              </div>
              <div
                className="absolute top-[0rem] left-[3.2rem] text-[1.33rem] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[4.38rem]"
                style={fromStyle}
              >
                from
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
);

export default DestinationContainer;
