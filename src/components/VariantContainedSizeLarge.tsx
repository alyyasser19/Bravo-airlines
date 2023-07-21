import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type VariantContainedSizeLargeType = {
  button?: string;

  /** Style props */
  variantContainedSizeLargePosition?: Property.Position;
  variantContainedSizeLargeBoxSizing?: Property.BoxSizing;
  buttonLineHeight?: Property.LineHeight;
  buttonColor?: Property.Color;
  buttonDisplay?: Property.Display;
};

const VariantContainedSizeLarge: FunctionComponent<VariantContainedSizeLargeType> =
  memo(
    ({
      button,
      variantContainedSizeLargePosition,
      variantContainedSizeLargeBoxSizing,
      buttonLineHeight,
      buttonColor,
      buttonDisplay,
    }) => {
      const variantContainedSizeLargeStyle: CSS.Properties = useMemo(() => {
        return {
          position: variantContainedSizeLargePosition,
          boxSizing: variantContainedSizeLargeBoxSizing,
        };
      }, [
        variantContainedSizeLargePosition,
        variantContainedSizeLargeBoxSizing,
      ]);

      const buttonStyle: CSS.Properties = useMemo(() => {
        return {
          lineHeight: buttonLineHeight,
          color: buttonColor,
          display: buttonDisplay,
        };
      }, [buttonLineHeight, buttonColor, buttonDisplay]);

      return (
        <div
          className="relative overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start text-left text-mini text-text-primary font-components-button-large"
          style={variantContainedSizeLargeStyle}
        >
          <div
            className="relative tracking-[0.46px] leading-[26px] uppercase font-medium"
            style={buttonStyle}
          >
            {button}
          </div>
        </div>
      );
    }
  );

export default VariantContainedSizeLarge;
