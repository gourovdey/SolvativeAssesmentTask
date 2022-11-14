var equation = "";
let historyArr = [];
let isFunctionCompleted = false;
document.querySelectorAll(".calciButton").forEach((singlebutton,index) => {
    singlebutton.addEventListener("click", loggedButton);
    function loggedButton(e) {
        equation += e.target.innerHTML;
        document.querySelectorAll(".display")[0].value = equation;



        if (e.target.innerHTML === "C") {
            equation =  "";
            document.querySelectorAll(".display")[0].value = "0";
            return;
        }
        else if (e.target.innerHTML === "CE") {
            equation =  equation.slice(0,-2);
            let equationArr = equation.split('').reverse();
            equationArr.forEach((e,i) => {
                if (e === "+" || e === "-" || e === "*" || e === "/") {
                    console.log(e,i);
                    if (i > 0) {
                       console.log(equationArr.slice(e-1));
                    }
                    else{
                        console.log(equationArr);
                    }
                }
            });
            equation = equationArr.split('').reverse();
            document.querySelectorAll(".display")[0].value = equation;
        }
        else if (e.target.innerHTML === "X") {
            equation =  equation.slice(0,-2);
            document.querySelectorAll(".display")[0].value = equation;
        }
        else if (e.target.innerHTML === "=") {
            equation =  equation.slice(0,-1);
            document.querySelectorAll(".display")[0].value = eval(equation);
            historyArr.push(equation + " = " + eval(equation));
            equation = "";
            return historyArr;

        }
    };
});

function options() {
    document.querySelectorAll(".historyDiv")[0].classList.toggle("hiddenDiv");
    if (historyArr.length > 0) {
        document.getElementById("historyList").innerHTML = historyArr;
    }
}


