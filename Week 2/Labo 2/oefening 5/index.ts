import { question } from "readline-sync";

function Rot13() 
{
  const input = question("Enter the text to be encoded: ");
  let output = "";
  for (let i = 0; i < input.length; i++) 
  {
    let c = input.charCodeAt(i);
    if (c >= 65 && c <= 90) 
    {
      output += String.fromCharCode(((c - 65 + 13) % 26) + 65);
    } 
    else if (c >= 97 && c <= 122) 
    {
      output += String.fromCharCode(((c - 97 + 13) % 26) + 97);
    } 
    else 
    {
      output += input[i];
    }
  }
  console.log(output);
}

Rot13();
