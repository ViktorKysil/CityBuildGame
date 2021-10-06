var scorePoint
var hired = 0
var workerPrice = 10
var count = 0

function addScore() {
    scorePoint++;
    document.getElementById('score').innerHTML = scorePoint;
    localStorage.setItem('userScore', scorePoint)
}

// window.setInterval(
//     function autoScore() {
//         scorePoint++
//         document.getElementById('score').innerHTML = scorePoint;
//         localStorage.setItem('userScore', scorePoint)
//     }, 10000);

function refresh() {
    if (localStorage.getItem('userScore') == 0) {
        alert('Welcome to TownClicker!')
        scorePoint = 0
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore') = 0
    } else
        alert('Glad to see you again! Your previous score is ' + localStorage.getItem('userScore') + '!')
    scorePoint = document.getElementById('score').innerHTML = localStorage.getItem('userScore')
    hired = localStorage.getItem('userWorkers')
    localStorage.getItem('hiredLeft')

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
    if (window.confirm('Are you sure? Game will be restarted!')) {

        hired = 0
        localStorage.setItem('userWorkers', hired)
        document.getElementById('worker').innerHTML = 'No workers'

        scorePoint = 0;
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore', scorePoint);

        if(count > 0) {
            count = 0
            scorePoint = 0
        }
        // hired = 0;
        // localStorage.removeItem('userWorkers');
        // document.getElementById('workers').innerHTML = hired;
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

refresh()



