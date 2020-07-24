const { empty, generateIndex } = require('@baleada/prepare'),
      generateComponents = require('./generateComponents'),
      compile = require('./compile')

function prepare () {
  /* Empty destinations */
  empty('lib')
  empty('src')

  /* Generate components */
  generateComponents()

  /* Index all */
  generateIndex('src', { extensions: ['vue'] })

  /* Rollup */
  compile()
}

prepare()
