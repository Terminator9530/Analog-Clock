$(function() {
    $( "#draggable" ).draggable();
});
var style={numbercolor:"black",secondcolor:"orange",minutecolor:"white",hourcolor:"white",stop1:"yellow",stop2:"white",clkback:"#383b39"};
function changeStyle(e){
    e.preventDefault();
    console.log(f1.r1.value);
    var temp=f1.r1.value;
    if(temp=="s1")
    style={numbercolor:"#383b39",secondcolor:"red",minutecolor:"white",hourcolor:"yellow",stop1:"yellow",stop2:"white",clkback:"black"};
    else if(temp=="s2")
    style={numbercolor:"brown",secondcolor:"green",minutecolor:"blue",hourcolor:"red",stop1:"red",stop2:"blue",clkback:"yellow"};
    else
    style={numbercolor:"black",secondcolor:"orange",minutecolor:"white",hourcolor:"white",stop1:"yellow",stop2:"white",clkback:"#383b39"};
    drawClock();
    ctxS.strokeStyle = style.secondcolor;
    drawSecondHand();
    ctxM.strokeStyle = style.minutecolor;
    drawMinuteHand();
    ctxH.strokeStyle = style.hourcolor;
    drawHourHand();
}
var radius = 100;
/*----------------------------------------Draw Clock---------------------------------------*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
drawClock();

function drawClock() {
    ctx.beginPath();
    ctx.fillStyle = style.clkback;
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.fill();
    for (i = 0; i < 360; i += 30) {
        ctx.fillStyle = style.numbercolor;
        ctx.textBaseline = "middle";
        ctx.textAlign = 'center';
        ctx.font = radius * 0.24 + 'px serif';
        if (i == 0 || i == 180)
            ctx.fillText(i == 0 ? 3 : 9, canvas.width / 2 + (radius + 20) * Math.cos(i * (Math.PI / 180)),
                canvas.height /
                2 + (radius + 20) * Math.sin(i * (Math.PI / 180)));
        if (i == 30 || i == 210)
            ctx.fillText(i == 30 ? 4 : 10, canvas.width / 2 + (radius + 20) * Math.cos(i * (Math.PI / 180)),
                canvas
                .height / 2 + (radius + 20) * Math.sin(i * (Math.PI / 180)));
        if (i == 60 || i == 240)
            ctx.fillText(i == 60 ? 5 : 11, canvas.width / 2 + (radius + 20) * Math.cos(i * (Math.PI / 180)),
                canvas
                .height / 2 + (radius + 20) * Math.sin(i * (Math.PI / 180)));
        if (i == 90 || i == 270)
            ctx.fillText(i == 90 ? 6 : 12, canvas.width / 2 + (radius + 20) * Math.cos(i * (Math.PI / 180)),
                canvas
                .height / 2 + (radius + 20) * Math.sin(i * (Math.PI / 180)));
        if (i == 120 || i == 300)
            ctx.fillText(i == 120 ? 7 : 1, canvas.width / 2 + (radius + 20) * Math.cos(i * (Math.PI / 180)),
                canvas
                .height / 2 + (radius + 20) * Math.sin(i * (Math.PI / 180)));
        if (i == 150 || i == 330)
            ctx.fillText(i == 150 ? 8 : 2, canvas.width / 2 + (radius + 20) * Math.cos(i * (Math.PI / 180)),
                canvas
                .height / 2 + (radius + 20) * Math.sin(i * (Math.PI / 180)));
    }
    for (i = 0; i < 360; i += 6) {
        ctx.beginPath();
        if (i % 5 == 0) {
            ctx.strokeStyle = style.stop1;
            ctx.moveTo(canvas.width / 2 + (radius - 10) * Math.cos(i * (Math.PI / 180)), canvas.height / 2 + (
                    radius - 10) * Math
                .sin(i * (Math.PI / 180)));
            ctx.lineTo(canvas.width / 2 + radius * Math.cos(i * (Math.PI / 180)), canvas.height / 2 + radius *
                Math
                .sin(i * (Math.PI / 180)));
        } else {
            ctx.strokeStyle = style.stop2;
            ctx.moveTo(canvas.width / 2 + (radius - 5) * Math.cos(i * (Math.PI / 180)), canvas.height / 2 + (
                    radius - 5) * Math
                .sin(i * (Math.PI / 180)));
            ctx.lineTo(canvas.width / 2 + radius * Math.cos(i * (Math.PI / 180)), canvas.height / 2 + radius *
                Math
                .sin(i * (Math.PI / 180)));
        }
        ctx.stroke();
    }
}

var d;
var second;
var minute;
var hour;

/*----------------------------------Second Hand------------------------------------*/

var canvasS = document.getElementById("canvasS");
var ctxS = canvasS.getContext("2d");
ctxS.strokeStyle = style.secondcolor;
canvasS.style.position = "absolute";
canvasS.style.zIndex = "3";
canvasS.style.left = String(canvas.width / 2 - 150) + "px";
canvasS.style.top = String(canvas.height / 2 - 150) + "px";
var angle;
drawSecondHand();

function drawSecondHand() {
    d = new Date();
    second = d.getSeconds();
    angle = 6 * second - 90;
    console.log(angle);
    ctxS.beginPath();
    ctxS.clearRect(0, 0, canvasS.width, canvasS.height);
    ctxS.beginPath();
    ctxS.fillStyle = style.secondcolor;
    ctxS.arc(canvasS.width / 2, canvasS.height / 2, 5, 0, 2 * Math.PI);
    ctxS.fill();
    ctxS.moveTo(canvasS.width / 2, canvasS.height / 2);
    ctxS.lineTo(canvasS.width / 2 + radius * Math.cos(angle * (Math.PI / 180)), canvasS.height / 2 + radius *
        Math
        .sin(angle * (Math.PI / 180)));

    ctxS.stroke();
    setTimeout(drawSecondHand, 1000);
}

/*----------------------------------Minute Hand------------------------------------*/
var minVal;
var canvasM = document.getElementById("canvasM");
var ctxM = canvasM.getContext("2d");
ctxM.strokeStyle = style.minutecolor;
ctxM.lineWidth = 4;
canvasM.style.position = "absolute";
canvasM.style.zIndex = "2";
canvasM.style.left = String(canvas.width / 2 - 150) + "px";
canvasM.style.top = String(canvas.height / 2 - 150) + "px";
drawMinuteHand();

function drawMinuteHand() {
    d = new Date();
    minute = d.getMinutes();
    minVal = 6 * minute + (angle + 90) / 60 - 90;
    ctxM.beginPath();
    ctxM.clearRect(0, 0, canvasM.width, canvasM.height);
    ctxM.moveTo(canvasM.width / 2, canvasM.height / 2);
    ctxM.lineTo(canvasM.width / 2 + (radius - 10) * Math.cos(minVal * (Math.PI / 180)), canvasM.height / 2 + (
            radius - 10) * Math
        .sin(minVal * (Math.PI / 180)));

    ctxM.stroke();
    setTimeout(drawMinuteHand, 1000);
}

/*----------------------------------Hour Hand------------------------------------*/

var canvasH = document.getElementById("canvasH");
var ctxH = canvasH.getContext("2d");
ctxH.strokeStyle = style.hourcolor;
ctxH.lineWidth = 4;
canvasH.style.position = "absolute";
canvasH.style.zIndex = "2";
canvasH.style.left = String(canvas.width / 2 - 150) + "px";
canvasH.style.top = String(canvas.height / 2 - 150) + "px";
drawHourHand();

function drawHourHand() {
    d = new Date();
    hour = d.getHours();
    var hourVal = 30 * hour + 1 / 12 * (minVal + 90 - (angle + 90) / 60) - 90;
    ctxH.beginPath();
    ctxH.clearRect(0, 0, canvasH.width, canvasH.height);
    ctxH.moveTo(canvasH.width / 2, canvasH.height / 2);
    ctxH.lineTo(canvasH.width / 2 + (radius - 50) * Math.cos(hourVal * (Math.PI / 180)), canvasH.height / 2 + (
            radius - 50) * Math
        .sin(hourVal * (Math.PI / 180)));

    ctxH.stroke();
    setTimeout(drawHourHand, 1000);
}


/*------------------------------------------change image-------------------------------------------------------*/

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imgCan')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}