
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

    const exam = document.createElement('div')
    ready.textContent = "Are you ready?"
    examEl.style.display = "none"
    examPage.appendChild(ready)

    let ready = prompt("Are you sure that you're ready? Type YES, if you are!");

    if (prompt != null) {
        console.log("YES")

    } else {
        window.reload()
    }

})


function examTimer() {

}
console.log(time)