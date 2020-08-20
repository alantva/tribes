const hasOwnProperty = (option, property) =>
  Object.prototype.hasOwnProperty.call(option, property)

const checkOption = (option) =>
  hasOwnProperty(option, '_id') && hasOwnProperty(option, 'description')

const checkOptions = (options) =>
  options.filter(checkOption).length === options.length

const compareOptions = (a, b) => {
  let comparison = 0
  const valA = a.description.toUpperCase()
  const valB = b.description.toUpperCase()
  if (valA > valB) {
    comparison = 1
  } else if (valA < valB) {
    comparison = -1
  }
  return comparison
}

const sortOptions = (options) => {
  if (checkOptions(options)) {
    return options.sort(compareOptions)
  }
  return options
}

export default sortOptions
