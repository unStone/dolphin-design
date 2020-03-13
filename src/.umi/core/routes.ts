import { ApplyPluginsType } from '/Users/ssstone/cl/work/baifendian/dolphin-design/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/ssstone/cl/work/baifendian/dolphin-design/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Hello dumi!","meta":{}},{"title":"Avatar","path":"/avatar","meta":{},"children":[]}]}},"locales":[],"navs":{},"title":"dolphin-design","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1584084509121,
          "slugs": [
            {
              "depth": 2,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            },
            {
              "depth": 2,
              "value": "Avatar",
              "heading": "avatar"
            }
          ],
          "title": "Hello dumi!"
        },
        "title": "Hello dumi!"
      },
      {
        "path": "/avatar",
        "component": require('../../../docs/Avatar/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/Avatar/index.md",
          "updatedTime": 1584084856381,
          "slugs": [
            {
              "depth": 2,
              "value": "Avatar",
              "heading": "avatar"
            }
          ],
          "title": "Avatar",
          "group": {
            "path": "/avatar",
            "title": "Avatar"
          }
        },
        "title": "Avatar"
      }
    ],
    "title": "dolphin-design"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
