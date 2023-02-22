window.addEventListener("load", function() {
    document.getElementById("date").innerHTML = moment().format('dddd, MMMM Do, Y');
    document.getElementById("time").innerHTML = moment().format('LT');
    document.getElementById("year").innerHTML = moment().format('YYYY');

    var second = 0;
    function pad ( value ) { return value > 9 ? value : value; }
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++second%60);
    }, 1000);
    if (second == 0) {
        document.getElementById("seconds").innerHTML=0;
    }
});