import commonjs from '@rollup/plugin-commonjs';

export default args => {
  const result = args.configDefaultConfig;
  const [jsConfig, mJsConfig] = result;
  [jsConfig, mJsConfig].forEach(config => {
    // copy from mx
    config.plugins[10] = commonjs({
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      transformMixedEsModules: true,
      requireReturnsDefault: "auto",
      // ignore: id => (config.external || []).some(value => new RegExp(value).test(id))
    });

    const onwarn = config.onwarn;
    config.onwarn = warning => {
      if (
        warning.loc &&
        warning.loc.file &&
        warning.loc.file.includes("node_modules")
      ) {
        return;
      }
      if ([
        'NAMESPACE_CONFLICT',
        'CIRCULAR_DEPENDENCY',
        'EVAL'
      ].includes(warning.code)) return;

      onwarn(warning);
    };
  });

  return result;
};
