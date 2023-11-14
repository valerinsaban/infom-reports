let cf = function clearFiltros(params) {
  for (var property in params) {
    if (params[property] == 0) {
      delete params[property];
    }
  }
  return params;
}

export default cf;