const { susupportedLngs, i18nNamespaces } = require('./src/config/enums');

module.exports = {
  // Key separator used in your translation keys
  contextSeparator: '_',

  // Save the \_old files
  createOldCatalogs: true,

  // Default namespace used in your i18next config
  defaultNamespace: i18nNamespaces[0],

  // Default value to give to empty keys
  // You may also specify a function accepting the locale, namespace, and key as arguments
  defaultValue: '__STRING_NOT_TRANSLATED__',

  // Indentation of the catalog files
  indentation: 2,

  // Keep keys from the catalog that are no longer in code
  keepRemoved: false,

  // Key separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.
  keySeparator: '.',

  // Control the line ending. See options at https://github.com/ryanve/eol
  lineEnding: 'auto',

  // An array of the locales in your applications
  locales: susupportedLngs,

  // Namespace separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.
  namespaceSeparator: ':',

  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()
  output: 'public/locales/$LOCALE/$NAMESPACE.json',

  // Plural separator used in your translation keys
  // If you want to use plain english keys, separators such as `_` might conflict. You might want to set `pluralSeparator` to a different string that does not occur in your keys.
  pluralSeparator: '_',

  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file
  input: undefined,

  // Whether or not to sort the catalog. Can also be a [compareFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters)
  sort: true,

  // Whether to ignore default values
  // You may also specify a function accepting the locale and namespace as arguments
  skipDefaultValues: false,

  // Whether to use the keys as the default value; ex. "Hello": "Hello", "World": "World"
  // This option takes precedence over the `defaultValue` and `skipDefaultValues` options
  // You may also specify a function accepting the locale and namespace as arguments
  useKeysAsDefaultValue: false,

  // Display info about the parsing including some stats
  verbose: true,

  // Exit with an exit code of 1 on warnings
  failOnWarnings: false,

  // Exit with an exit code of 1 when translations are updated (for CI purpose)
  failOnUpdate: false,

  // If you wish to customize the value output the value as an object, you can set your own format.
  // ${defaultValue} is the default value you set in your translation function.
  // Any other custom property will be automatically extracted.
  customValueTemplate: null,
  //
  // Example:
  // {
  //   message: "${defaultValue}",
  //   description: "${maxLength}", // t('my-key', {maxLength: 150})
  // }

  // The locale to compare with default values to determine whether a default value has been changed.
  // If this is set and a default value differs from a translation in the specified locale, all entries
  // for that key across locales are reset to the default value, and existing translations are moved to
  // the `_old` file.
  resetDefaultValueLocale: null,

  // If you wish to customize options in internally used i18next instance, you can define an object with any
  // configuration property supported by i18next (https://www.i18next.com/overview/configuration-options).
  // { compatibilityJSON: 'v3' } can be used to generate v3 compatible plurals.
  i18nextOptions: null,
}
