function miniCompiler(input: string): string {
  let numericValue = 0;
  let output = '';

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case '#':
        numericValue++;
        break;
      case '@':
        numericValue--;
        break;
      case '*':
        numericValue *= numericValue;
        break;
      case '&':
        output += numericValue.toString();
        break;
    }
  }

  return output;
}

// Ejemplos de uso:
const ejemplo1 = "##*&";
console.log(`Entrada: "${ejemplo1}"`);
console.log(`Salida esperada: "${miniCompiler(ejemplo1)}"`);
console.log();

const prueba = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
console.log(`Entrada: "${prueba}"`);
console.log(`Salida esperada: "${miniCompiler(prueba)}"`);
