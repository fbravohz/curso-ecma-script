try {
  hello();
} catch (e) {
  console.log(e);
}

// Errores personalizados
// Pero se recomienda seguir usando el anterior
try {
  anotherFn();
} catch {
  console.log('esto es un error');
}