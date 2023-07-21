import { FunctionComponent, memo, useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const SearchFlightContainer: FunctionComponent = memo(() => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start text-left text-[5.08rem] text-primary-contrast font-baloo-bhai">
        <div className="self-stretch relative h-[30.17rem] sm:h-[40rem]">
          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
          <img
            className="absolute h-full w-full top-[0.03rem] right-[0rem] bottom-[-0.03rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/banner-background@2x.png"
          />
          <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0rem] left-[0rem] flex flex-col py-[0rem] px-[6.67rem] box-border items-center justify-center gap-[1.67rem] md:pl-[2.5rem] md:pr-[2.5rem] md:box-border md:w-full md:top-[calc(44%_-_8.04rem_-_0px)] sm:w-full sm:top-[calc(32%_-_8.04rem_-_0px)]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[5.58rem] md:text-[3.5rem] md:leading-[4rem] sm:text-[2.58rem] sm:leading-[3.33rem]">
                Where are you off too?
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-row p-[1.67rem] items-start justify-start md:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="flex-1 flex flex-col p-[0.42rem] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                  <Autocomplete
                    className="self-stretch"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)Sanya (SYX)",
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
                </div>
                <div className="flex-1 flex flex-col p-[0.42rem] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                  <Autocomplete
                    className="self-stretch"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)Sanya (SYX)",
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
                    defaultValue="Sydney (SYD)"
                    size="medium"
                  />
                </div>
                <div className="flex-1 flex flex-col p-[0.42rem] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch">
                    <DatePicker
                      label="Date"
                      value={dateFieldDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setDateFieldDateTimePickerValue(newValue);
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
              </div>
              <div className="flex flex-col p-[0.42rem] items-center justify-center md:w-full md:text-left">
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded-9xs w-[13.67rem] h-[4.67rem] overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]">
                  <div className="relative text-[1.25rem] tracking-[0.46px] leading-[2.17rem] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block w-[12.25rem]">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
});

export default SearchFlightContainer;
