const vocabulary = [];
const lessonOne = [
    {"ἀγάπη, ἡ": "love"},
    {"γῆ ἡ": "earth, land, ground (geology)"},
    {"ζωή ἡ": "life (zoo, zoology)"},
    {"φωνή, ἡ ": "voice, sound (phonetics, phonograph, phone)"},
    {"ἀλήθεια, ἡ": "truth"},
    {"ἁμαρτία, ἡ":  "sin (hamartiology—the theological study of sin)"},
    {"βασιλεία, ἡ" : "kingdom, reign (basilica)"},
    {"δόξα, ἡ" : "glory, majesty (doxology)"},
    {"ἐκκλησία, ἡ" : "congregation, assembly, church (ecclesiastical)"},
    {"ἡμέρα, ἡ" : "day (ephemeral, “for a day”)"},
    {"καρδία, ἡ":  "heart (cardiologist)"},
    {"δέ" : "and, but, now"},
    {"καί" : "and, even, also"},
    {"μέν" : "on the one hand, indeed"},
    {"ὁ, ἡ, τό" : "the"}
]
const lessonTwo = [
    {"ἀδελφός, ὁ ": "brother (and sister) "},
    {"ἄνθρωπος, ὁ ": "man, human being, husband (anthropology)"},
    {"θεός, ὁ ": "God (theology)"},
     {"κόσμος, ὁ ": "world, universe; adornment (cosmos, cosmology, cosmetics)"},
     {"κύριος, ὁ ": "Lord, master, sir"},
    {"λόγος, ὁ ": "word, message, account (logic, theology,psychology)"},
    {"νόμος, ὁ ": "law, principle (theonomists)"},
    {"οὐρανός, ὁ": " heaven, sky (Uranus)"},
    {"υἱός, ὁ ": "son, descendant"},
    {"Χριστός, ὁ ": "Christ, Messiah, Anointed One (Christ)"},
    {"ἔργον, τό": "work, deed (ergonomic)"},
    {"εὐαγγέλιον, τό ": "good news, gospel (evangelistic, evangelical)"},
    {"ἱερόν, τό ": "temple, sanctuary"},
     {"σημεἱον, τό ": "sign (semiotics)"},
    {"τέκνον, τό": " child, son, descendant"}
]
const lessonThree = [
    {"ἀποκρίνομαι ": "I answer, reply"},
    {"εἰμί ": "I am, exist"},
    {"ἀκούω": " I hear, listen to, obey (acoustics)"},
    {"γινώσκω ": "I know, understand, acknowledge (knowledge, Gnostics)"},
    {"γράφω ": "I write (graphics)"},
    {"ἔχω ": "I have, hold"},
    {"λέγω ": "I say, speak (legend)"},
    {"λαμβάνω ": "I take, receive"},
    {"λύω ": "I loose, destroy"},
    {"πιστεύω ": "I believe, have faith/trust in"},
    {"γίνομαι ": "I become, come, exist, am born"},
    {"ἔρχομαι ": "I come, go"},
    {"πορεύομαι ": "I go, travel"},
    {"ἀλλά ": "but, yet, nevertheless"},
    {"ὅτι": " that, because"}
]
const lessonFour = [
    {"ἄγω ": "- I lead, bring (pedagogical)"},
    {"βλέπω": " I see, look at"},
    {"διδάσκω": " I teach (didactic)"},
    {"ἐγείρω ": " I raise up"},
    {"κρίνω ": " I judge, condemn (critic)"},
    {"μένω": "  I remain, abide, dwell (remain)"},
    {"ὑπάγω": "  I go away, depart"},
    {"δοῦλος, -ου, ὁ ": " slave (doula)"},
    {"θάνατος, -ου, ὁ ": " death "},
    {"ψυχή, -ης, ἡ ": " soul, life, living being (psychology)"},
    {"ὥρα, -ας, ἡ ": " hour"},
    {"εἰ ": "if,  whether"},
    {"εἴτε ": "if, whether"},
    {"καθώς": "  as, just as, even as"},
    {"ὡς ": "as,  like"},
    {"ὦ, τό ": " end, Omega"},
    {"ὁδὸς, ἡ ": "- way"}
]
const lessonFive = [
    {"βαπτίζω":" I baptize, immerse, dip (baptize)"},
    {"θεραπεύω":" I heal (therapeutic)"},
    {"κράζω ":"I cry out"},
    {"ἄγγελος, ὁ ":"angel, messenger (angel)"},
    {"μαθητής, ὁ":" disciple, follower 	(mathematics)"},
    {"ὄχλος, ὁ":" crowd"},
    {"προφήτης, ὁ":" prophet (prophet)"},
    {"γάρ ":"for, because "},
    {"ἐκεῖ ":"there, in that place"},
    {"κἀγώ":" and I (καί + ἐγώ)"},
    {"οὖν ":"then, so, therefore"},
    {"οὕτως":" in this manner, thus, so"},
    {"τέ":" and, but"},
    {"οὐ, οὐκ, οὐχ":" no, not"},
    {"οὐχί, no! ":"(emphatic)"}
]
const lessonSix = [
    {"ἀγαπάω" : "I love"},
    {"γεννάω" : "I give birth to, bear, beget (genealogy)"},
    {"ἐπερωτάω" : "I ask "},
    {"ἐρωτάω" : "I ask, question, request"},
    {"αἰτέω" : "I ask, demand"},
    {"ἀκολουθέω" : "I follow (acolyte)"},
    {"ζητέω" : "I seek, look for"},
    {"καλέω" : "I call, invite, name (call)"},
    {"λαλέω" : "I speak, say (glossolalia)"},
    {"μαρτυρέω ": "I testify, bear witness (martyr)"},
    {"παρακαλέω" : "I call, urge, comfort"},
    {"περιπατέω" : "I walk, live (peripatetic)"},
    {"ποιέω" : "I do, make (poet)"},
    {"φοβέομαι" : "I am afraid, fear, respect (phobia)"},
    {"πληρόω" : "I fill, fulfill, complete"}
]

const lessonSeven = [
    {"ἀπό" : "from, away from (gen)"},
    {"διά" : "through (gen); because of (acc) 	(diameter)"},
    {"εἰς" : "into, among, for (acc) (eisegesis)"},
    {"ἐκ" :"from, out of (gen) (exhale, exegesis)"},
    {"ἐν" : "in, on, at, by, with (dat)"},
    {"ἐπί" : "on, upon, over (gen); on, upon, at, in (dat); on, upon, to, for (acc) (epigraph)"},
    {"κατά" : "down, against (gen); according to (acc) (cataphoric)"},
    {"μετά" : "with, among (gen); after (acc) "},
    {"παρά" : "from (gen); with (dat); beside, on, at 	(acc) (parable, paramedic)"},
    {"περί" : "about, concerning (gen); around (acc) (perimeter)"},
    {"πρός" : "to, toward (acc) (prosthesis)"},
    {"σύν" : "with (dat) (syntax)"},
    {"ὑπέρ" : "for, on behalf of (gen); above, beyond (acc) (hypercritical, hyperactive)"},
    {"ὑπό" : "by (gen); under, below (acc) (hypotaxis, hypothesis)"},
    {"ἐνώπιον" : "before, in the presence of"}

]


const greekVocab = document.querySelector(".greek-vocabulary")
const vocabEL = document.querySelector(".main")
const englishVocab = document.querySelector(".english-vocabulary")
const correct = document.querySelector(".correct-answer")
const showAnswer = document.querySelector(".show-answer")
const hideAnswer = document.querySelector(".hide-answer")
const retake = document.querySelector(".retake");
const reset = document.querySelector(".reset");
const wordCount = document.querySelector(".totalCount");
const currentCountEL = document.querySelector(".current");
const checkboxes = document.getElementsByName("lessons");



//add a function that will push every checked input to vocabulary array

const lessonOneEl = document.getElementById("lessonOne");
const lessonTwoEl = document.getElementById("lessonTwo");
const lessonThreeEl = document.getElementById("lessonThree");
const lessonFourEl = document.getElementById("lessonFour");
const lessonFiveEl = document.getElementById("lessonFive");
const lessonSixEl = document.getElementById("lessonSix");
const lessonSevenEl = document.getElementById("lessonSeven");

let currentVocab = 0;
let currentCount = 1;


lessonOneEl.addEventListener('click', () => {
    addNewLessonOne();
    lessonOneEl.classList.add("hide");
    console.log("Great!")
})

lessonTwoEl.addEventListener('click', () => {
    addNewLessonTwo();
    lessonTwoEl.classList.add("hide");
})

lessonThreeEl.addEventListener('click', () => {
    addNewLessonThree();
    lessonThreeEl.classList.add("hide");
})

lessonFourEl.addEventListener('click', () => {
    addNewLessonFour();
    lessonFourEl.classList.add("hide");
})

lessonFiveEl.addEventListener('click', () => {
    addNewLessonFive();
    lessonFiveEl.classList.add("hide");
})

lessonSixEl.addEventListener('click', () => {
    addNewLessonSix();
    lessonSixEl.classList.add("hide");
})

lessonSevenEl.addEventListener('click', () => {
    addNewLessonSeven();
    lessonSevenEl.classList.add("hide");
});


function addNewLessonOne() {
    if(lessonOneEl.checked) {
        vocabulary.push(...lessonOne);
        // vocabulary.concat(lessonTwo);
        loadReview()
    } 
    if(!lessonOneEl.checked) {
        vocabulary.shift(lessonOne);
        // vocabulary.concat(lessonTwo);
        loadReview()
    } 

}
function addNewLessonTwo() {
    if(lessonTwoEl.checked) {
        vocabulary.push(...lessonTwo);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}
function addNewLessonThree() {
    if(lessonThreeEl.checked) {
        vocabulary.push(...lessonThree);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}
function addNewLessonFour() {
    if(lessonFourEl.checked) {
        vocabulary.push(...lessonFour);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}
function addNewLessonFive() {
    if(lessonFiveEl.checked) {
        vocabulary.push(...lessonFive);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}

function addNewLessonSix() {
    if(lessonSixEl.checked) {
        vocabulary.push(...lessonSix);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}

function addNewLessonSeven() {
    if(lessonSevenEl.checked) {
        vocabulary.push(...lessonSeven);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}






function loadReview() {
    loadVocabulary()
    if(vocabulary == '') {
        currentCountEL.innerText = 0;
    } else {
        currentCountEL.innerText = currentCount;
    }
    wordCount.innerText = vocabulary.length;
}



// function addLEssons() {
//     checkboxes.forEach(item => {
//         if(item.checked) {
//             console.log("Great!");
//         }
       
//     })
// }

// addLEssons()






let shuffled = vocabulary
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)





function loadVocabulary() {
    if(vocabulary.length == 0) {
        greekVocab.innerHTML = 'Select lesson/s';
    } else {
        greekVocab.innerHTML = Object.keys(vocabulary[currentVocab]);
        // greekVocab.innerText = Object.keys(combinedVocabs[currentVocab]);
        englishVocab.innerHTML = vocabulary[currentVocab][Object.keys(vocabulary[currentVocab])]
    }
   
}

correct.addEventListener("click", ()  => {
    currentVocab++;
    currentCountEL.innerText = currentCount + currentVocab;
    if(currentVocab < vocabulary.length) {

        loadVocabulary();
        englishVocab.classList.remove("show");
        showAnswer.classList.remove('hide');
        hideAnswer.classList.remove('show');

       
    } else {
        retake.classList.add('show');
        vocabEL.classList.add('hide')
    }

})

loadVocabulary()

showAnswer.addEventListener("click", ()  => {
    englishVocab.classList.toggle("show");
    showAnswer.classList.add('hide')
    hideAnswer.classList.add('show')
})

hideAnswer.addEventListener("click", ()  => {
    englishVocab.classList.toggle("show");
    showAnswer.classList.remove('hide')
    hideAnswer.classList.remove('show')
})



retake.addEventListener("click", () => {
    location.reload();
})

reset.addEventListener("click", () => {
    location.reload();
})

