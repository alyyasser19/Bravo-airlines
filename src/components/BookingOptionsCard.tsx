import { FunctionComponent, memo, useMemo } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import CSS, { Property } from "csstype";

type BookingOptionsCardType = {
  stopOptionsText?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
};

const BookingOptionsCard: FunctionComponent<BookingOptionsCardType> = memo(
  ({ stopOptionsText, propWidth, propWidth1 }) => {
    const stopsStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const resultsStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth1,
      };
    }, [propWidth1]);

    return (
      <div
        className="relative w-[24.72rem] h-[8.83rem] text-left text-[1.83rem] text-dimgray-300 font-components-button-large"
        style={stopsStyle}
      >
        <b
          className="absolute top-[0rem] left-[0rem] tracking-[0.26px] inline-block w-[5.44rem]"
          style={resultsStyle}
        >
          {stopOptionsText}
        </b>
        <FormControlLabel
          className="absolute top-[4.17rem] left-[0rem]"
          label="1 Stop"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
        <FormControlLabel
          className="absolute top-[7.17rem] left-[0rem]"
          label="2 Stops"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
      </div>
    );
  }
);

export default BookingOptionsCard;
