module.exports = function toReadable (number) {
  let arr19 = ['zero','one','two','three','four','five','six','seven',
  'eight','nine','ten','eleven','twelve','thirteen','fourteen',
  'fifteen','sixteen','seventeen','eighteen','nineteen'];
  let arr99 = ['twenty','thirty','forty','fifty','sixty','seventy',
  'eighty','ninety'];
  let arr999 = ['hundred'];
  let numw = '';
  if(number<=19){
numw = arr19[number];
  }
  else if(number>19 && number<=99){
      if(number%10 === 0) numw = arr99[Math.floor(number/10)-2];
else numw = arr99[Math.floor(number/10)-2]+' '+arr19[number%10];
  }
  else {
    if(number%100 === 0) numw = arr19[Math.floor(number/100)]+' '+arr999[0];
    else if(number%10 ===0 && number%100 !== 0 && number%100 > 19) numw =  arr19[Math.floor(number/100)]+' '+arr999[0]+' '+arr99[Math.floor((number%100)/10)-2];
    else if(number%100>0 && number%100<=19) numw = arr19[Math.floor(number/100)]+' '+arr999[0]+' '+arr19[number%100];
    else  numw = arr19[Math.floor(number/100)]+' '+arr999[0]+' '+arr99[Math.floor((number%100)/10)-2]+' '+arr19[number%10];
  }
  return (numw);
}
//console.log(toReadable(51));