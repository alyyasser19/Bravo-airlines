import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";

const PopularStaysContainer: FunctionComponent = memo(() => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1.67rem] text-left text-[2.5rem] text-darkslategray-600 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative h-[2.92rem]">
          <b className="absolute top-[0rem] left-[0rem] tracking-[0.04em] capitalize inline-block w-[92.11rem] sm:text-[1.83rem]">
            Popular Stays
          </b>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl flex flex-row items-start justify-start gap-[0.83rem] md:hidden"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="relative text-[1.5rem] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[11.72rem] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-1rem] mr-[-1rem] text-[1.33rem] lg:pr-[3.33rem] lg:box-border lg:ml-[-1rem] lg:mr-[-4.17rem] md:mr-[-4.17rem] md:ml-[-1rem] sm:flex-col sm:pr-[0rem] sm:box-border sm:mr-[-1rem] sm:ml-[-1rem]">
        <HotelCardContainer
          accommodationDetails="/unsplashrlwe8f8anoc@2x.png"
          accommodationType="Entire bungalow"
          accommodationName="Matterhorn Suites"
          accommodationPrice="$575/night"
          accommodationReviews="(60 reviews)"
          accommodationRating="4.9"
          accommodationDimensions="/vector3.svg"
        />
        <HotelCardContainer
          accommodationDetails="/unsplashtsn8bpopveo@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          accommodationPrice="$360/night"
          accommodationReviews="(116 reviews)"
          accommodationRating="4.8"
          accommodationDimensions="/vector4.svg"
          propFlex="1"
          propGap="0.92rem"
          propLeft="4.47rem"
          propWidth="18.03rem"
          propWidth1="37.54%"
          propRight="62.46%"
        />
        <HotelCardContainer
          accommodationDetails="/unsplashrlwe8f8anoc1@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          accommodationPrice="$420/night"
          accommodationReviews="(78 reviews)"
          accommodationRating="4.7"
          accommodationDimensions="/vector5.svg"
          propFlex="1"
          propGap="0.42rem"
          propLeft="4.48rem"
          propWidth="18.02rem"
          propWidth1="37.58%"
          propRight="62.42%"
        />
        <HotelCardContainer
          accommodationDetails="/unsplashyqrybvxug5q@2x.png"
          accommodationType="Deluxe King Room"
          accommodationName="Lake Louise Inn"
          accommodationPrice="$244/night"
          accommodationReviews="(63 reviews)"
          accommodationRating="4.6"
          accommodationDimensions="/vector6.svg"
          propFlex="unset"
          propGap="0.92rem"
          propLeft="4.47rem"
          propWidth="18.03rem"
          propWidth1="37.54%"
          propRight="62.46%"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[0.83rem] text-right text-[1.5rem] text-cornflowerblue-300 md:flex md:mt-[1.33rem]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[11.72rem] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
          alt=""
          src="/arrowright5.svg"
        />
      </div>
    </div>
  );
});

export default PopularStaysContainer;
