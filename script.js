let vocabulary = [];
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
    {"ἔρχομαι ": "I come, go16"},
    {"πορεύομαι ": "I go, travel"},
    {"ἀλλά ": "18 but, yet, nevertheless"},
    {"ὅτι": " that, because"}
]
const lessonFour = [
    {"ἄγω ": "- I lead, bring (pedagogical)"},
    {"βλέπω": " - I see, look at"},
    {"διδάσκω": " - I teach (didactic)"},
    {"ἐγείρω ": "- I raise up"},
    {"κρίνω ": "- I judge, condemn (critic)"},
    {"μένω": " - I remain, abide, dwell (remain)"},
    {"ὑπάγω": " - I go away, depart"},
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


const greekVocab = document.querySelector(".greek-vocabulary")
const vocabEL = document.querySelector(".main")
const englishVocab = document.querySelector(".english-vocabulary")
const correct = document.querySelector(".correct-answer")
const showAnswer = document.querySelector(".show-answer")
const hideAnswer = document.querySelector(".hide-answer")
const retake = document.querySelector(".retake");
const wordCount = document.querySelector(".count");



//add a function that will push every checked input to vocabulary

const lessonOneEl = document.getElementById("lessonOne");

lessonOneEl.addEventListener('click', () => {
    if(lessonOneEl.checked) {
        console.log("lessons added");
        const addLessonOne = vocabulary.push(lessonOne);
        console.log(addLessonOne[1])
    }
})



const addLesson = vocabulary.push(lessonOne)
const addLessonTwo = vocabulary.push(lessonTwo)
const addLessonThree = vocabulary.push(lessonThree)
const addLessonFour = vocabulary.push(lessonFour)
const addLessonFive = vocabulary.push(lessonFive)
const addLessonSix = vocabulary.push(lessonSix)

const combinedVocabs = vocabulary.flat()
console.log(combinedVocabs)

wordCount.innerText = combinedVocabs.length;




let shuffled = combinedVocabs
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)



let currentVocab = 0;
//load vocabulary s



const loadVocabulary = () => {
    if(vocabulary.length == 0) {
        greekVocab.innerHTML = 'Select Lesson';
    } else {
        greekVocab.innerHTML = Object.keys(shuffled[currentVocab]);
        englishVocab.innerHTML = shuffled[currentVocab][Object.keys(shuffled[currentVocab])]
    }
   
}

correct.addEventListener("click", ()  => {
    currentVocab++;
   

    if(currentVocab < combinedVocabs.length) {

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


