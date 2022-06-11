function greeter(ad) {
    console.log("hello" + ad);
}
greeter("Gülşən");
var Payment;
(function (Payment) {
    Payment[Payment["kredit"] = 0] = "kredit";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["nft"] = 2] = "nft";
})(Payment || (Payment = {}));
var kredit = Payment.kredit;
var havale = Payment.havale;
var nft = Payment.nft;
function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    var reult = total / count;
    return reult;
}
getAverage(10, 20, 30);
