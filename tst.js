const colors = require('colors');
const x = 'aabupsAaybisha^pzkdnoaaopodzaidjiaaaaaaaaaaaaaniii';
const y = x.replace(new RegExp("a", "img"), "b");

const myArr = y.split("");
const myArr1 = x.split("");
text0 = "";
text1 = "";
for (let i = 0; i < myArr.length; i++) {
    if ((myArr[i] == "b" || myArr[i] == "B") && (myArr1[i] == "a" || myArr1[i] == "A")) {
        text0 += colors.red(myArr[i]);
        text1 += colors.yellow(myArr1[i]);
    } else {
        text0 += myArr[i];
        text1 += myArr[i];
    }
}
console.log(text1);
console.log(text0)



