const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/macbook/Dropbox/My Mac (lucass-MacBook-Pro.local)/Documents/dev/boilder-plate/password-generator-project-site/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/macbook/Dropbox/My Mac (lucass-MacBook-Pro.local)/Documents/dev/boilder-plate/password-generator-project-site/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/macbook/Dropbox/My Mac (lucass-MacBook-Pro.local)/Documents/dev/boilder-plate/password-generator-project-site/src/pages/index.js"))),
  "component---src-templates-default-js": hot(preferDefault(require("/Users/macbook/Dropbox/My Mac (lucass-MacBook-Pro.local)/Documents/dev/boilder-plate/password-generator-project-site/src/templates/default.js")))
}

