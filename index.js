const ATTRIBUTE_SEPARATORS = {
  class: ' ',
  rel: ' ',
  rev: ' ',
  style: ';',
  media: ','
};

function isSeparatedAttribute(name) {
  if (ATTRIBUTE_SEPARATORS[name] !== undefined)
    return ATTRIBUTE_SEPARATORS[name];
  return false;
}

function splitAttribute(name, value) {
  const splitter = isSeparatedAttribute(name);
  if (!splitter) return value;
  return value.split(splitter).map(i => i.trim());
}

function splitAttributes(map) {
  const retVal = Object.assign({}, map);

  for (const key in retVal) {
    retVal[key] = splitAttribute(key, retVal[key])
  }

  return retVal;
}

module.exports = {
  isSeparatedAttribute,
  splitAttribute,
  splitAttributes,
};
