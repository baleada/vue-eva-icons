function toComponentCase (snakeCased) {
  return snakeCased
    .split('-')
    .map(word => capitalize(word))
    .join('')
}

function capitalize (word) {
  return word.length > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : word
}

module.exports = {
  toComponentCase,
}
