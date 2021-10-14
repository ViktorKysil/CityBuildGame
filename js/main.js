var cityName = ''
var scorePoint
var hired = 0
var workerPrice = 10
var count = 0

var upgradeHouse = 1
var house2 = 25
var house3 = 50

function addScore() {
    if (upgradeHouse === 1) {
        scorePoint = + (scorePoint) + 1;
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore', scorePoint)
    }

    if (upgradeHouse === 2) {
        scorePoint = + (scorePoint) + 2;
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore', scorePoint)
    }

    if (upgradeHouse === 3) {
        scorePoint = + (scorePoint) + 3;
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore', scorePoint)
    }

}

function refresh() {
    if (localStorage.getItem('userScore') == 0) {
        scorePoint = 0
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore') = 0
    } else
        document.getElementById('welcome-text').innerHTML = 'Welcome back! Your previous score is ' + localStorage.getItem('userScore')
    scorePoint = document.getElementById('score').innerHTML = localStorage.getItem('userScore')
    hired = localStorage.getItem('userWorkers')
    localStorage.getItem('hiredLeft')

    if (localStorage.getItem('userHouseUp') == 1) {
        upgradeHouse = 1
        document.getElementById("up1").style = "transform: scale(1.2);";
        document.getElementById("up3").style = "transform: scale(1);";
        document.getElementById("up2").style = "transform: scale(1);";
    }

    if (localStorage.getItem('userHouseUp') == 2) {
        upgradeHouse = 2
        document.getElementById("up2").innerHTML = '<img src="/assets/images/house-lvl2.svg" alt="" />';
        document.getElementById("up2").style = "transform: scale(1.2);";
        document.getElementById("up1").style = "transform: scale(1);";
    }

    if (localStorage.getItem('userHouseUp') == 3) {
        upgradeHouse = 3
        document.getElementById("up3").innerHTML = '<img src="/assets/images/house-lvl3.svg" alt="" />';
        document.getElementById("up2").innerHTML = '<img src="/assets/images/house-lvl2.svg" alt="" />';
        document.getElementById("up3").style = "transform: scale(1.2);";
        document.getElementById("up2").style = "transform: scale(1);";
        document.getElementById("up1").style = "transform: scale(1);";
    }

    if (localStorage.getItem('hiredLeft') > 0) {
        count = localStorage.getItem('hiredLeft')
        hired = 1
        localStorage.getItem('userWorkers')

        var interval = setInterval(() => {
            count -= 1
            document.getElementById('worker').innerHTML = 'Left: ' + count

            if (count === 0) {
                clearInterval(interval)
                hired = 0
                localStorage.setItem('userWorkers', hired)
                document.getElementById('worker').innerHTML = 'No workers'
            }

            if (hired === 0) {
                clearInterval(interval)
                document.getElementById('worker').innerHTML = 'No workers'
            }

            scorePoint++
            document.getElementById('score').innerHTML = scorePoint;
            localStorage.setItem('userScore', scorePoint)
            localStorage.setItem('hiredLeft', count)

        }, 500)
    }
}

function restart() {
    document.getElementById('restart-screen').style = 'display: inherit'
    document.getElementById('overlay').style = 'display: inherit'

    if (document.querySelector('.settings-screen').style = 'display: inherit') {
        document.querySelector('.settings-screen').style = 'display: none'
    }

    document.getElementById('restart-proceed').onclick = function () {

        document.getElementById('restart-screen').style = 'display: none'
        document.getElementById('overlay').style = 'display: none'

        upgradeHouse = 1;
        localStorage.setItem('userHouseUp', upgradeHouse)
        document.getElementById("up2").innerHTML = '<img src="/assets/images/lockv2.svg" alt="" id="lock1" /> <img src="/assets/images/house-lvl2.svg" alt="" />';
        document.getElementById("up3").innerHTML = '<img src="/assets/images/lockv2.svg" alt="" id="lock1" /> <img src="/assets/images/house-lvl3.svg" alt="" />';
        document.getElementById("up1").style = "transform: scale(1.2);";
        document.getElementById("up2").style = "transform: scale(1);";
        document.getElementById("up3").style = "transform: scale(1);";

        hired = 0
        localStorage.setItem('userWorkers', hired)
        document.getElementById('worker').innerHTML = 'No workers'

        scorePoint = 0;
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore', scorePoint);

        if (count > 0) {
            count = 0
            scorePoint = 0
        }
    }
}

function hire() {
    if ((scorePoint >= workerPrice) && (hired == 0)) {
        count = 20
        localStorage.setItem('hiredLeft', count)
        hired = 1
        localStorage.setItem('userWorkers', hired)

        scorePoint -= 10
        document.getElementById('score').innerHTML = scorePoint;


        var interval = setInterval(() => {
            count -= 1
            document.getElementById('worker').innerHTML = 'Left: ' + count

            if (count === 0) {
                clearInterval(interval)
                hired = 0
                localStorage.setItem('userWorkers', hired)
                localStorage.setItem('hiredLeft', count)
                document.getElementById('worker').innerHTML = 'No workers'
            }

            if (hired === 0) {
                clearInterval(interval)
                document.getElementById('worker').innerHTML = 'No workers'
            }

            scorePoint++
            document.getElementById('score').innerHTML = scorePoint;
            localStorage.setItem('userScore', scorePoint)
            localStorage.setItem('hiredLeft', count)

        }, 500)
    }
}

function upgradeLvl3() {

    if (localStorage.getItem('userHouseUp') == 3) {
        document.getElementById('up3').style = "animation: shake 0.5s; animation-iteration-count: infinite; "

        setTimeout(function () {
            document.getElementById('up3').style = "transform: scale(1.2);"
        }, 300)
        return;
    }

    if (localStorage.getItem('userHouseUp') == 1) {
        alert('To buy this update, other ones must be bought!')
        return;
    }

    if (scorePoint < house3) {
        alert('You need more money to make this upgrade!')
    } else {
        alert('Residential area improved! New upgrade now available.')
        upgradeHouse = 3
        localStorage.setItem('userHouseUp', upgradeHouse)
        document.getElementById("up3").innerHTML = '<img src="/assets/images/house-lvl3.svg" alt="" />';
        document.getElementById("up3").style = "transform: scale(1.2);";
        document.getElementById("up2").style = "transform: scale(1);";
        document.getElementById("up1").style = "transform: scale(1);";
    }
}

function upgradeLvl2() {

    if (localStorage.getItem('userHouseUp') == 2) {
        document.getElementById('up2').style = "animation: shake 0.5s; animation-iteration-count: infinite; "

        setTimeout(function () {
            document.getElementById('up2').style = "transform: scale(1.2);"
        }, 300)
        return;
    }

    if (localStorage.getItem('userHouseUp') == 3) {
        alert('Upgrade already bought!')
        return;
    }

    if (scorePoint < house2) {
        alert('You need more money to make this upgrade!')
    } else {
        alert('Residential area improved! New upgrade now available.')
        upgradeHouse = 2
        localStorage.setItem('userHouseUp', upgradeHouse)
        document.getElementById("up2").innerHTML = '<img src="/assets/images/house-lvl2.svg" alt="" />';
        document.getElementById("up2").style = "transform: scale(1.2);";
        document.getElementById("up1").style = "transform: scale(1);";
    }
}

function upgradeLvl1() {
    document.getElementById('up1').style = "animation: shake 0.5s; animation-iteration-count: infinite;"

    setTimeout(function () {
        document.getElementById('up1').style = ""
        if (upgradeHouse === 1) {
            document.getElementById('up1').style = "transform: scale(1.2);"
        }
    }, 300)
}

function gameContinue() {
    document.querySelector('.welcome-screen').style = 'display: none'
    document.getElementById('overlay').style = 'display: none'

    document.querySelector('.restart-screen').style = 'display: none'
}

function closeMenu() {
    document.querySelector('.welcome-screen').style = 'display: none'
    document.getElementById('overlay').style = 'display: none'

    document.querySelector('.restart-screen').style = 'display: none'
    document.querySelector('.settings-screen').style = 'display: none'

    document.querySelector('.credits-screen').style = 'display: none'
    document.getElementById('overlay').style = 'display: none'
}

function settings() {
    document.querySelector('.settings-screen').style = 'display: inherit'
    document.getElementById('overlay').style = 'display: inherit'
}

function credits() {
    document.querySelector('.credits-screen').style = 'display: inherit'
    document.getElementById('overlay').style = 'display: inherit'
}

function office() {
    document.getElementById('clicker').innerHTML = '<img src="/assets/images/office-logo.svg" alt="" />'
    document.getElementById('clicker').innerHTML = '<img src="/assets/images/office-logo.svg" alt="" />'
    
    document.getElementById('up1').innerHTML = '<img src="/assets/images/office-logo.svg" alt="" />'
    document.getElementById('up2').innerHTML = '<img src="/assets/images/lockv2.svg" alt="" id="lock1" /> <embed src="/assets/images/office-lvl2.svg">'
    document.getElementById('up3').innerHTML = '<img src="/assets/images/lockv2.svg" alt="" id="lock2" /> <embed src="/assets/images/office-lvl3.svg">'
}

refresh()



