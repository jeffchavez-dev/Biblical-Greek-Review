const mainReview = document.querySelector(".main-review")
const reviewVocabs = document.querySelector(".vocabulary-review")
const lessonSection = document.querySelector(".lesson-section")

const greekVocab = document.querySelector(".greek-vocabulary")
const vocabEL = document.querySelector(".main")
const lessonsEL = document.querySelector(".lessons")
const englishVocab = document.querySelector(".english-vocabulary")
const correct = document.querySelector(".correct-answer")
const wrongAnswer = document.querySelector(".wrong-answer")
const showAnswer = document.querySelector(".show-answer")
const hideAnswer = document.querySelector(".hide-answer")
const retake = document.querySelector(".retake");
const reviewWrongAnswers = document.querySelector(".reviewWrongAnswers");
const reset = document.querySelector(".reset");
const switchVocab = document.querySelector(".switch");
const reviewNow = document.querySelector(".review-now");
const wordCount = document.querySelector(".totalCount");
const currentCountEL = document.querySelector(".current");
const checkboxes = document.getElementsByName("lessons");



//add a function that will push every checked input to vocabulary array

const lessonOneBtn = document.getElementById("lessonOne");
const lessonOneEl = document.getElementById("lesson-one");
const lessonTwoBtn = document.getElementById("lessonTwo");
const lessonTwoEl = document.getElementById("lesson-two");
const lessonThreeBtn = document.getElementById("lessonThree");
const lessonThreeEl = document.getElementById("lesson-three");
const lessonFourBtn = document.getElementById("lessonFour");
const lessonFourEl = document.getElementById("lesson-four");
const lessonFiveBtn = document.getElementById("lessonFive");
const lessonFiveEl = document.getElementById("lesson-five");
const lessonSixBtn = document.getElementById("lessonSix");
const lessonSixEl = document.getElementById("lesson-six");
const lessonSevenBtn = document.getElementById("lessonSeven");
const lessonSevenEl = document.getElementById("lesson-seven");
const lessonEightBtn = document.getElementById("lessonEight");
const lessonEightEl = document.getElementById("lesson-eight");
const toReview = document.querySelector(".toReview");
const goBack = document.querySelector(".goBack");


async function fetchVocabulary() {
    const response = await fetch('./vocabs.json')
    const data = await response.json();
    const paradigmsData = data.paradigms;
    const vocabularyData = data.vocabulary;
    newVocabs(vocabularyData)
}


fetchVocabulary()


// Refactored code // 
let newVocabsArray = [];

let lessonsValue = [];

// newVocabs is a callback function // 

function newVocabs(vocabs) {
    // const vocabList = document.createElement('div')
    // const vocabularyList = vocabs;
    // vocabularyList.map(vocab => console.log(vocab.lessonOne) )
}


let lessonsChecked = document.querySelectorAll('input[name="lessons"]');

reviewNow.addEventListener('click', () => {
        
        lessonsChecked.forEach((checkbox) => {
            if(checkbox.checked) {
                lessonsValue.push(checkbox.value);
                console.log("new lessons")
            }
           
        })
    })
    

const timer = () => {
    let time = 5;
    const interval = setInterval(myTimer, 1000)
    function myTimer() {
        if(time === 0) {
            clearInterval(interval)
            alert("Times Up!")
        } else {
            // const timerEl = document.createElement('div');
            // timerEl.classList.add("btn")
            // timerEl.innerHTML = time--;
            // document.body.appendChild(timerEL);
            // console.log(time--)
        }
           
    } 
}

timer()


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
    {"οὐχί":"no! (emphatic)"}
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
const lessonEight = [
    {"αὐτός, –ή, –ό" : "he, she, it; self, same (autopilot)"},
    {"ἐγώ, ἡμεῖς" : "I; we (ego, egomaniac)"},
    {"ὅς, ἥ, ὅ" : "who, which, that"},
    {"σύ, ὑμεῖς" : "you (sg); you (pl)"},
    {"ἄρτος, ὁ" : "bread, food "},
    {"δικαιοσύνη, ἡ" : "righteousness, justice"},
    {"εἰρήνη, ἡ" : "peace (irenic, Irene)"},
    {"ἐξουσία, ἡ" : "authority, right, power "},
    {"θάλασσα, ἡ" : "lake, sea (thalassic)"},
    {"λαός, ὁ" : "people, crowd (laity)"},
    {"ὁδός, ἡ" : "way, road (exodus)"},
    {"οἰκία, ἡ" : "home, dwelling, family (economy)"},
    {"οἶκος, ὁ" : "house, household, family"},
    {"ὀφθαλμός, ὁ" : "eye (ophthalmology)"},
    {"τόπος, ὁ" : "place (topography)"}

]





reviewVocabs.addEventListener('click', () => {
    mainReview.classList.add("hide");
    lessonSection.classList.add("show-lesson")
    goBack.style.display = 'block';
})
lessonOneBtn.addEventListener('click', () => {
    addNewLessonOne();    
    lessonOneEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 1";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
})

lessonTwoBtn.addEventListener('click', () => {
    addNewLessonTwo();
    lessonTwoEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 2";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
})

lessonThreeBtn.addEventListener('click', () => {
    addNewLessonThree();
    lessonThreeEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 3";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
})

lessonFourBtn.addEventListener('click', () => {
    addNewLessonFour();
    lessonFourEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 4";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
})

lessonFiveBtn.addEventListener('click', () => {
    addNewLessonFive();
    lessonFiveEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 5";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
})

lessonSixBtn.addEventListener('click', () => {
    addNewLessonSix();
    lessonSixEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 6";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
})

lessonSevenBtn.addEventListener('click', () => {
    addNewLessonSeven();
    lessonSevenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 7";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonEightBtn.addEventListener('click', () => {
    addNewLessonEight();
    lessonEightEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 8";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});


function addNewLessonOne() {
    if(lessonOneBtn.checked) {
        vocabulary.push(...lessonOne);
        // vocabulary.concat(lessonTwo);
        loadReview()
       
    } 

}
function addNewLessonTwo() {
    if(lessonTwoBtn.checked) {
        vocabulary.push(...lessonTwo);
        // vocabulary.concat(lessonTwo);
        loadReview()
        
    } 
}

function addNewLessonThree() {
    if(lessonThreeBtn.checked) {
        vocabulary.push(...lessonThree);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}
function addNewLessonFour() {
    if(lessonFourBtn.checked) {
        vocabulary.push(...lessonFour);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}
function addNewLessonFive() {
    if(lessonFiveBtn.checked) {
        vocabulary.push(...lessonFive);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}

function addNewLessonSix() {
    if(lessonSixBtn.checked) {
        vocabulary.push(...lessonSix);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}

function addNewLessonSeven() {
    if(lessonSevenBtn.checked) {
        vocabulary.push(...lessonSeven);
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}
function addNewLessonEight() {
    if(lessonEightBtn.checked) {
        vocabulary.push(...lessonEight);
        console.log(lessonEight)
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}

let currentVocab = 0;
let currentCount = 1;


// function that randomizes the vocabulary
function loadReview() {
    // myVocabs.push(...vocabulary)
    vocabulary.sort(() => Math.random() - 0.5);
    loadVocabulary()
    if(vocabulary == '') {
        currentCountEL.innerText = 0;
    } else {
        currentCountEL.innerText = currentCount;
    }
    wordCount.innerText = vocabulary.length;
}

// const vocabularyList = lessonOne.map(vocab => {
//     `<div>
//         <p>${vocab["βασιλεία, ἡ"]}
//     </div>`
// })

// const vocabularyListOne = document.querySelector(".vocabulary-list")

// vocabularyListOne.innerHTML = vocabularyList;

// function addLEssons() {
//     checkboxes.forEach(item => {
//         if(item.checked) {
//             console.log("Great!");
//         }
       
//     })
// }


function loadVocabulary() {
    if(vocabulary.length == 0) {
        greekVocab.innerHTML = 'Select lesson/s';
    } else {
        greekVocab.innerHTML = Object.keys(vocabulary[currentVocab]);
        // greekVocab.innerText = Object.keys(combinedVocabs[currentVocab]);
        englishVocab.innerHTML = vocabulary[currentVocab][Object.keys(vocabulary[currentVocab])]
    }
}
const wrongVocabs = [];



correct.addEventListener("click", ()  => {
    currentVocab++;
    currentCountEL.innerText = currentCount + currentVocab;
    if(currentVocab < vocabulary.length) {
        loadVocabulary();
        englishVocab.classList.remove("show");
        showAnswer.classList.remove('hide');
        hideAnswer.classList.remove('show');
    } else if(wrongVocabs != '') {
        vocabulary.length = 0;
        currentCount = 1;
        currentVocab = 0;
        reviewWrongAnswers.classList.add('show');
        vocabEL.classList.add('hide')
    } else {
        retake.classList.add('show');
        vocabEL.classList.add('hide')
    }

})

const mainVocabulary = document.querySelector(".vocabulary");
wrongAnswer.addEventListener('click', () => {
    wrongVocabs.push(vocabulary[currentVocab]);
    currentVocab++;
    currentCountEL.innerText = currentCount + currentVocab;
    mainVocabulary.classList.add('shake-effect');
    setTimeout(() => {
        mainVocabulary.classList.remove('shake-effect');
    }, 1000)


    if(currentVocab < vocabulary.length) {

        loadVocabulary();
        englishVocab.classList.remove("show");
        showAnswer.classList.remove('hide');
        hideAnswer.classList.remove('show');

    } else if(wrongVocabs != '') {
        vocabulary.length = 0;
        currentCount = 1;
        currentVocab = 0;
        reviewWrongAnswers.classList.add('show');
        vocabEL.classList.add('hide')
    } else {
        retake.classList.add('show');
        vocabEL.classList.add('hide')
    }
    
})


// Review of wrong answers page 

const nextReview = document.querySelector(".next-review");


reviewWrongAnswers.addEventListener('click', () => {
    wordCount.innerText = wrongVocabs.length;
    currentCountEL.innerText = currentCount;
    vocabEL.classList.remove("hide");
    wrongAnswer.classList.add('hide');
    correct.classList.add('hide');
    retake.classList.remove('show');
    reviewWrongAnswers.classList.remove('show');
    nextReview.classList.add("show-nextReview");
    wrongVocabsReview()

})

function wrongVocabsReview() {
    greekVocab.innerHTML = Object.keys(wrongVocabs[currentVocab]);
    englishVocab.innerHTML = wrongVocabs[currentVocab][Object.keys(wrongVocabs[currentVocab])]
}

const finishedEl = document.querySelector(".finished")
const closed = document.querySelector(".close");
closed.addEventListener('click', () => {
    finishedEl.style.display = "none";
})
nextReview.addEventListener('click', () => {
    currentVocab++;
    currentCountEL.innerText = currentCount + currentVocab;
    if(currentVocab < wrongVocabs.length) {
        wrongVocabsReview()
        englishVocab.classList.remove("show");
        showAnswer.classList.remove('hide');
        hideAnswer.classList.remove('show');
    } else {
        retake.classList.add('show');
        vocabEL.classList.add('hide')
        // reset.classList.remove('show');
    
        finishedEl.style.display = "flex";

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

reviewNow.addEventListener('click', () => {
    if(vocabulary == '') {
        alert('choose lessons')
    } else {
        vocabEL.classList.add("show");
        lessonsEL.classList.add('hide')
        // reset.classList.add('show');
    }
 
})


// PARADIGMS TABLE //

const nounParadigmsTable = document.querySelector('.noun-paradigms-table');
const verbParadigmsTable = document.querySelector('.verb-paradigms-table');
const paradigmsSection = document.querySelector('.paradigms-section');
const paradigmReview = document.querySelector('.paradigm-review');

paradigmReview.addEventListener('click', () => {
    mainReview.classList.add("hide");
    paradigmsSection.style.display = "block";
    nounParadigmsTable.style.display = 'flex';
    verbParadigmsTable.style.display = 'flex';
    // reset.classList.add('show');
    goBack.style.display = 'block';
    document.querySelector(".love-greek").style.display = 'none';
})



let nounParadigms = [
    {
        "Paradigm": "1st Declension: Eta Pattern",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "ἡ φωνή",
        "Gen-Singular" : "τῆς φωνῆς",
        "Dat-Singular" : "τῇ φωνῇ",
        "Acc-Singular" : "τὴν φωνήν",
        "Nom-Plural" : "αἱ φωναί",
        "Gen-Plural" : "τῶν φωνῶν",
        "Dat-Plural" : "ταῖς φωναῖς",
        "Acc-Plural" : "τὰς φωνάς"
    },
    {
        "Paradigm": "1st Declension: Alpha Pattern <br>(After –ε, –ι or –ρ )",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "ἡ οἰκία",
        "Gen-Singular" : "τῆς οἰκίας",
        "Dat-Singular" : "τῇ οἰκίᾳ",
        "Acc-Singular" : "τὴν οἰκίαν",
        "Nom-Plural" : "αἱ οἰκίαι",
        "Gen-Plural" : "τῶν οἰκιῶν",
        "Dat-Plural" : "ταῖς οἰκίαις",
        "Acc-Plural" : "τὰς φωνάς"
    },
    {
        "Paradigm": "2nd Declension: Masculine",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "ὁ λόγος",
        "Gen-Singular" : "τοῦ λόγου",
        "Dat-Singular" : "τῷ λόγῳ",
        "Acc-Singular" : "τὸν λόγον",
        "Nom-Plural" : "οἱ λόγοι",
        "Gen-Plural" : "τῶν λόγων",
        "Dat-Plural" : "τοις λόγοις",
        "Acc-Plural" : "τοὺς λόγους"
    },
    {
        "Paradigm": "2nd Declension: Neuter",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "τὸ ἔργον",
        "Gen-Singular" : "τοῦ ἔργου",
        "Dat-Singular" : "τῷ ἔργῳ",
        "Acc-Singular" : "τὸ ἔργον",
        "Nom-Plural" : "τὰ ἔργα",
        "Gen-Plural" : "τῶν ἔργων",
        "Dat-Plural" : "τοις ἔργοις",
        "Acc-Plural" : "τὰ ἔργα"
    }
]

const nounParadigmEl = nounParadigms.map(nounParadigm => 
    ` <details>
            <summary> ${nounParadigm.Paradigm}</summary>
            <table>
                <tr>

                    <th>Case</th>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
                <tr>
                    <td>${nounParadigm.Case1}</td>
                    <td>${nounParadigm["Nom-Singular"]}</td>
                    <td>${nounParadigm["Nom-Plural"]}</td>
                </tr>
                <tr>
                    <td>${nounParadigm.Case2}</td>
                    <td>${nounParadigm["Gen-Singular"]}</td>
                    <td>${nounParadigm["Gen-Plural"]}</td>
                </tr>
                <tr>
                    <td>${nounParadigm.Case3}</td>
                    <td>${nounParadigm["Dat-Singular"]}</td>
                    <td>${nounParadigm["Dat-Plural"]}</td>
                </tr>
                <tr>
                    <td>${nounParadigm.Case4}</td>
                    <td>${nounParadigm["Acc-Singular"]}</td>
                    <td>${nounParadigm["Acc-Plural"]}</td>
                </tr>
            </table>
</details>`  
  )

  nounParadigmsTable.innerHTML = nounParadigmEl;



  

  let verbParadigms = [
    {
        "Paradigm": "Present Active Tense-Form",
        "1s" : "λύω",
        "2s" : "λύεις",
        "3s" : "λύει",
        "1p" : "λύομεν",
        "2p" : "λύετε",
        "3p" : "λύουσι(ν)",
        "1s-translation" : "I am loosing",
        "2s-translation" : "You are loosing",
        "3s-translation" : "He/she/it is loosing",
        "1p-translation" : "We are loosing",
        "2p-translation" : "You (all) are loosing",
        "3p-translation" : "They are loosing"
    },
    {
        "Paradigm": "Present Mid/Pas Tense-Form",
        "1s" : "λύομαι",
        "2s" : "λύῃ",
        "3s" : "λύεται",
        "1p" : "λυόμεθα",
        "2p" : "λύεσθε",
        "3p" : "λύονται",
        "1s-translation" : "I am being loosed",
        "2s-translation" : "You are being loosed",
        "3s-translation" : "He/she/it is being loosed",
        "1p-translation" : "We are being loosed",
        "2p-translation" : "You (all) are being loosed",
        "3p-translation" : "They are being loosed"
    },
    {
        "Paradigm": "Present Active Indicative of εἰμί",
        "1s" : "εἰμί",
        "2s" : "εἶ",
        "3s" : "ἐστίν",
        "1p" : "ἐσμέν",
        "2p" : "ἐστέ",
        "3p" : "εἰσίν",
         "1s-translation" : "I am",
        "2s-translation" : "You are",
        "3s-translation" : "He/she/it is",
        "1p-translation" : "We are",
        "2p-translation" : "You (all) are ",
        "3p-translation" : "They are"
    },
    {
        "Paradigm": "Imperfect Active Tense-Form",
        "1s" : "ἔλυον",
        "2s" : "ἔλυες",
        "3s" : "ἔλυε(ν)",
        "1p" : "ἐλύομεν",
        "2p" : "ἐλύετε",
        "3p" : "ἔλυον",
        "1s-translation" : "I was loosing",
        "2s-translation" : "You were loosing",
        "3s-translation" : "He/she/it was loosing",
        "1p-translation" : "We were loosing",
        "2p-translation" : "You (all) loosing",
        "3p-translation" : "They were loosing"
    },
    {
        "Paradigm": "Imperfect Mid/Pas Tense-Form",
        "1s" : "ἐλυόμην",
        "2s" : "ἐλύου",
        "3s" : "ἐλύετο",
        "1p" : "ἐλυόμεθα",
        "2p" : "ἐλύεσθε",
        "3p" : "ἐλύοντο",
        "1s-translation" : "I was being loosed",
        "2s-translation" : "You were being loosed",
        "3s-translation" : "He/she/it was being loosed",
        "1p-translation" : "We were being loosed",
        "2p-translation" : "You (all) were being loosed",
        "3p-translation" : "They were being loosed"
    },
    {
        "Paradigm": "Imperfect Active Indicative of εἰμί",
        "1s" : "ἤμην",
        "2s" : "ἦς",
        "3s" : "ἦν",
        "1p" : "ἦμεν",
        "2p" : "ἦτε",
        "3p" : "ἦσαν",
        "1s-translation" : "I was",
        "2s-translation" : "You were",
        "3s-translation" : "He/she/it was",
        "1p-translation" : "We were",
        "2p-translation" : "You (all) were",
        "3p-translation" : "They were"
    }
  ]

  const verbParadigmsEl = verbParadigms.map(verbParadigm => 
    `<details>
            <summary> ${verbParadigm.Paradigm}</summary>
            <table>
                <tr>

                    <th></th>
                    <th></th>
                    <th>Translation</th>

                </tr>
                <tr>
                    <td>1S</td>
                    <td>${verbParadigm["1s"]}</td>
                    <td class="translation">${verbParadigm["1s-translation"]}</td>
                </tr>
                <tr>
                    <td>2S</td>
                    <td>${verbParadigm["2s"]}</td>
                    <td class="translation">${verbParadigm["2s-translation"]}</td>
                </tr>
                <tr>
                    <td>3S</td>
                    <td>${verbParadigm["3s"]}</td>
                    <td class="translation">${verbParadigm["3s-translation"]}</td>
                </tr>
                <tr>
                    <td>1P</td>
                    <td>${verbParadigm["1p"]}</td>
                    <td class="translation">${verbParadigm["1p-translation"]}</td>
                </tr>
                
                 <tr>
                    <td>2P</td>
                    <td>${verbParadigm["2p"]}</td>
                    <td class="translation">${verbParadigm["2p-translation"]}</td>
                </tr>
                <tr>
                    <td>3P</td>
                    <td>${verbParadigm["3p"]}</td>
                    <td class="translation">${verbParadigm["3p-translation"]}</td>
                </tr>
            </table>
</details>`
)

  verbParadigmsTable.innerHTML = verbParadigmsEl;