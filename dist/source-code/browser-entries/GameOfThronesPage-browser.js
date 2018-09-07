(() => {
  const browserConfig = require('/Users/xyz/react-native-school/node_modules/@brillout/browser-config/index.js');

  browserConfig['hydratePage'] = require('/Users/xyz/react-native-school/node_modules/@reframe/browser/hydratePage.js');

  browserConfig['renderToDom'] = require('/Users/xyz/react-native-school/node_modules/@reframe/react/renderToDom.js');

  browserConfig['router'] = require('/Users/xyz/react-native-school/node_modules/@reframe/path-to-regexp/router.js');
})();

(() => {
  const browserConfig = require('/Users/xyz/react-native-school/node_modules/@brillout/browser-config/index.js');

  let pageConfig = require('/Users/xyz/react-native-school/pages/GameOfThronesPage/GameOfThronesPage.config.js');
  pageConfig = (pageConfig||{}).__esModule===true ? pageConfig.default : pageConfig;

  browserConfig.currentPageConfig = pageConfig;
})();

require('/Users/xyz/react-native-school/node_modules/@reframe/browser/browserEntry.js');
