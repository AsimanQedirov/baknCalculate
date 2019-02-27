let amount = document.querySelector("#amount");
let earning;
let total;
let regularExpressions = /[1-9]/g;
const mapAZN = new Map();   //map for AZN (monthly)
mapAZN.set(6, 0.05);
mapAZN.set(12, 0.1);
mapAZN.set(24, 0.105);

const mapUSD = new Map();   //map for USD  (monthly)
mapUSD.set(6, 0);
mapUSD.set(12, 0.01);
mapUSD.set(24, 0.015);

const mapAZNend = new Map();  // map for AZN (at the end of term)
mapAZNend.set(6,0.06);
mapAZNend.set(12,0.104);
mapAZNend.set(24,0.11);

const mapUSDend = new Map();  // map for USD (at the end of term)
mapUSDend.set(6,0);
mapUSDend.set(12,0.015);
mapUSDend.set(24,0.02);

function Hesabla() {    //Constructor

}
Hesabla.prototype.calculate = function (money) {
    let duration = document.getElementById("duration").value.match(regularExpressions);
    duration = (duration[0] == "6") ? duration[0] : duration[0].concat(duration[1]);
    duration = Number(duration);
    for (let [key, value] of money) {
        if (duration === key) {
            earning = Number(amount.value) * value * duration / 12;
            total = Number(amount.value) + earning;
            document.getElementById("total").innerHTML = total;
            document.getElementById("earning").innerHTML = earning;
        }
    }
}
let calc = new Hesabla();
amount.addEventListener("keyup", function () {
    if (document.getElementById("interest").value === "Monthly withdrawal" && document.getElementById("sel1").value === "AZN") {
        calc.calculate(mapAZN);
    }
     else if(document.getElementById("interest").value === "Monthly withdrawal" && document.getElementById("sel1").value === "USD"){
        calc.calculate(mapUSD);
    }
    else if(document.getElementById("interest").value === "At the end of term" && document.getElementById("sel1").value === "AZN"){
        calc.calculate(mapAZNend);
    }
    else if(document.getElementById("interest").value === "At the end of term" && document.getElementById("sel1").value === "USD"){
        calc.calculate(mapUSDend);
    }
})


