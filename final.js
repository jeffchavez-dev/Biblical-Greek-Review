
// Final Exam's Timer

const startTime = document.getElementById('start-time');
const examBtn = document.getElementById('final-exam');



let examTime = []

const time = new Date();

let start


examBtn.addEventListener('click', ()=> {
    startTime.textContent = time;
    prompt("Are you sure that you're ready?")

})


function examTimer() {

}
console.log(time)