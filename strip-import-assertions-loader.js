// Webpack loader to strip import assertions from source code
module.exports = function (source) {
  // Remove 'with { type: "json" }' or 'with { type: 'json' }' from imports
  return source.replace(/\s+with\s+\{\s*type:\s*['"]json['"]\s*\}/g, '');
};
