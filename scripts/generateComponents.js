const fs = require('fs'),
      getIcons = require('./getIcons')

module.exports = function() {
  const icons = getIcons()
  icons.forEach(icon => {
    const component = componentBuilder(icon)
    writeComponent(icon.componentName, component)
  })

  console.log(`Generated ${icons.length} components`)
}

function writeComponent (componentName, component) {
  fs.writeFileSync(
    `./src/${componentName}.vue`,
    component
  )
}

function componentBuilder ({ componentName, contents, viewBox }) {
  return `\
<template>\n\
  <svg\n\
    role="img"\n\
    viewBox="${viewBox}"\n\
    xmlns="http://www.w3.org/2000/svg"\n\
    preserveAspectRatio="xMidYMid meet"\n\
  >\n\
    ${contents}\n\
  </svg>\n\
</template>\n\
\n\
<script>\n\
export default {\n\
  name: '${componentName}',\n\
}\n\
</script>\n\
`
}