var cesarSetence = '';
var cesarDeciphered= '';

function cipher(message){
  if(message.length===0){
    return cipher(prompt('Por favor, digite uma mensagem!'));
  }
  for(letter of message){
    var x = letter.charCodeAt();
    if(x>=65 && x<=90){
      var xCesar = (x -65 + 33)%26 +65;
      var letterCesar = String.fromCharCode(xCesar);
      cesarSetence += letterCesar;
    }else if(x>=97 && x<=122){
      var xCesar = (x -97 + 33)%26 +97;
      var letterCesar = String.fromCharCode(xCesar);
      cesarSetence += letterCesar;
    }
    else {
      return cipher(prompt('Caracter inválido. Por favor, digite apenas letras!\nMensagem:'));
    }
  } return cesarSetence;
}cipher(prompt('Mensagem:'));

function decipher(mensage){
  for(letter of mensage){
    var y = letter.charCodeAt();
    if(y>=65 && y<=90){
      var yOriginal = (y +65 - 33)%26 +65;
      var letterOriginal = String.fromCharCode(yOriginal);
      cesarDeciphered += letterOriginal;
    }else{
      var yOriginal = (y + 97 - 45)%26 +97;
      var letterOriginal = String.fromCharCode(yOriginal);
      cesarDeciphered += letterOriginal;
    } 
  }   
  return cesarDeciphered;
}decipher(cesarSetence)