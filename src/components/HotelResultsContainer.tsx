import { FunctionComponent, memo } from "react";
import ResultsContainer from "./ResultsContainer";
import { Button } from "@mui/material";

const HotelResultsContainer: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col py-[4.17rem] px-[6.67rem] items-start justify-start gap-[1.67rem] text-left text-[1.5rem] text-darkslategray-600 font-components-button-large lg:p-[3.33rem] lg:box-border md:py-[2.5rem] md:px-[2rem] md:box-border">
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 relative tracking-[0.04em] uppercase font-medium">
          200+ results
        </div>
        <div className="relative w-[7.17rem] h-[2rem] text-[1.33rem]">
          <img
            className="absolute top-[0rem] left-[5.17rem] w-[2rem] h-[2rem] overflow-hidden"
            alt=""
            src="/filters.svg"
          />
          <div className="absolute top-[0.21rem] left-[0rem] tracking-[0.04em]">
            Filters
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.92rem] text-[1.33rem]">
        <div className="w-[46.82rem] flex flex-col items-start justify-start gap-[1rem] md:w-[100%!important] sm:gap-[1.67rem]">
          <ResultsContainer
            roomTypeImageUrl="/unsplashs6ch7n3eoqy@2x.png"
            roomTypeName="1 king bed standard"
            hotelName="Holiday Inn Expre..."
            roomPrice="/vector7.svg"
            roomSize="/video1.svg"
          />
          <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[1.33rem] sm:flex-col">
            <img
              className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[21.67rem] h-[18.33rem] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
              alt=""
              src="/unsplashs6ch7n3eoqy1@2x.png"
            />
            <div className="flex-1 flex flex-col py-[1.25rem] pr-[1rem] pl-[0rem] items-start justify-start gap-[2.58rem] sm:p-[1.25rem] sm:box-border sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative h-[6.33rem]">
                  <b className="absolute top-[2.08rem] left-[0rem] text-[1.83rem] tracking-[0.04em] capitalize inline-block w-[22.82rem]">
                    Freehand Los Angeles
                  </b>
                  <div className="absolute top-[0rem] left-[0rem] tracking-[0.02em] text-gray-100 inline-block w-[14.4rem]">
                    Bed in Quad
                  </div>
                  <div className="absolute top-[4.75rem] left-[0rem] w-[16.9rem] h-[1.58rem] text-cornflowerblue-200">
                    <div className="absolute top-[0rem] left-[5.34rem] tracking-[0.04em] inline-block w-[11.56rem]">
                      (1,941 reviews)
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] w-[4.51rem] h-[1.58rem] text-darkslategray-600">
                      <div className="absolute top-[0rem] left-[2.15rem] tracking-[0.04em] font-medium inline-block w-[2.35rem]">
                        4.2
                      </div>
                      <img
                        className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[13.71rem] h-[6.97rem] text-[1.83rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[9.33rem] h-[2.17rem]">
                  <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] capitalize">
                    $S 198
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
          <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[1.33rem] sm:flex-col">
            <img
              className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[21.67rem] h-[18.33rem] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
              alt=""
              src="/unsplashs6ch7n3eoqy2@2x.png"
            />
            <div className="flex-1 flex flex-col py-[1.25rem] pr-[1rem] pl-[0rem] items-start justify-start gap-[2.58rem] sm:p-[1.25rem] sm:box-border sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative h-[6.33rem]">
                  <b className="absolute top-[2.08rem] left-[0rem] text-[1.83rem] tracking-[0.04em] capitalize inline-block w-[22.82rem]">
                    The Westin Bonavent...
                  </b>
                  <div className="absolute top-[0rem] left-[0rem] tracking-[0.02em] text-gray-100 inline-block w-[14.4rem]">
                    1 King, City view
                  </div>
                  <div className="absolute top-[4.75rem] left-[0rem] w-[16.9rem] h-[1.58rem] text-cornflowerblue-200">
                    <div className="absolute top-[0rem] left-[5.34rem] tracking-[0.04em] inline-block w-[11.56rem]">
                      (1,002 reviews)
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] w-[4.51rem] h-[1.58rem] text-darkslategray-600">
                      <div className="absolute top-[0rem] left-[2.15rem] tracking-[0.04em] font-medium inline-block w-[2.35rem]">
                        4.1
                      </div>
                      <img
                        className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector9.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[13.71rem] h-[6.97rem] text-[1.83rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[9.33rem] h-[2.17rem]">
                  <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] capitalize">
                    $S 289
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
          <ResultsContainer
            roomTypeImageUrl="/unsplashs6ch7n3eoqy3@2x.png"
            roomTypeName="Deluxe King"
            hotelName="The Ritz-Carlton, L..."
            roomPrice="/vector10.svg"
            roomSize="/video2.svg"
            propCursor="pointer"
          />
          <iframe
            className="[border:none] self-stretch relative h-[50rem] hidden md:flex md:max-w-[83.33rem]"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className="[border:none] self-stretch flex-1 relative md:hidden"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </div>
  );
});

export default HotelResultsContainer;
