const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\jeffe\\OneDrive\\Documents\\GitHub\\WorkshopPowerSites\\src\\pages\\index.js")))
}

