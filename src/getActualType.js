module.exports = function getActualType(schema, subSchemas) {
  if (schema.type) {
    return schema.type;
  } else if (schema.$ref && subSchemas[schema.$ref]) {
    return subSchemas[schema.$ref];
  }
  return undefined;
};
