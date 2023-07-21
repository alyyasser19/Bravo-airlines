import { FunctionComponent, memo, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const HeroContainer: FunctionComponent = memo(() => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch flex flex-col items-center justify-start text-center text-[5.08rem] text-primary-contrast font-baloo-bhai">
        <Navbar 
        selectedTab="explore"
        />
        <div className="self-stretch relative h-[53.33rem]">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[53.33rem]" />
          <img
            className="absolute w-full top-[0.03rem] right-[0rem] left-[0rem] max-w-full overflow-hidden h-[53.33rem] object-cover"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="absolute top-[0rem] left-[0rem] w-full h-[53.33rem] flex flex-col py-[0rem] px-[11.67rem] box-border items-center justify-center gap-[3.58rem] md:pl-[2.5rem] md:pr-[2.5rem] md:box-border">
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.42rem]">
              <div className="self-stretch relative leading-[5.58rem] sm:text-[3.5rem] sm:leading-[4rem]">{`Let’s explore & travel the world`}</div>
              <div className="self-stretch relative text-[2rem] leading-[2.67rem] font-components-button-large">
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-[1.67rem] items-start justify-start gap-[0.33rem] text-left text-[1.67rem] text-darkslategray-600 font-components-button-large md:flex-col sm:mt-[1.67rem]">
              <div className="self-stretch overflow-hidden flex flex-row p-[0.42rem] items-center justify-start gap-[0.42rem] sm:flex-col sm:items-start">
                <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-[0.83rem] sm:mb-[0.5rem] sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke-0 sm:flex-[unset] sm:self-stretch">
                  Search flights
                </b>
                <div className="flex flex-row items-center justify-start sm:w-full">
                  <div className="relative w-[18.04rem] h-[3.17rem] sm:w-[100%!important]">
                    <FormControlLabel
                      className="absolute top-[0rem] left-[0rem]"
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className="absolute top-[0rem] left-[8.83rem]"
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-[1rem] text-gray-300 md:flex-col">
                <div className="flex-1 flex flex-row p-[0.42rem] items-start justify-start gap-[0.83rem] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                  <Autocomplete
                    className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)",
                      "Sanya (SYX)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                    size="medium"
                  />
                  <Autocomplete
                    className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)",
                      "Sanya (SYX)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Arrival"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Siem Reap (REP)"
                    size="medium"
                  />
                  <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                    <DatePicker
                      label="Date"
                      value={selectOutlinedDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setSelectOutlinedDateTimePickerValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          size: "medium",
                          fullWidth: true,
                          color: "primary",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col p-[0.42rem] items-center justify-center text-center text-[1.25rem] text-primary-contrast md:w-full md:text-left">
                  <div
                    className="rounded-9xs bg-orange-200 w-[13.67rem] h-[4.67rem] overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] cursor-pointer hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className="relative tracking-[0.46px] leading-[2.17rem] uppercase font-medium inline-block w-[12.25rem]">
                      Search flights
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
});

export default HeroContainer;
