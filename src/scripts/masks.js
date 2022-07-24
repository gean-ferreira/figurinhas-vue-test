const mask = {
  //tranforma o valor passado como parametro em real
  convertToReal(value) {
    value = parseFloat(value);
    value = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return value;
  }
}

export default mask;