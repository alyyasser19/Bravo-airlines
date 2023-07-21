import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFlightContainer from "../components/SearchFlightContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightCardsContainer from "../components/FlightCardsContainer";
import BookingContainer from "../components/BookingContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import Navbar from "../components/Navbar";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onbravoAirlinesLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1.33rem] text-cornflowerblue-300 font-components-button-large">
      <Navbar
      selectedTab="search"
      />
      <SearchFlightContainer />
      <div className="self-stretch flex flex-row py-[4.17rem] px-[6.67rem] items-start justify-center lg:p-[3.33rem] lg:box-border md:py-[1.67rem] md:px-[2rem] md:box-border">
        <SearchFilterContainer />
        <div className="flex-1 flex flex-row items-start justify-start gap-[2rem] md:flex-col md:gap-[80]">
          <FlightCardsContainer />
          <div className="rounded-md bg-primary-contrast w-[21.42rem] flex flex-col pt-[0rem] px-[0rem] pb-[1.67rem] box-border items-start justify-start gap-[1.5rem] md:w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.17rem]">
              <b className="self-stretch relative tracking-[0.04em] uppercase">
                Recently booked
              </b>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[0.08rem] shrink-0"
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-cornflowerblue-200 font-inter">
              <BookingContainer
                flightDetails="/icon.svg"
                airlineDetails="Singapore Airlines"
                flightPrice="$1128"
                originAirportCode="SIN"
                destinationAirportCode="Singapore"
                originCity="LAX"
                destinationCity="Los Angeles"
                classType="Economy"
                numberOfAdults="2 Adults"
                bookingPlatform="Expedia"
                timeSinceBooking="1s ago!"
              />
              <BookingContainer
                flightDetails="/icon1.svg"
                airlineDetails="American Airlines"
                flightPrice="$1024"
                originAirportCode="SFO"
                destinationAirportCode="San Francisco"
                originCity="SIN"
                destinationCity="Singapore"
                classType="First Class"
                numberOfAdults="1 Adults"
                bookingPlatform="Kayak"
                timeSinceBooking="2s ago!"
                propTextAlign="right"
              />
              <BookingContainer
                flightDetails="/icon2.svg"
                airlineDetails="Japan Airlines"
                flightPrice="$2996"
                originAirportCode="PHX"
                destinationAirportCode="Phoenix"
                originCity="DXB"
                destinationCity="Dubai"
                classType="Economy"
                numberOfAdults="3 Adults"
                bookingPlatform="Skyscanner"
                timeSinceBooking="3s ago!"
                propTextAlign="left"
              />
              <div className="self-stretch rounded-[3px] bg-cornflowerblue-500 flex flex-row py-[0.58rem] px-[0.83rem] items-center justify-center gap-[0.33rem]">
                <div className="relative leading-[1.33rem]">Show more</div>
                <img
                  className="relative w-[1.33rem] h-[1.33rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icon--back.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
