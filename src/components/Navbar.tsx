import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  selectedTab: string;
}

const Navbar: FunctionComponent<Props> = memo(({ selectedTab }) => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  console.log("Navbar selectedTab", selectedTab);
  console.log(selectedTab == "explore");
  return (
    <header className="self-stretch bg-primary-contrast h-[6.42rem] flex flex-row py-[1.83rem] px-[6.67rem] box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-[1.17rem] text-darkslategray-500 font-components-button-large lg:pl-[3.33rem] lg:pr-[3.33rem] lg:box-border md:pl-[2rem] md:pr-[2rem] md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <button
          onClick={onFickleflightLogoContainerClick}
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[14.5rem] [3rem] overflow-hidden shrink-0"
        >
          <h1 className="font-baloo-bhai text-cornflowerblue-300">
            Bravo Airlines
          </h1>
        </button>
        <div className="flex flex-row items-center justify-end gap-[3rem] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[2.5rem] md:hidden">
            <button
              onClick={onExploreTextClick}
              className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.17rem] ${
                selectedTab == "explore"
                  ? "font-components-button-large text-cornflowerblue-200"
                  : ""
              } text-left inline-block`}
            >
              Explore
            </button>
            <button
              className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.17rem] ${
                selectedTab == "search"
                  ? "font-components-button-large text-cornflowerblue-200"
                  : ""
              } text-left inline-block`}
              onClick={onSearchTextClick}
            >
              Search
            </button>
            <button
              className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.17rem] ${
                selectedTab == "hotles" ?
                "font-components-button-large text-cornflowerblue-200":""
              } text-left inline-block`}
              onClick={onHotelsTextClick}
            >
              Hotels
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[1rem]">
            <img
              className="rounded-19xl w-[3rem] h-[3rem] object-cover"
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
