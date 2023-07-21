import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import HotelHeader from "../components/HotelHeader";
import HotelResultsContainer from "../components/HotelResultsContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";

const HotelsPage: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-start justify-start">
      <Navbar selectedTab="hotles" />
      <HotelHeader />
      <HotelResultsContainer />
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background1@2x.png"
        imageIds="/logo2.svg"
        smallImageDimensions="/social-icons2.svg"
      />
    </div>
  );
};

export default HotelsPage;
