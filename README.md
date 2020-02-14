# **filtered-commit-analyzer**

See [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer) for more documentation.

## Install

```bash
$ npm install filtered-commit-analyzer -D
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    ["filtered-commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        {"type": "docs", "scope":"README", "release": "patch"},
        {"type": "refactor", "release": "patch"},
        {"type": "style", "release": "patch"}
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
      },
      "filterRules": {
        "scope": "onlyAllowScopesThisRegExPattern",
        "youCanUseAnyValidPropertyParsedFromYourCommitMessage": ".*"
      }
    }],
    "@semantic-release/release-notes-generator"
  ]
}
```
##### External package / file

`filterRules` can also reference a module, either by it's `npm` name or path:
```json
{
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "filterRules": "./config/filter-rules.js"
    }],
    "@semantic-release/release-notes-generator"
  ]
}
```
```js
// File: config/filter-rules.js
module.exports = {
  scope: "packageA|packageB"
};
```
