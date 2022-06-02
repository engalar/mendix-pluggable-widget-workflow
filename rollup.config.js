import { normalize } from 'path';
import commonjs from '@rollup/plugin-commonjs';
import alias from "@rollup/plugin-alias";
import { findIndex } from 'lodash';
import { join } from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import * as path from 'path';
import pluginutils from '@rollup/pluginutils';

function replacePlugin(config, name, plugin) {
  if (typeof name == 'string') {

  }

  if (typeof name == 'number') {
    config.plugins[name] = plugin;
  }

}
function getName(id) {
  const name = pluginutils.makeLegalIdentifier(path.basename(id, path.extname(id)));
  if (name !== 'index') {
    return name;
  }
  return pluginutils.makeLegalIdentifier(path.basename(path.dirname(id)));
}
export default args => {
  const result = args.configDefaultConfig;
  const [jsConfig, mJsConfig] = result;
  [jsConfig, mJsConfig].forEach(config => {
    const newAlias = alias({
      entries: {
        "react-hot-loader/root": join(__dirname, "node_modules/@mendix/pluggable-widgets-tools/configs/hot"),
        "@emotion/react": join(__dirname, "node_modules/@emotion/react/dist/emotion-react.esm.js"),
        "@emotion/utils": join(__dirname, "node_modules/@emotion/utils/dist/emotion-utils.esm.js"),
        "@emotion/serialize": join(__dirname, "node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),
        "@emotion/styled": join(__dirname, "node_modules/@emotion/styled/dist/emotion-styled.cjs.js"),
        // "resize-observer-polyfill": join(__dirname, "node_modules/resize-observer-polyfill/src/index.js"),
        // "@projectstorm/react-diagrams": join(__dirname, "node_modules/@projectstorm/react-diagrams/dist/index.umd.js"),
        // "@projectstorm/react-diagrams-core": join(__dirname, "node_modules/@projectstorm/react-diagrams-core/src/index.ts"),
      }
    });

    const newNodeResolve = nodeResolve({
      preferBuiltins: false,
      // mainFields: ["module", "browser", "main"]

      //patch
      mainFields: ["module", "main"]
    });

    // copy from mx
    // circle dep https://github.com/rollup/rollup/issues/3805
    const newCommonjs = commonjs({
      //origin
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      transformMixedEsModules: true,
      requireReturnsDefault: 'auto',
      // ignore: id => (config.external || []).some(value => new RegExp(value).test(id))

      //patch
      exclude: [
        /.*\.esm\.js/gm,
        /.*\.es\.js/gm,
        // /node_modules\/resize-observer-polyfill\/src\/index.js/gm,
        // /node_modules\/@projectstorm\/react-diagrams-core\/dist\/entities\/node\/NodeWidget.js/gm,
      ],
      // exclude: '*.browser.esm.js',
      //https://www.npmjs.com/package/@rollup/plugin-commonjs#requireReturnsDefault
      // requireReturnsDefault: true,
      //https://www.npmjs.com/package/@rollup/plugin-commonjs#defaultismoduleexports
      // defaultIsModuleExports: true,
    });

    /*
    widget-typing
    clear
    command
    null
    url
    postcss
    alias
    node-resolve
    typescript
    babel
    commonjs
    re
    null
    image
    null
    null
    command */
    replacePlugin(config, 6, newAlias);
    replacePlugin(config, 7, newNodeResolve);
    replacePlugin(config, 10, newCommonjs);

    config.plugins.push({
      name: 'hardcode',
      options(rawOptions) {
        // We inject the resolver in the beginning so that "catch-all-resolver" like node-resolver
        // do not prevent our plugin from resolving entry points ot proxies.
        const plugins = Array.isArray(rawOptions.plugins)
          ? [...rawOptions.plugins]
          : rawOptions.plugins
            ? [rawOptions.plugins]
            : [];
        plugins.unshift({
          name: 'hardcode-child',
          load(id) {
            if (id.startsWith('\0') && id.endsWith('node_modules\\resize-observer-polyfill\\dist\\ResizeObserver.es.js?hardcode')) {
              const name = getName(id);
              const result = `import * as ${name} from ${JSON.stringify(`\0${id.slice(1).replace('?hardcode', '')}?commonjs-module`)}; export default {default: /*lwg666*/${name}};`;
              console.log('my load', result);
              return result;
            }
            return null;
          },
          async resolveId(importee, importer, resolveOptions) {
            if (importee.endsWith('node_modules\\resize-observer-polyfill\\dist\\ResizeObserver.es.js')) {
              return `\0${importee}?hardcode`
            } else { return null }
          }

        });
        return { ...rawOptions, plugins };
      },
    })


    const onwarn = config.onwarn;
    config.onwarn = warning => {
      const ignoredWarnings = [
        {
          ignoredCode: 'CIRCULAR_DEPENDENCY',
          ignoredPath: 'node_modules/@projectstorm/geometry/dist/Polygon.js',
        },
        {
          ignoredCode: 'CIRCULAR_DEPENDENCY',
          ignoredPath: 'node_modules/@projectstorm/react-diagrams-routing/dist/link/PathFindingLinkFactory.js',
        },
        {
          ignoredCode: 'CIRCULAR_DEPENDENCY',
          ignoredPath: 'node_modules/@projectstorm/react-diagrams-routing/dist/link/RightAngleLinkFactory.js',
        },
      ]

      // only show warning when code and path don't match
      // anything in above list of ignored warnings
      if (!ignoredWarnings.some(({ ignoredCode, ignoredPath }) => (
        warning.code === ignoredCode &&
        normalize(warning.importer).includes(normalize(ignoredPath))))
      ) {
        onwarn(warning);
      }
    };
  });

  return result;
};
