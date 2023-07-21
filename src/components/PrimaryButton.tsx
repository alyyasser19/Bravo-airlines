import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type PrimaryButtonType = {
  searchFlights?: string;

  /** Style props */
  primaryButtonPosition?: Property.Position;
  primaryButtonWidth?: Property.Width;
  primaryButtonHeight?: Property.Height;
  primaryButtonCursor?: Property.Cursor;
  primaryButtonBorder?: Property.Border;
  primaryButtonPadding?: Property.Padding;
  primaryButtonBackgroundColor?: Property.BackgroundColor;
  primaryButtonTop?: Property.Top;
  primaryButtonLeft?: Property.Left;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  searchFlightsLeft?: Property.Left;
  searchFlightsDisplay?: Property.Display;
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = memo(
  ({
    searchFlights,
    primaryButtonPosition,
    primaryButtonWidth,
    primaryButtonHeight,
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
    primaryButtonTop,
    primaryButtonLeft,
    rectangleDivBackgroundColor,
    searchFlightsLeft,
    searchFlightsDisplay,
  }) => {
    const primaryButtonStyle: CSS.Properties = useMemo(() => {
      return {
        position: primaryButtonPosition,
        width: primaryButtonWidth,
        height: primaryButtonHeight,
        cursor: primaryButtonCursor,
        border: primaryButtonBorder,
        padding: primaryButtonPadding,
        backgroundColor: primaryButtonBackgroundColor,
        top: primaryButtonTop,
        left: primaryButtonLeft,
      };
    }, [
      primaryButtonPosition,
      primaryButtonWidth,
      primaryButtonHeight,
      primaryButtonCursor,
      primaryButtonBorder,
      primaryButtonPadding,
      primaryButtonBackgroundColor,
      primaryButtonTop,
      primaryButtonLeft,
    ]);

    const rectangleDivStyle: CSS.Properties = useMemo(() => {
      return {
        backgroundColor: rectangleDivBackgroundColor,
      };
    }, [rectangleDivBackgroundColor]);

    const searchFlightsStyle: CSS.Properties = useMemo(() => {
      return {
        left: searchFlightsLeft,
        display: searchFlightsDisplay,
      };
    }, [searchFlightsLeft, searchFlightsDisplay]);

    return (
      <div
        className="relative w-[220px] h-[72px] text-center text-lg text-primary-contrast font-components-button-large"
        style={primaryButtonStyle}
      >
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orange-200"
          style={rectangleDivStyle}
        />
        <div
          className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_62.5px)] tracking-[0.04em] font-medium"
          style={searchFlightsStyle}
        >
          {searchFlights}
        </div>
      </div>
    );
  }
);

export default PrimaryButton;
