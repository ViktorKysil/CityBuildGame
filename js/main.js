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
    if (localStorage.getItem('userScore') === null) {
        alert('Welcome to TownClicker!')
        localStorage.setItem('userScore') = 1
    } else
        alert('Glad to see you again! Your previous score is ' + localStorage.getItem('userScore') + '!')
    scorePoint = document.getElementById('score').innerHTML = localStorage.getItem('userScore')
    hired = document.getElementById('workers').innerHTML = localStorage.getItem('userWorkers')
}

function restart() {
    if (window.confirm('Are you sure? Game will be restarted!')) {
      
        hired = 0
        localStorage.setItem('userWorkers', hired)
        document.getElementById('worker').innerHTML = hired
       

        scorePoint = 0;
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userScore', scorePoint);

        // hired = 0;
        // localStorage.removeItem('userWorkers');
        // document.getElementById('workers').innerHTML = hired;



    }


}

function hire() {
    if ((scorePoint >= workerPrice)&&(hired = 1)) {
        hired = 1
        document.getElementById('worker').innerHTML = hired
        scorePoint -= 10
        document.getElementById('score').innerHTML = scorePoint;
        localStorage.setItem('userWorkers', hired)
        var interval = setInterval(() => {

            count += 1

            if (count === 240) {
                clearInterval(interval)
                hired = 0
                localStorage.setItem('userWorkers', hired)
                document.getElementById('worker').innerHTML = hired
            }

            if (hired === 0) {
                clearInterval(interval)
                scorePoint -= 1
            }

            scorePoint++
            document.getElementById('score').innerHTML = scorePoint;
            localStorage.setItem('userScore', scorePoint)



        }, 500)
    }
}

refresh()



