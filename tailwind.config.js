const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // purge: {
  //   enabled: process.env.NODE_ENV === "production",
  //   content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue"]
  // },
  purge: false,
  theme: {
    extend: {
      colors: {
        red: {
          // hue: 359-345, saturation: 4-90, brightness: 100-32
          "100": "#FDE3E4",
          "200": "#FAC8C9",
          "300": "#F29395",
          "400": "#E46569",
          "500": "#D14147",
          "600": "#B6272F",
          "700": "#94151E",
          "800": "#680912",
          "900": "#350309"
        },
        teal: {
          // hue: 173-196, saturation: 0-100, brightness: 62-0
          "100": "#8C9D9B",
          "200": "#7A9B98",
          "300": "#579690",
          "400": "#398D87",
          "500": "#22827E",
          "600": "#127171",
          "700": "#07565C",
          "800": "#023840",
          "900": "#001A21"
        },
        green: {
          // hue: 123-88, saturation: 0-100, brightness: 65-0
          "100": "#92A493",
          "200": "#7FA380",
          "300": "#599D5A",
          "400": "#3B9439",
          "500": "#288821",
          "600": "#1E7710",
          "700": "#196005",
          "800": "#164400",
          "900": "#0F2200"
        },
        brown: {
          // hue: 41-20, saturation: 0-100, brightness: 95-0
          "100": "#F0E7D6",
          "200": "#EEDDB9",
          "300": "#E5C482",
          "400": "#D9A954",
          "500": "#C68C30",
          "600": "#AD6D17",
          "700": "#8C4C07",
          "800": "#632D00",
          "900": "#321400"
        },
        gray: {
          "100": "#eaebeb",
          "200": "#d5d7d8",
          "300": "#b7bbbd",
          "400": "#92979b",
          "500": "#72777b",
          "600": "#62676a",
          "700": "#4e5255",
          "800": "#36393a",
          "900": "#1d1f20"
        }
      }
    }
  },
  variants: {
    borderWidth: ({ after }) => after(["first", "last"]),
    borderRadius: ({ after }) => after(["first", "last"]),
    margin: ({ after }) => after(["first", "last"]),
    textColor: ({ after }) => after(["first", "last"]),
    backgroundColor: ({ after }) => after(["odd", "even"])
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
