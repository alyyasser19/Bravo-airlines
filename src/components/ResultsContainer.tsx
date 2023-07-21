import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import PrimaryButton from "./PrimaryButton";
import { Button } from "@mui/material";

type ResultsContainerType = {
  roomTypeImageUrl?: string;
  roomTypeName?: string;
  hotelName?: string;
  roomPrice?: string;
  roomSize?: string;

  /** Style props */
  propCursor?: Property.Cursor;
};

const ResultsContainer: FunctionComponent<ResultsContainerType> = memo(
  ({
    roomTypeImageUrl,
    roomTypeName,
    hotelName,
    roomPrice,
    roomSize,
    propCursor,
  }) => {
    const videoIconStyle: CSS.Properties = useMemo(() => {
      return {
        cursor: propCursor,
      };
    }, [propCursor]);

    return (
      <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[1.33rem] text-left text-[1.33rem] text-gray-100 font-components-button-large sm:flex-col">
        <img
          className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[21.67rem] h-[18.33rem] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
          alt=""
          src={roomTypeImageUrl}
        />
        <div className="flex-1 flex flex-col py-[1.25rem] pr-[1rem] pl-[0rem] items-start justify-start gap-[2.58rem] sm:w-full sm:p-[1.25rem] sm:box-border sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative tracking-[0.02em] inline-block w-[12.24rem]">
                {roomTypeName}
              </div>
              <b className="relative text-[1.83rem] tracking-[0.04em] capitalize inline-block text-darkslategray-600 w-[19.41rem]">
                {hotelName}
              </b>
              <div className="relative w-[14.49rem] h-[1.58rem] text-cornflowerblue-200">
                <div className="absolute top-[0rem] left-[4.66rem] tracking-[0.04em] inline-block w-[9.83rem]">
                  (1,136 reviews)
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[3.83rem] h-[1.58rem] text-darkslategray-600">
                  <div className="absolute top-[0rem] left-[1.83rem] tracking-[0.04em] font-medium inline-block w-[2rem]">
                    4.7
                  </div>
                  <img
                    className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src={roomPrice}
                  />
                </div>
              </div>
            </div>
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src={roomSize}
              style={videoIconStyle}
            />
          </div>
          <div className="relative w-[13.71rem] h-[6.97rem] text-[1.83rem] text-darkslategray-600">
            <div className="absolute top-[0rem] left-[0rem] w-[9.33rem] h-[2.17rem]">
              <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] capitalize">
                $S 286
              </b>
              <div className="absolute top-[0.67rem] left-[6.08rem] text-[1.17rem] tracking-[0.02em]">
                /night
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="absolute top-[3.13rem] left-[0.04rem] tracking-[0.04em] font-medium inline-block w-[13.67rem] h-[3.83rem] cursor-pointer border-none p-[0] "
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default ResultsContainer;
