import { FunctionComponent, memo, useCallback } from "react";
import { TextField } from "@mui/material";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import { useNavigate } from "react-router-dom";

type WeeklyUpdatesContainerType = {
  imageDimensions?: string;
  imageIds?: string;
  smallImageDimensions?: string;
};

const WeeklyUpdatesContainer: FunctionComponent<WeeklyUpdatesContainerType> =
  memo(({ imageDimensions, imageIds, smallImageDimensions }) => {
    const navigate = useNavigate();

    const onbravoAirlinesLogoContainerClick = useCallback(() => {
      navigate("/");
    }, [navigate]);

    return (
      <div className="self-stretch flex flex-col items-start justify-start text-center text-[1.5rem] text-cornflowerblue-300 font-components-button-large">
        <div className="self-stretch relative bg-aliceblue h-[44.08rem] overflow-hidden shrink-0">
          <img
            className="absolute w-full top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden h-[44.17rem] object-cover"
            alt=""
            src={imageDimensions}
          />
          <div className="[position:relative!important] top-[4.33rem] left-[auto!important] w-[45.75rem] flex flex-col p-[1.67rem] box-border items-center justify-start gap-[2.5rem] ml-[auto] mr-[auto] md:py-[2rem] md:px-[0rem] md:box-border sm:pl-[2rem] sm:pr-[2rem] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.58rem]">
              <b className="self-stretch relative tracking-[0.04em] uppercase">
                subscribe to our newsletter
              </b>
              <b className="self-stretch relative text-[2.5rem] text-darkslategray-400">
                Get weekly updates
              </b>
            </div>
            <div className="self-stretch rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-[2.33rem] px-[2.5rem] items-start justify-start gap-[1.42rem] text-left text-slategray border-[1px] border-solid border-whitesmoke-200">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[2.83rem]">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.83rem]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Your name"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch"
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Email address"
                    size="medium"
                    margin="none"
                  />
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded-9xs w-[13.67rem] h-[4.67rem] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200">
                <VariantContainedSizeLarge
                  button="submit"
                  variantContainedSizeLargePosition="unset"
                  variantContainedSizeLargeBoxSizing="border-box"
                  buttonLineHeight="2.17rem"
                  buttonColor="#fff"
                  buttonDisplay="inline-block"
                />
              </button>
            </div>
          </div>
        </div>
        <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[2.75rem] px-[7rem] items-start justify-start gap-[3.67rem] text-left text-[1.5rem] text-primary-contrast font-components-button-large lg:p-[3.33rem] lg:box-border md:flex-col md:pt-[3.33rem] md:px-[2rem] md:pb-[2.5rem] md:box-border sm:py-[2.5rem] sm:px-[2rem] sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.17rem] mb-[40px!important] md:flex-[unset] md:self-stretch">
            <button
              onClick={onbravoAirlinesLogoContainerClick}
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[14.5rem] [3rem] overflow-hidden shrink-0"
            >
              <h1 className="font-baloo-bhai text-whitesmoke-300">
                Bravo Airlines
              </h1>
            </button>
            <div className="self-stretch relative leading-[2.25rem]">
              Bravo Airlines is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </div>
            <img
              className="relative w-[10.83rem] h-[2.5rem]"
              alt=""
              src={smallImageDimensions}
            />
          </div>
          <div className="relative box-border w-[0.08rem] h-[13.16rem] border-r-[1px] border-solid border-gray-500 md:hidden" />
          <div className="flex-1 flex flex-row items-start justify-between text-[1.33rem] md:flex-[unset] md:self-stretch sm:flex-col">
            <div className="relative w-[16.44rem] h-[13.31rem] sm:mb-[40px!important]">
              <div className="absolute top-[3.98rem] left-[0rem] inline-block w-[11.31rem]">
                About Us
              </div>
              <div className="absolute top-[0rem] left-[0rem] text-[1.67rem] leading-[2.25rem] font-medium inline-block w-[14.56rem]">
                Company
              </div>
              <div className="absolute top-[6.56rem] left-[0rem] inline-block w-[7.02rem]">
                News
              </div>
              <div className="absolute top-[9.15rem] left-[0rem] inline-block w-[9.59rem]">
                Careers
              </div>
              <div className="absolute top-[11.73rem] left-[0rem] inline-block w-[16.44rem]">
                How we work
              </div>
            </div>
            <div className="relative w-[16.44rem] h-[13.31rem] sm:mb-[40px!important]">
              <div className="absolute top-[3.98rem] left-[0rem] inline-block w-[9.14rem]">
                Account
              </div>
              <div className="absolute top-[0rem] left-[0rem] text-[1.67rem] leading-[2.25rem] font-medium inline-block w-[10.96rem]">
                Support
              </div>
              <div className="absolute top-[6.56rem] left-[0rem] inline-block w-[16.44rem]">
                Support Center
              </div>
              <div className="absolute top-[9.15rem] left-[0rem] inline-block w-[4.42rem]">
                FAQ
              </div>
              <div className="absolute top-[11.73rem] left-[0rem] inline-block w-[13.7rem]">
                Accessibility
              </div>
            </div>
            <div className="relative w-[16.44rem] h-[13.31rem]">
              <div className="absolute top-[3.98rem] left-[0rem] inline-block w-[14.41rem]">
                Covid Advisory
              </div>
              <div className="absolute top-[0rem] left-[0rem] text-[1.67rem] leading-[2.25rem] font-medium inline-block w-[6.39rem]">
                More
              </div>
              <div className="absolute top-[6.56rem] left-[0rem] inline-block w-[11.28rem]">
                Airline Fees
              </div>
              <div className="absolute top-[9.15rem] left-[0rem] inline-block w-[4.21rem]">
                Tips
              </div>
              <div className="absolute top-[11.73rem] left-[0rem] inline-block w-[16.44rem]">
                Quarantine Rules
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  });

export default WeeklyUpdatesContainer;
