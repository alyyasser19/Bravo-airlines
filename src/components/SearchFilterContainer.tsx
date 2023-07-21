import { FunctionComponent, memo } from "react";
import BookingOptionsCard from "./BookingOptionsCard";

const SearchFilterContainer: FunctionComponent = memo(() => {
  return (
    <div className="w-[21.08rem] flex flex-col items-start justify-start gap-[3.25rem] text-left text-[1.67rem] text-dimgray-300 font-components-button-large lg:hidden">
      <div className="relative w-[19rem] h-[3.92rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[19rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative tracking-[0.26px] inline-block w-[18.28rem]">
            10 out of 177 Results
          </div>
          <img
            className="relative w-[19rem] h-[0.08rem]"
            alt=""
            src="/vector-2.svg"
          />
        </div>
      </div>
      <BookingOptionsCard stopOptionsText="Stops" />
      <BookingOptionsCard
        stopOptionsText="Booking Options"
        propWidth="18.42rem"
        propWidth1="15.75rem"
      />
      <BookingOptionsCard
        stopOptionsText="Flight Experience"
        propWidth="25.9rem"
        propWidth1="16.5rem"
      />
      <img
        className="relative w-[19rem] h-[0.08rem]"
        alt=""
        src="/vector-2.svg"
      />
      <BookingOptionsCard
        stopOptionsText="Airlines"
        propWidth="15.08rem"
        propWidth1="7.31rem"
      />
    </div>
  );
});

export default SearchFilterContainer;
