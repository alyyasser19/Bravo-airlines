/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          "100": "#fba403",
          "200": "#f99a0e",
        },
        gray: {
          "100": "#8e8e94",
          "200": "#191919",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(0, 0, 0, 0.23)",
          "500": "rgba(255, 255, 255, 0.2)",
        },
        aliceblue: "#f3f7fb",
        whitesmoke: {
          "100": "#f8f9fb",
          "200": "#eaeaea",
          "300": "#e8e9eb",
        },
        darkorange: "#dc880b",
        peru: "#9e6104",
        slategray: "#576074",
        darkslategray: {
          "100": "#484f5e",
          "200": "#3f4c5a",
          "300": "#40495e",
          "400": "#434343",
          "500": "#424242",
          "600": "#303030",
        },
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
          "400": "rgba(18, 98, 175, 0.05)",
          "500": "rgba(18, 98, 175, 0.06)",
        },
        gainsboro: {
          "100": "#e2e6ee",
          "200": "#e0e0e0",
          "300": "rgba(226, 226, 226, 0.1)",
        },
        lavender: "#ccdcec",
        darkgray: {
          "100": "#adadad",
          "200": "#a1a1a1",
          "300": "#999",
          "400": "#959595",
        },
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
        lightgray: "#cecece",
        black: "#000",
        silver: "#bdbdbd",
        dimgray: {
          "100": "#646468",
          "200": "#616161",
          "300": "#57575d",
        },
        lightslategray: "#7e8b97",
        "primary-contrast": "#fff",
        "studio-darkmode-maincta-457eff": "#457eff",
        ghostwhite: {
          "100": "#fafbff",
          "200": "#f4f6fb",
        },
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        "studio-darkmode-explainertext-485269": "#485269",
        saddlebrown: "#99600a",
        "studio-universal-confirm-4fc786": "#4fc786",
        mediumseagreen: "rgba(79, 199, 134, 0.3)",
        "studio-lightmode-placeholders-bac2d6": "#bac2d6",
        deepskyblue: "#4bc9ff",
        slateblue: "#6967da",
        indianred: "#f4596c",
        "studio-darkmode-popuplabels-5e6a86": "#5e6a86",
        "studio-darkmode-normalsolid-icons-96a2be": "#96a2be",
        lightsteelblue: "#b5bccc",
        "action-hover": "rgba(0, 0, 0, 0.04)",
        "text-primary": "rgba(0, 0, 0, 0.87)",
      },
      fontFamily: {
        "components-button-large": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
        inter: "Inter",
        "just-me-again-down-here": "'Just Me Again Down Here'",
        helvetica: "Helvetica",
        alegreya: "Alegreya",
        "source-code-pro": "'Source Code Pro'",
      },
      borderRadius: {
        "12xl": "31px",
        "3xs": "10px",
        "45xl": "64px",
        "19xl": "38px",
        "8xl": "27px",
        "12xs": "1px",
        "5xs-8": "7.8px",
        "10xs-5": "2.5px",
        "9xs": "4px",
        "base-1": "16.1px",
      },
    },
    fontSize: {
      base: "1.33rem",
      xl: "1.67rem",
      lg: "1.5rem",
      mini: "1.25rem",
      "11xl": "2.5rem",
      "3xl": "1.83rem",
      "13xl": "2.67rem",
      "19xl": "3.17rem",
      "5xl": "2rem",
      smi: "1.08rem",
      xs: "1rem",
      "42xl": "5.08rem",
      "23xl": "3.5rem",
      sm: "1.17rem",
      "2xl": "1.75rem",
      "12xl": "2.58rem",
      "27xl": "3.83rem",
      "55xl": "6.17rem",
      "41xl": "5rem",
      "9xs": "0.33rem",
      "8xs": "0.42rem",
      "8xs-5": "0.38rem",
      "5xs-5": "0.63rem",
      "9xs-8": "0.32rem",
      "7xs-5": "0.46rem",
      "5xs": "0.67rem",
      "3xs-5": "0.79rem",
      "9xs-5": "0.29rem",
      "7xs": "0.5rem",
      "9xs-3": "0.27rem",
      "10xs": "0.25rem",
      "46xl": "5.42rem",
      "6xs-6": "0.55rem",
      "3xs-2": "0.77rem",
      "2xs-3": "0.86rem",
      "29xl": "4rem",
      "32xl": "4.25rem",
      "131xl": "12.5rem",
      "21xl": "3.33rem",
      "9xs-2": "0.27rem",
      "9xs-7": "0.31rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "1100px",
      },
      sm: {
        max: "650px",
      },
      mq428small: {
        raw: "screen and (max-width: 428px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};