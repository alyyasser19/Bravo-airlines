import { FunctionComponent, memo, useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import CSS, { Property } from "csstype";

type HotelCardContainerType = {
  accommodationDetails?: string;
  accommodationType?: string;
  accommodationName?: string;
  accommodationPrice?: string;
  accommodationReviews?: string;
  accommodationRating?: string;
  accommodationDimensions?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propGap?: Property.Gap;
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propRight?: Property.Right;
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = memo(
  ({
    accommodationDetails,
    accommodationType,
    accommodationName,
    accommodationPrice,
    accommodationReviews,
    accommodationRating,
    accommodationDimensions,
    propFlex,
    propGap,
    propLeft,
    propWidth,
    propWidth1,
    propRight,
  }) => {
    const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
    const stayDetailsStyle: CSS.Properties = useMemo(() => {
      return {
        flex: propFlex,
        gap: propGap,
      };
    }, [propFlex, propGap]);

    const reviewsStyle: CSS.Properties = useMemo(() => {
      return {
        left: propLeft,
        width: propWidth,
      };
    }, [propLeft, propWidth]);

    const vectorIconStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth1,
        right: propRight,
      };
    }, [propWidth1, propRight]);

    const openMatterhornPopup = useCallback(() => {
      setMatterhornPopupOpen(true);
    }, []);

    const closeMatterhornPopup = useCallback(() => {
      setMatterhornPopupOpen(false);
    }, []);

    return (
      <>
        <div className="self-stretch flex-1 flex flex-row py-[0rem] px-[1rem] box-border items-start justify-center w-3/12 text-left text-[1.33rem] text-darkslategray-600 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[1.25rem] px-[1.08rem] items-start justify-start gap-[1.92rem] w-3/12 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-300 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[1.67rem]">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[16.67rem] shrink-0 object-cover"
              alt=""
              src={accommodationDetails}
            />
            <div
              className="self-stretch flex flex-row items-start justify-start gap-[0.92rem]"
              style={stayDetailsStyle}
            >
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                  {accommodationType}
                </div>
                <b className="self-stretch relative text-[1.83rem] tracking-[0.04em] capitalize sm:text-[1.67rem]">
                  {accommodationName}
                </b>
                <div className="self-stretch relative text-[1.5rem] tracking-[0.04em]">
                  {accommodationPrice}
                </div>
              </div>
              <img
                className="relative w-[2.08rem] h-[2.08rem] overflow-hidden shrink-0 cursor-pointer"
                alt=""
                src="/video.svg"
                onClick={openMatterhornPopup}
              />
            </div>
            <div className="self-stretch relative h-[1.58rem] text-cornflowerblue-200">
              <div
                className="absolute top-[0rem] left-[4.47rem] tracking-[0.04em] inline-block w-[18.03rem]"
                style={reviewsStyle}
              >
                {accommodationReviews}
              </div>
              <div className="absolute top-[0rem] left-[0rem] w-[3.7rem] h-[1.58rem] text-darkslategray-600">
                <div className="absolute top-[0rem] left-[1.7rem] tracking-[0.04em] font-medium">
                  {accommodationRating}
                </div>
                <img
                  className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={accommodationDimensions}
                  style={vectorIconStyle}
                />
              </div>
            </div>
            <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-9xs box-border h-[3.83rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
              <div className="relative text-[1.25rem] tracking-[0.46px] leading-[2.17rem] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                More details
              </div>
            </button>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
      </>
    );
  }
);

export default HotelCardContainer;
