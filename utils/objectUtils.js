exports.filterObject = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.omitFields = (obj, ...excludedFields) => {
  const newObj = { ...obj };
  excludedFields.forEach((field) => {
    delete newObj[field];
  });
  return newObj;
};
