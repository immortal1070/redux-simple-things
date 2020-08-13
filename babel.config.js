module.exports = (api) => {
  const isInDevelopmentMode = api.env() === 'development'
  api.cache(!isInDevelopmentMode)

  const pluginsList = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-typescript'
  ]

  if (isInDevelopmentMode) {
    pluginsList.push(require.resolve('react-hot-loader/babel'))
  }

  return {
    plugins: pluginsList,
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: '2.0.0',
          useBuiltIns: 'entry',
          modules: 'commonjs',
          debug: false
        }
      ],
      [
        '@babel/preset-typescript',
        {
          corejs: '2.0.0',
          useBuiltIns: 'entry',
          modules: 'commonjs',
          debug: false
        }
      ]
    ],
    sourceMaps: 'both',
    babelrc: false,
    ignore: ['*.test.js']
  }
}
