module.exports = {
  bracketSameLine: false,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  /**
   * A workaround for pnpm. If you are using yarn or npm, you can remove this line.
   *
   * @see https://github.com/simonhaenisch/prettier-plugin-organize-imports/issues/34
   */
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrder: [
    '^stores/(.*)$',
    '^services/(.*)$',
    '^resolvers/(.*)$',
    '^hooks/(.*)$',
    '^helpers/(.*)$',
    '^types/(.*)$',
    '^constants/(.*)$',
    '^pages/(.*)$',
    '^components/(.*)$',
    '^[./]',
    '^assets/(.*)$',
  ],
};
