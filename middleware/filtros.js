let cf = function clearFiltros(params) {
  for (var property in params) {
    if (params[property] == 0 || params[property] == 'undefined' || params[property] == 'null' || !params[property]) {
      delete params[property];
    }
  }
  return params;
}

export default cf;