function calc(a,b) {
    
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    var oper = document.getElementById('operators').value;

    if (oper === '+') {
        add(n1, n2)
        //document.getElementById('result').value = n1 + n2;
    }

    if (oper === '-') {
        subtract (n1, n2)
        //document.getElementById('result').value = n1 - n2;
    }

    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
    }

    if (oper === 'X') {
        document.getElementById('result').value = n1 * n2;
    }

}

function subtract (a, b) {

    const ans = a - b;
    updateAns(ans);
    //document.getElementById('result').value = ans;
    return ans;

};

function add (a, b) {

    if(typeof a !== 'number' || typeof b !== 'number'){
        return null;
    };

    const ans = a + b;
    updateAns(ans);
    return a + b;

};

function updateAns(ans){

    if(document.getElementById('result')){
    document.getElementById('result').value = ans;
}

}



module.exports = {subtract: subtract, add: add}