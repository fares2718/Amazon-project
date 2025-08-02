import { formatCurrency } from "../scripts/utils/money.js";

console.log("Testing formatCurrency function");
console.log("convert cents into dollars");
if (formatCurrency(2095) === "20.95") {
    console.log("passed");
} else {
    console.log("faild");
}

console.log("Work with 0");
if (formatCurrency(0) === "0.00") {
    console.log("passed");
} else {
    console.log("faild");
}

console.log("Round up to the nearest cent");
if (formatCurrency(2000.5) === "20.01") {
    console.log("passed");
} else {
    console.log("faild");
}

console.log("Round down to the nearest cent");
if (formatCurrency(2000.4) === "20.00") {
    console.log("passed");
} else {
    console.log("faild");
}