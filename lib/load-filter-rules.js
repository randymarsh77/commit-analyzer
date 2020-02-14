const importFrom = require('import-from');

/**
 * Load the `filterRules` rules.
 *
 * If `filterRules` parameter is a `string` then load it as an external module with `require`.
 *
 * @param {Object} pluginConfig The plugin configuration.
 * @param {String|Array} pluginConfig.filterRules A `String` to load an external module or an `Array` of rules.
 * @param {Object} context The semantic-release context.
 * @param {String} context.cwd The current working directory.
 *
 * @return {Array} the loaded and validated `filterRules`.
 */
module.exports = ({filterRules}, {cwd}) => {
  let loadedFilterRules;

  if (filterRules) {
    loadedFilterRules =
      typeof filterRules === 'string'
        ? importFrom.silent(__dirname, filterRules) || importFrom(cwd, filterRules)
        : filterRules;
  }

  return loadedFilterRules;
};
