
// Final Exam's Timer

const startTime = document.getElementById('start-time');
const examBtn = document.getElementById('final-exam');
const examPage = document.querySelector('.final-exam-page');
const examEl = document.querySelector('.take-exam');



let examTime = []

const time = new Date();

let start


examBtn.addEventListener('click', ()=> {
    startTime.textContent = time;

    // const ready = document.createElement('div')
    // ready.textContent = "Are you ready?"
    // examEl.style.display = "none"
    // examPage.appendChild(ready)

    let ready = prompt("Are you sure that you're ready? Type YES, if you are!", "Yes");

    function checkResponse(ready) {
        if (ready == "Yes") {
            return true;
        } else {
            return false;
        }
    }

    if ( checkResponse(ready) ) {
        alert( 'Access granted' );
        } else {
        alert( 'Access denied' );
        windows.onload()
        }

})


console.log(time)