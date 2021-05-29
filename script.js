document.getElementById('container').onchange = function () {
    var bill = Number(document.getElementById('bill').value);
    var tipPercent = Number(document.getElementById('tipInput').value);
    var split = document.getElementById('splitInput').value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;

    document.getElementById('tipOutput').innerHTML= tipPercent + "%";
    document.getElementById('splitOutput').innerHTML= split;
    document.getElementById('newBill').innerHTML= "Rupees " + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML= "Rupees " + tipEach.toFixed(2);     
}