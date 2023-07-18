//An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

let entradaUsuario = "oi";

if(/(.).*?\1/.test(entradaUsuario) == true ){

    console.log(`para que voce tenha uma noção, o que voce deu de entrada foi isto ${entradaUsuario}`);
  
    console.log('Isso não é um isograma');
}
else{

    console.log('Isso é um isogram, já que não se repete nenhuma palavra mais de 1 vez');
}


