function logg(a) {
    navLiClean();
    a.classList.add('navDivStyle');
}

function navLiClean() {
    for (var i = 1; i <= 4; i++) {
        document.getElementById('Li' + i).classList.remove('navDivStyle');
    }
}


function LiBorder1(b,mm) {
    vdLiClean();
    b.classList.add('videoBorder');
    document.getElementsByTagName('video')[0].src = mm;
}

function LiBorder2(b,mm) {
  //  var mm = 'https://apd-c8b97b0944cdc070c8d4d739ba3e3216.v.smtcdns.com/om.tc.qq.com/AaPT0dVQ12Bb1OAK6gEvJ9ccEFIQoP9Dt4SOyPEbNKqA/uwMROfz2r5zAoaQXGdGnC2dfJ7xBbC6Xu5OsXbmLfLunH5lr/x0706ry5e4v.p712.1.mp4?sdtfrom=v1010&guid=47952eb7cd5c5d6e7d6b7bd1c4d8649a&vkey=7D396CD92CB8FAEDB64CFE1BB43EE2B5DE957E17A3766F3B9EF88C0463EF62E1B7529043248932A52ED2EBE637318D838B5253F76F19B5D4D1088DBB703FCCE98951F21FBA4246FA35C45AD6F23AE3C217635FA43BB1182B91B480937543EDAE9323558717EB10B9103031952ECF2D208C6FB451697D7740F7895EFACF6494D8'
    vdLiClean();
    b.classList.add('videoBorder');
    document.getElementsByTagName('video')[0].src = mm;
}

function vdLiClean() {
    for (var i = 1; i <= 2; i++) {
        document.getElementById('vdConLi' + i).classList.remove('videoBorder');
    }
}

// 鼠标点击跟随简单特效
document.onmousemove = function (e) {
    var x = e.pageX;
    var y = e.pageY;
    var mms = document.getElementById('followMouseContent');
    var cx = parseInt(x) - parseInt(80);
    var cy = parseInt(y) + parseInt(10);
    mms.style.left = cx + "px";
    mms.style.top = cy + "px";
    document.onclick = function on() {
        var wz = document.getElementById('msg');
        wz.style.display = "inline-block";
        wz.style.left = e.pageX + "px";
        wz.style.top = e.pageY + "px";
        var sjfh = [];
        sjfh[0] = "(o^㉨^o)♪";
        sjfh[1] = "(✽＾㉨＾)";
        sjfh[2] = "ฅ(˘ω˘ )ฅ";
        sjfh[3] = "(★^㉨^★)";
        sjfh[4] = "(つಥ㉨ಥ)つ";
        var randomfh = Math.round(Math.random() * 4);
        document.getElementById("msg").innerText = (sjfh[randomfh]);
        setTimeout(function () {
            var wz = document.getElementById('msg');
            wz.style.display = "none";
        }, 1500);
    }
}

function mv(mm) {
    document.getElementsByTagName('video')[0].src = mm;
}