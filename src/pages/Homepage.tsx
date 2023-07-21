import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";

const Homepage: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-start gap-[5.75rem] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
      <HeroContainer />
      <div className="w-full flex flex-col py-[0rem] px-[6.67rem] box-border items-center justify-start gap-[6.67rem] max-w-[106.67rem] md:pl-[2.5rem] md:pr-[2.5rem] md:box-border">
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <WeeklyUpdatesContainer
        imageDimensions="/subscribe-section-background@2x.png"
        imageIds="/logo.svg"
        smallImageDimensions="/social-icons.svg"
      />
    </div>
  );
};

export default Homepage;
