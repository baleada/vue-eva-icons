const fs = require('fs'),
      { toComponentCase } = require('./util'),
      weirdDefsThing = /<defs><style\/><\/defs>/

module.exports = function () {
  const getIconArray = json => Object.keys(json).map(key => ({
          componentName: `Eva${toComponentName(key)}`,
          contents: json[key].replace(weirdDefsThing, ''),
          viewBox: '0 0 24 24',
        })),
        toComponentName = snakeCased => toComponentCase(snakeCased),
        fillIcons = getIconArray(JSON.parse(fs.readFileSync('./node_modules/eva-icons/fill-icons.json'))),
        outlineIcons = getIconArray(JSON.parse(fs.readFileSync('./node_modules/eva-icons/outline-icons.json')))

  return fillIcons.concat(outlineIcons)
}