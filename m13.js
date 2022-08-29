var readlinesync=require('readline-sync');
var age=readlinesync.questionInt('enter a age! ');
if (age>=5){
    console.log('go to school ');
}if(age>=18){
    console.log('you can vote in election! ');
}if(age>=21){
    console.log('can drive a car! ');
}if(age>=24){
    console.log('you can do marry! ');
}if(age<=25){
    console.log('legally you can drink');
}
