import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type PilldefaultType = {
  beds?: string;

  /** Style props */
  pilldefaultPosition?: Property.Position;
  pilldefaultBackgroundColor?: Property.BackgroundColor;
  bedsColor?: Property.Color;
};

const Pilldefault: FunctionComponent<PilldefaultType> = memo(
  ({ beds, pilldefaultPosition, pilldefaultBackgroundColor, bedsColor }) => {
    const pilldefaultStyle: CSS.Properties = useMemo(() => {
      return {
        position: pilldefaultPosition,
        backgroundColor: pilldefaultBackgroundColor,
      };
    }, [pilldefaultPosition, pilldefaultBackgroundColor]);

    const bedsStyle: CSS.Properties = useMemo(() => {
      return {
        color: bedsColor,
      };
    }, [bedsColor]);

    return (
      <div
        className="relative rounded-8xl flex flex-row py-[11px] px-[21px] items-center justify-center text-center text-base text-primary-contrast font-components-button-large border-[1px] border-solid border-primary-contrast"
        style={pilldefaultStyle}
      >
        <div
          className="relative tracking-[0.04em] capitalize font-medium"
          style={bedsStyle}
        >
          {beds}
        </div>
      </div>
    );
  }
);

export default Pilldefault;
