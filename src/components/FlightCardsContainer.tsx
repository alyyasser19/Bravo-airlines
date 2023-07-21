import { FunctionComponent, memo } from "react";
import FlightContainer from "./FlightContainer";
import PrimaryButton from "./PrimaryButton";
import { Button } from "@mui/material";

const FlightCardsContainer: FunctionComponent = memo(() => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] text-left text-[1.33rem] text-dimgray-300 font-components-button-large md:flex-[unset] md:self-stretch">
      <div className="relative text-[1.5rem] tracking-[0.26px] text-lightslategray">
        10 out of 177 Results
      </div>
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
      />
      <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-[0rem] pr-[0.5rem] pl-[2.08rem] items-center justify-center gap-[4.17rem] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-[1.67rem] sm:box-border">
        <div className="w-1/5 flex flex-row items-center justify-start gap-[0.58rem] md:flex-col sm:flex-row sm:w-[100%!important]">
          <img
            className="relative w-[2.9rem] h-[3.83rem] sm:[transform:scale(0.8)]"
            alt=""
            src="/sia.svg"
          />
          <div className="relative tracking-[0.26px]">Singapore Airlines</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-between text-[1.75rem] text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
          <div className="relative w-[7.75rem] h-[4.33rem] mq428small:w-[6.67rem]">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1.33rem]">
              8:45 PM
            </div>
            <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-[1.33rem] tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-[1.33rem]">
              SIN
            </div>
          </div>
          <div className="relative w-[10.75rem] h-[4.58rem] text-center text-[1.33rem] text-gray-100 sm:[transform:scale(0.9)]">
            <img
              className="absolute h-[27.46%] w-[83.03%] top-[0%] right-[8.26%] bottom-[72.54%] left-[8.71%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/flighticon.svg"
            />
            <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-[1.08rem]">
              15H 10M, 2-stops
            </div>
          </div>
          <div className="relative w-[7.58rem] h-[4.33rem] text-right mq428small:w-[6.67rem]">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-[1.33rem]">
              7:55 PM
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
          <b className="flex-1 relative tracking-[0.34px]">S$ 900</b>
        </div>
      </div>
      <FlightContainer
        flightDetails="/japan.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/ana.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/americanairlines.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/japan1.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <Button
        variant="contained"
        color="primary"
      className="self-stretch relative w-[21.67rem] h-[4.17rem]  text-[1.33rem]  font-medium"
      >
        Show More Results
      </Button>
    </div>
  );
});

export default FlightCardsContainer;
