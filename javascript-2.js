// Converter texto em número
const ageText = prompt('type your age:');
const age = Number(ageText);
const ageString = String(age);
const ageString2 = age + ''; // mais comum

/* Converter número em texto
 * const age=prompt('Digite sua idade: ');
 * const ageString=String(age);
 */
if(age > 18){
    document.write('você é adulto');

} else if(age > 12){
    document.write('você é adolecente');

} else {
    document.write('você é criança');
}
/* \n --> quebra de linha (console)
 * <br> --> quebra de linha (corpo da página)
 */
document.write('<br>');

switch(age){
    case 16:
        document.write('já pode votar');
        break;
    case 18:
        document.write('já pode beber e dirigir, não ao mesmo tempo');
        break;
    case 65:
        document.write('já pode pegar ônibus de graça');
        break;
    default:
        document.write('se lascou');
        break;
}









