import { FunctionComponent, memo } from "react";

const RecommendedHolidaysContainer: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[2rem] text-left text-[2.5rem] text-darkslategray-600 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-[1.83rem]">
          Recommended Holidays
        </b>
        <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[16.66rem] flex flex-row items-start justify-start gap-[0.83rem] md:hidden">
          <div className="relative text-[1.5rem] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[13.82rem] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-1.33rem] mr-[-1.33rem] md:ml-[-1.33rem] md:mr-[-1.33rem] md:flex-wrap">
        <button className="cursor-pointer [border:none] py-[0rem] px-[1.33rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-[2.67rem] sm:w-full sm:mb-[2.67rem]">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[20.17rem] shrink-0 object-cover"
            alt=""
            src="/unsplash5mv818tzxeo@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-[1.67rem] px-[1.33rem] items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative text-[1.67rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-500 text-left">
                  Bali
                </div>
                <div className="self-stretch relative text-[1.33rem] tracking-[0.02em] font-components-button-large text-darkgray-300 text-left">
                  4D3N
                </div>
              </div>
              <div className="relative text-[2.67rem] leading-[2.83rem] font-baloo-bhai text-cornflowerblue-200 text-right">
                $899
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[0rem] px-[1.33rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-[2.67rem] sm:w-full sm:mb-[2.67rem]">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[20.17rem] shrink-0 object-cover"
            alt=""
            src="/switzerlandimage@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-[1.67rem] px-[1.33rem] items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative text-[1.67rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-500 text-left">
                  Swiss
                </div>
                <div className="self-stretch relative text-[1.33rem] tracking-[0.02em] font-components-button-large text-darkgray-300 text-left">
                  6D5N
                </div>
              </div>
              <div className="relative text-[2.67rem] leading-[2.83rem] font-baloo-bhai text-cornflowerblue-200 text-right">
                $900
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[0rem] px-[1.33rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full sm:mb-[2.67rem]">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[20.17rem] shrink-0 object-cover"
            alt=""
            src="/boracayimage@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-[1.67rem] px-[1.33rem] items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative text-[1.67rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-500 text-left">
                  Boracay
                </div>
                <div className="self-stretch relative text-[1.33rem] tracking-[0.02em] font-components-button-large text-darkgray-300 text-left">
                  5D4N
                </div>
              </div>
              <div className="relative text-[2.67rem] leading-[2.83rem] font-baloo-bhai text-cornflowerblue-200 text-right">
                $699
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[0rem] px-[1.33rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[20.17rem] shrink-0 object-cover"
            alt=""
            src="/palawanimage@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-[1.67rem] px-[1.33rem] items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative text-[1.67rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-500 text-left">
                  Palawan
                </div>
                <div className="self-stretch relative text-[1.33rem] tracking-[0.02em] font-components-button-large text-darkgray-300 text-left">
                  4D3N
                </div>
              </div>
              <div className="relative text-[2.67rem] leading-[2.83rem] font-baloo-bhai text-cornflowerblue-200 text-right">
                $789
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="rounded-12xl bg-primary-contrast w-[16.66rem] hidden flex-row items-start justify-start gap-[0.83rem] text-right text-[1.5rem] text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[13.82rem] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
});

export default RecommendedHolidaysContainer;
