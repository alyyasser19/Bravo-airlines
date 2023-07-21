import { FunctionComponent, memo } from "react";
import WeeklyUpdatesContainer from "./WeeklyUpdatesContainer";

const NewsletterContainer: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start">
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background@2x.png"
        imageIds="/logo1.svg"
        smallImageDimensions="/social-icons1.svg"
      />
    </div>
  );
});

export default NewsletterContainer;
