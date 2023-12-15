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
const lessonNineBtn = document.getElementById("lessonNine");
const lessonNineEl = document.getElementById("lesson-nine");
const lessonTenBtn = document.getElementById("lessonTen");
const lessonTenEl = document.getElementById("lesson-ten");
const lessonElevenBtn = document.getElementById("lessonEleven");
const lessonElevenEl = document.getElementById("lesson-eleven");
const lessonTwelveBtn = document.getElementById("lessonTwelve");
const lessonTwelveEl = document.getElementById("lesson-twelve");


const lessonIrregBtn = document.getElementById("lessonIrreg");
const lessonIrregEl = document.getElementById("lesson-irreg");

const lessonIrregTwoBtn = document.getElementById("lessonIrregTwo");
const lessonIrregTwoEl = document.getElementById("lesson-irreg-two");

const lessonThirteenBtn = document.getElementById("lessonThirteen");
const lessonThirteenEl = document.getElementById("lesson-thirteen");
const lessonFourteenBtn = document.getElementById("lessonFourteen");
const lessonFourteenEl = document.getElementById("lesson-fourteen");
const lessonFifteenBtn = document.getElementById("lessonFifteen");
const lessonFifteenEl = document.getElementById("lesson-fifteen");
const lessonSixteenBtn = document.getElementById("lessonSixteen");
const lessonSixteenEl = document.getElementById("lesson-sixteen");
const lessonSeventeenBtn = document.getElementById("lessonSeventeen");
const lessonSeventeenEl = document.getElementById("lesson-seventeen");
const lessonEighteenBtn = document.getElementById("lessonEighteen");
const lessonEighteenEl = document.getElementById("lesson-eighteen");
const lessonNineteenBtn = document.getElementById("lessonNineteen");
const lessonNineteenEl = document.getElementById("lesson-nineteen");
const lessonTwentyBtn = document.getElementById("lessonTwenty");
const lessonTwentyEl = document.getElementById("lesson-twenty");
const lessonTwentyOneBtn = document.getElementById("lessonTwentyOne");
const lessonTwentyOneEl = document.getElementById("lesson-twentyone");
const lessonTwentyTwoBtn = document.getElementById("lessonTwentyTwo");
const lessonTwentyTwoEl = document.getElementById("lesson-twentytwo");
const lessonTwentyThreeBtn = document.getElementById("lessonTwentyThree");
const lessonTwentyThreeEl = document.getElementById("lesson-twentythree");
const toReview = document.querySelector(".toReview");
const goBack = document.querySelector(".goBack");







// Refactored code // 
let newVocabsArray = [];

let lessonsValue = [];

let lessonsChecked = document.querySelectorAll('input[name="lessons"]');

reviewNow.addEventListener('click', () => {

    async function fetchVocabulary() {
        const response = await fetch('./vocabs.json')
        const data = await response.json();
        const paradigmsData = data.paradigms;
        const vocabularyData = data.vocabulary;
        newVocabs(vocabularyData)
    }
    fetchVocabulary()

    function newVocabs(vocabs) {
        const vocabList = document.createElement('div')
        const vocabularyList = vocabs;
        console.log(vocabularyList) 
        for (const vocab of vocabularyList) {
            console.log(vocab)
        }

    }

        lessonsChecked.forEach((checkbox) => {
            if(checkbox.checked) {
                lessonsValue.push(checkbox.value);
                console.log(lessonsValue);
               
            }
           
        })
    })
    


const vocabulary = [];
const lessonOne = [
    {greek : "ἀγάπη, ἡ", gloss: "love"},
    {greek : "γῆ ἡ" , gloss: "earth, land, ground (geology)"},
    {greek : "ζωή ἡ", gloss: "life (zoo, zoology)"},
    {greek : "φωνή, ἡ ", gloss: "voice, sound (phonetics, phonograph, phone)"},
    {greek : "ἀλήθεια, ἡ", gloss: "truth"},
    {greek : "ἁμαρτία, ἡ", gloss:  "sin (hamartiology—the theological study of sin)"},
    {greek : "βασιλεία, ἡ" , gloss: "kingdom, reign (basilica)"},
    {greek : "δόξα, ἡ" , gloss: "glory, majesty (doxology)"},
    {greek : "ἐκκλησία, ἡ" , gloss: "congregation, assembly, church (ecclesiastical)"},
    {greek : "ἡμέρα, ἡ" , gloss: "day (ephemeral, “for a day”)"},
    {greek : "καρδία, ἡ", gloss:  "heart (cardiologist)"},
    {greek : "δέ" , gloss: "and, but, now"},
    {greek : "καί" , gloss: "and, even, also"},
    {greek : "μέν" , gloss: "on the one hand, indeed"},
    {greek : "ὁ, ἡ, τό" , gloss: "the"}
]
const lessonTwo = [
    {greek :"ἀδελφός, ὁ ", gloss: "brother (and sister) "},
    {greek :"ἄνθρωπος, ὁ ", gloss: "man, human being, husband (anthropology)"},
    {greek :"θεός, ὁ ", gloss: "God (theology)"},
     {greek :"κόσμος, ὁ ", gloss: "world, universe; adornment (cosmos, cosmology, cosmetics)"},
     {greek :"κύριος, ὁ ", gloss: "Lord, master, sir"},
    {greek :"λόγος, ὁ ", gloss: "word, message, account (logic, theology,psychology)"},
    {greek :"νόμος, ὁ ", gloss: "law, principle (theonomists)"},
    {greek :"οὐρανός, ὁ", gloss: " heaven, sky (Uranus)"},
    {greek :"υἱός, ὁ ", gloss: "son, descendant"},
    {greek :"Χριστός, ὁ ", gloss: "Christ, Messiah, Anointed One (Christ)"},
    {greek :"ἔργον, τό", gloss: "work, deed (ergonomic)"},
    {greek :"εὐαγγέλιον, τό ", gloss: "good news, gospel (evangelistic, evangelical)"},
    {greek :"ἱερόν, τό ", gloss: "temple, sanctuary"},
     {greek :"σημεἱον, τό ", gloss: "sign (semiotics)"},
    {greek :"τέκνον, τό", gloss: " child, son, descendant"}
]
const lessonThree = [
    {greek :"ἀποκρίνομαι ", gloss: "I answer, reply"},
    {greek :"εἰμί ", gloss: "I am, exist"},
    {greek :"ἀκούω", gloss: " I hear, listen to, obey (acoustics)"},
    {greek :"γινώσκω ", gloss: "I know, understand, acknowledge (knowledge, Gnostics)"},
    {greek :"γράφω ", gloss: "I write (graphics)"},
    {greek :"ἔχω ", gloss: "I have, hold"},
    {greek :"λέγω ", gloss: "I say, speak (legend)"},
    {greek :"λαμβάνω ", gloss: "I take, receive"},
    {greek :"λύω ", gloss: "I loose, destroy"},
    {greek :"πιστεύω ", gloss: "I believe, have faith/trust in"},
    {greek :"γίνομαι ", gloss: "I become, come, exist, am born"},
    {greek :"ἔρχομαι ", gloss: "I come, go"},
    {greek :"πορεύομαι ", gloss: "I go, travel"},
    {greek :"ἀλλά ", gloss: "but, yet, nevertheless"},
    {greek :"ὅτι", gloss: " that, because"}
]
const lessonFour = [
    {greek :"ἄγω ", gloss: "- I lead, bring (pedagogical)"},
    {greek :"βλέπω", gloss: " I see, look at"},
    {greek :"διδάσκω", gloss: " I teach (didactic)"},
    {greek :"ἐγείρω ", gloss: " I raise up"},
    {greek :"κρίνω ", gloss: " I judge, condemn (critic)"},
    {greek :"μένω", gloss: "  I remain, abide, dwell (remain)"},
    {greek :"ὑπάγω", gloss: "  I go away, depart"},
    {greek :"δοῦλος, -ου, ὁ ", gloss: " slave (doula)"},
    {greek :"θάνατος, -ου, ὁ ", gloss: " death "},
    {greek :"ψυχή, -ης, ἡ ", gloss: " soul, life, living being (psychology)"},
    {greek :"ὥρα, -ας, ἡ ", gloss: " hour"},
    {greek :"εἰ ", gloss: "if,  whether"},
    {greek :"εἴτε ", gloss: "if, whether"},
    {greek :"καθώς", gloss: "  as, just as, even as"},
    {greek :"ὡς ", gloss: "as,  like"},
    {greek :"ὦ, τό ", gloss: " end, Omega"},
    {greek :"ὁδὸς, ἡ ", gloss: "- way"}
]
const lessonFive = [
    {greek :"βαπτίζω", gloss:" I baptize, immerse, dip (baptize)"},
    {greek :"θεραπεύω", gloss:" I heal (therapeutic)"},
    {greek :"κράζω ", gloss:"I cry out"},
    {greek :"ἄγγελος, ὁ ", gloss:"angel, messenger (angel)"},
    {greek :"μαθητής, ὁ", gloss:" disciple, follower 	(mathematics)"},
    {greek :"ὄχλος, ὁ", gloss:" crowd"},
    {greek :"προφήτης, ὁ", gloss:" prophet (prophet)"},
    {greek :"γάρ ", gloss:"for, because "},
    {greek :"ἐκεῖ ", gloss:"there, in that place"},
    {greek :"κἀγώ", gloss:" and I (καί + ἐγώ)"},
    {greek :"οὖν ", gloss:"then, so, therefore"},
    {greek :"οὕτως", gloss:" in this manner, thus, so"},
    {greek :"τέ", gloss:" and, but"},
    {greek :"οὐ, οὐκ, οὐχ", gloss:" no, not"},
    {greek :"οὐχί", gloss:"no! (emphatic)"}
]
const lessonSix = [
    {greek :"ἀγαπάω" , gloss:"I love"},
    {greek :"γεννάω" , gloss:"I give birth to, bear, beget (genealogy)"},
    {greek :"ἐπερωτάω" , gloss:"I ask "},
    {greek :"ἐρωτάω" , gloss:"I ask, question, request"},
    {greek :"αἰτέω" , gloss:"I ask, demand"},
    {greek :"ἀκολουθέω", gloss: "I follow (acolyte)"},
    {greek :"ζητέω" , gloss:"I seek, look for"},
    {greek :"καλέω" , gloss:"I call, invite, name (call)"},
    {greek :"λαλέω" , gloss:"I speak, say (glossolalia)"},
    {greek :"μαρτυρέω ", gloss:"I testify, bear witness (martyr)"},
    {greek :"παρακαλέω" , gloss:"I call, urge, comfort"},
    {greek :"περιπατέω" , gloss:"I walk, live (peripatetic)"},
    {greek :"ποιέω" , gloss:"I do, make (poet)"},
    {greek :"φοβέομαι" , gloss:"I am afraid, fear, respect (phobia)"},
    {greek :"πληρόω" , gloss:"I fill, fulfill, complete"}
]

const lessonSeven = [
    {greek : "ἀπό", gloss: "from, away from (gen)"},
    {greek : "διά" , gloss : "through (gen); because of (acc) (diameter)"},
    {greek : "εἰς", gloss : "into, among, for (acc) (eisegesis)"},
    {greek : "ἐκ" , gloss:"from, out of (gen) (exhale, exegesis)"},
    {greek : "ἐν" , gloss: "in, on, at, by, with (dat)"},
    {greek : "ἐπί" , gloss: "on, upon, over (gen); on, upon, at, in (dat); on, upon, to, for (acc) (epigraph)"},
    {greek : "κατά", gloss : "down, against (gen); according to (acc) (cataphoric)"},
    {greek : "μετά" , gloss: "with, among (gen); after (acc) "},
    {greek : "παρά" , gloss: "from (gen); with (dat); beside, on, at (acc) (parable, paramedic)"},
    {greek : "περί" , gloss: "about, concerning (gen); around (acc) (perimeter)"},
    {greek : "πρός" , gloss: "to, toward (acc) (prosthesis)"},
    {greek : "σύν" , gloss: "with (dat) (syntax)"},
    {greek : "ὑπέρ", gloss : "for, on behalf of (gen); above, beyond (acc) (hypercritical, hyperactive)"},
    {greek : "ὑπό" , gloss: "by (gen); under, below (acc) (hypotaxis, hypothesis)"},
    {greek : "ἐνώπιον" , gloss: "before, in the presence of"}

]
const lessonEight = [
    {greek : "αὐτός, –ή, –ό" , gloss: "he, she, it; self, same (autopilot)"},
    {greek : "ἐγώ, ἡμεῖς" , gloss: "I; we (ego, egomaniac)"},
    {greek : "ὅς, ἥ, ὅ" , gloss: "who, which, that"},
    {greek : "σύ, ὑμεῖς", gloss : "you (sg); you (pl)"},
    {greek : "ἄρτος, ὁ" , gloss: "bread, food "},
    {greek : "δικαιοσύνη, ἡ" , gloss: "righteousness, justice"},
    {greek : "εἰρήνη, ἡ" , gloss: "peace (irenic, Irene)"},
    {greek : "ἐξουσία, ἡ", gloss: "authority, right, power "},
    {greek : "θάλασσα, ἡ" , gloss: "lake, sea (thalassic)"},
    {greek : "λαός, ὁ" , gloss: "people, crowd (laity)"},
    {greek : "ὁδός, ἡ", gloss : "way, road (exodus)"},
    {greek : "οἰκία, ἡ" , gloss: "home, dwelling, family (economy)"},
    {greek : "οἶκος, ὁ" , gloss: "house, household, family"},
    {greek : "ὀφθαλμός, ὁ" , gloss: "eye (ophthalmology)"},
    {greek : "τόπος, ὁ" , gloss: "place (topography)"}

]

const lessonNine = [
    {greek : "διώκω" , gloss: "I pursue, persecute"},
    {greek : "δοξάζω" , gloss: "I glorify, praise (doxology)"},
    {greek : "πέμπω" , gloss: "I send"},
    {greek : "πράσσω" , gloss: "I do, practice (practical, pragmatic)"},
    {greek : "σῴζω" , gloss: "I save, rescue, heal (soteriology)"},
    {greek : "τηρέω" , gloss: "I keep, guard, obey"},
    {greek : "ἀπόστολος, ὁ" , gloss: "apostle, messenger (apostle)"},
    {greek : "ἐντολή, ἡ" , gloss: "command"},
    {greek : "καιρός, ὁ" , gloss: "time, season"},
    {greek : "κεφαλή, ἡ" , gloss: "head (encephalitis)"},
    {greek : "πρόσωπον, τό" , gloss: "face, appearance "},
    {greek : "σάββατον, τό" , gloss: "Sabbath, week (Sabbath)"},
    {greek : "ἔτι" , gloss: "still, yet, more"},
    {greek : "μᾶλλον" , gloss: "more, rather"},
    {greek : "οὐκέτι" , gloss: "no longer"},
    {greek : "ὁράω" , gloss: "see, look upon, experience (1 John)"},
    {greek : "ἀρχή" , gloss: "beginning (1 John)"},
    {greek : "θεάομαι" , gloss: "I see, behold, contemplate (1 John)"},
    {greek : "χείρ" , gloss: "hand (1 John)"},
    {greek : "ψηλαφάω" , gloss: "I feel, touch, handle, grope for  (1 John)"}
]

const lessonTen = [
    {greek : "ἀνοίγω", gloss: " I open "},
    {greek : "ἀπολύω", gloss: " I set free, dismiss, divorce"},
    {greek : "ἄρχω", gloss: " I rule, begin (mid) (oligarch)"},
    {greek : "προσεύχομαι", gloss: " I pray"},
    {greek : "προσκυνέω", gloss: " I worship"},
    {greek : "συνάγω", gloss: " I gather, bring together 	(synagogue)"},
    {greek : "ἀρχή, ἡ", gloss: " beginning (archaic)"},
    {greek : "δαιμόνιον, τό", gloss: " demon (demon)"},
    {greek : "διδάσκαλος, ὁ", gloss: " teacher (didactic)"},
    {greek : "θρόνος, ὁ", gloss: " throne (throne)"},
    {greek : "ἱμάτιον, τό", gloss: " clothing, garment"},
    {greek : "καρπός, ὁ", gloss: " fruit, crop"},
    {greek : "πλοῖον, τό", gloss: " ship, boat"},
    {greek : "συναγωγή, ἡ", gloss: " synagogue, assembly 	(synagogue)"},
    {greek : "χαρά, ἡ", gloss: " joy (charity) (1 John)"},
    {greek : "φανερόω", gloss: " I make clear, visible, or manifest  (1 John)"},
    {greek : "μαρτυρέω", gloss: " I witness, testify (1 John)"},
    {greek : "ἀπαγγέλλω", gloss: " I report, bring a report, announce (1 John)"},
    {greek : "αἰώνιος", gloss: " eternal, unending (1 John)"},
    {greek : "πατήρ", gloss: " father (1 John)"}
]

const lessonEleven = [
    {greek : "ἀναβαίνω",  gloss: "I go up, ascend"}, 
    {greek : "ἀπέρχομαι",  gloss: "I go away, depart"},
    {greek : "ἀποθνῄσκω", gloss:  "I die (euthanasia)"},
    {greek : "βάλλω", gloss: "I throw, cast out (ball, ballistic)" },
    {greek : "εἰσέρχομαι", gloss:  "I go in, enter"},
    {greek : "ἐκβάλλω",  gloss: "I drive/send out"},
    {greek : "ἐσθίω",  gloss: "I eat"},
    {greek : "ἐξέρχομαι",  gloss: "I go out, depart, leave, come out"},
    {greek : "εὑρίσκω",  gloss: "I find, discover (Eureka!)"},
    {greek : "καταβαίνω", gloss:  "I go down, descend"},
    {greek : "πίνω",  gloss: "I drink"},
    {greek : "πίπτω", gloss:  "I fall"},
    {greek : "προσέρχομαι",  gloss: "I go to, approach"},
    {greek : "φέρω", gloss:  "I bear, carry "},
    {greek : "ἐπαγγελία, ἡ", gloss:   "promise (1 John)"},
    {greek : "Κοινωνία", gloss:  "participation, communion, fellowship (1 John)"},
    {greek : "ἡμέτερος", gloss:  "our, our own (1 John)"},
    {greek : "Πατρὸς", gloss:  "father (genitive form) (1 John)"}
]

const lessonTwelve = [
    {greek : "αἴρω",  gloss: "I take up/away"}, 
    {greek : "ἀπαγγέλλω",  gloss: "I announce, report (angel)"},
    {greek : "ἀποκτείνω",  gloss: "I kill, put to death"},
    {greek : "ἀποστέλλω",  gloss: "I send out (apostle)"},
    {greek : "σπείρω",  gloss: "I sow, plant (sperm, spore)"},
    {greek : "γλῶσσα, ἡ",  gloss: "language, tongue (glossolalia)"},
    {greek : "γραφή, ἡ",  gloss: "writing, Scripture (graphics)"},
    {greek : "λίθος, ὁ",  gloss: "stone (lithograph)"},
    {greek : "ναός, ὁ",  gloss: "temple, sanctuary"},
    {greek : "παραβολή, ἡ ",  gloss: "parable (parable)"},
    {greek : "σοφία, ἡ",  gloss: "wisdom (sophistry, sophomore)"},
    {greek : "σωτηρία, ἡ",  gloss: "salvation, deliverance"},
    {greek : "χρόνος, ὁ",  gloss: "time (chronology)"},
    {greek : "διό",  gloss: "therefore, for this reason"},
    {greek : "εὐθύς",  gloss: "immediately, straightaway"},
    {greek : "πληρόω",  gloss: "I fill, fulfill, complete (1 John)"}    
]
const lessonIrreg = [
    {greek : "ἀνέβην",  gloss: "ἀναβαίνω"}, 
    {greek : "ἀπῆλθον",  gloss: "ἀπέρχομαι"},
    {greek : "ἀπέθανον",  gloss: "ἀποθνῄσκω"},
    {greek : "ἔβαλον",  gloss: "βάλλω"},
    {greek : "εἰσῆλθον",  gloss: "εἰσέρχομαι"},
    {greek : "ἐξέβαλον",  gloss: "ἐκβάλλω"},
    {greek : "ἔφαγον",  gloss: "ἐσθίω"},
    {greek : "ἐξῆλθον",  gloss: "ἐξέρχομαι"},
    {greek : "εὗρον",  gloss: "εὑρίσκω"},
    {greek : "κατέβην",  gloss: "καταβαίνω"},
    {greek : "ἔπιον",  gloss: "πίνω"},
    {greek : "ἔπεσον",  gloss: "πίπτω"},
    {greek : "προσῆλθον",  gloss: "προσέρχομαι"},
    {greek : "ἤνεγκον",  gloss: "φέρω; 1S form found in LXX & NT is always ἤνεγκα."},
    {greek : "ἤγαγον",  gloss: "ἄγω"},
    {greek : "εἶδον",  gloss: "βλέπω"},
    {greek : "ἐγενόμην",  gloss: "γίνομαι"},
    {greek : "ἔγνων",  gloss: "γινώσκω"},
    {greek : "ἦλθον",  gloss: "ἔρχομαι"},
    {greek : "ἔσχον",  gloss: "ἔχω"},
    {greek : "ἔλαβον",  gloss: "λαμβάνω"},
    {greek : "εἶπον",  gloss: "λέγω"},
    {greek : "συνήγαγον",  gloss: "συνάγω"}
]
const lessonIrregTwo = [
    {greek : "γέγονα",  gloss: "γίνομαι"}, 
    {greek : "γέγραφα",  gloss: "γράφω"},
    {greek : "ἐλήλυθα",  gloss: "ἔρχομαι"},
    {greek : "εἴληφα",  gloss: "λαμβάνω"},
    {greek : "πέποιθα",  gloss: "πείθω"},
    {greek : "ἀναβέβηκα",  gloss: "ἀναβαίνω"},
    {greek : "εὕρηκα",  gloss: "εὑρίσκω"},
    {greek : "εἴρηκα",  gloss: "λέγω"},
    {greek : "ᾔδειν (pluperfect)",  gloss: "οἶδα"}

]
const lessonThirteen = [
        {greek : "αἰών, –ῶνος, ὁ",  gloss: "eternity, age, world (eon)"}, 
    {greek : "ἀνήρ, ἀνδρός, ὁ",  gloss: "man, husband 	(androgynous, android)"},
    {greek : "ἀρχιερεύς, –έως, ὁ",  gloss: "high priest (archenemy, arch)"},
    {greek : "βασιλεύς, –έως, ὁ",  gloss: "king (basilica)"},
    {greek : "πατήρ, πατρός, ὁ",  gloss: "father, ancestor 	(patristics, patriarch)"},
    {greek : "γυνή, γυναικός, ἡ",  gloss: "woman, wife 	(gynecology)"},
    {greek : "μήτηρ, –τρός, ἡ",  gloss: "mother (matriarch)"},
    {greek : "πίστις, –εως, ἡ",  gloss: "faith, trust"},
    {greek : "πόλις, –εως, ἡ",  gloss: "city, town (metropolitan)"},
    {greek : "χάρις, –ιτος, ἡ",  gloss: "grace, thanks (charity)"},
    {greek : "ἔθνος, –ους, τό",  gloss: "nation, people; Gentiles (pl) 	(ethnic)"},
    {greek : "ὄνομα, –ατος, τό",  gloss: "name (pseudonym)"},
    {greek : "πνεῦμα, –ατος, τό",  gloss: "Spirit, spirit, wind 	(pneumatology)"},
    {greek : "σῶμα, –ατος, τό",  gloss: "body (psychosomatic)"},
    {greek : "σάρξ, σαρκός, ἡ",  gloss: "flesh, body, mortal nature (sarcoma, sarcophagus)"}
]

const lessonFourteen = [
    {greek : "ἐγγίζω",  gloss: "I approach, draw near"}, 
    {greek : "ζάω",  gloss: "I live (zoo)"},
    {greek : "οἶδα",  gloss: "I know, understand"},
    {greek : "ὁράω",  gloss: "I see, perceive (panorama)"},
    {greek : "πείθω",  gloss: "I persuade, convince"},
    {greek : "αἷμα, –ατος, τό",  gloss: "blood (hematology, hemoglobin)"},
    {greek : "γραμματεύς, –εως, ὁ",  gloss: "scribe (grammar)"},
    {greek : "δύναμις, –εως, ἡ",  gloss: "power, miracle (dynamic)"},
    {greek : "πούς, ποδός, ὁ",  gloss: "foot (podiatrist)"},
    {greek : "πῦρ, –ός, τό",  gloss: "fire (pyre, pyromaniac)"},
    {greek : "ῥῆμα, –ατος, τό",  gloss: "word, saying  "},
    {greek : "στόμα, –ατος, ἡ",  gloss: "mouth (stomach) "},
    {greek : "ὕδωρ, –ατος, τό",  gloss: "water (hydraulics, hydrogen)"},
    {greek : "φῶς, φωτός, τό",  gloss: "light (photon, photograph)"},
    {greek : "χείρ, χειρός, ἡ",  gloss: "hand"}
]

const lessonFifteen = [
        {greek : "ἀγαθός, –ή, –όν",  gloss: "good (Agatha)"}, 
        {greek : "ἅγιος, –α, –ον",  gloss: "holy; saints (pl. subst.) (hagiography)"},
        {greek : "ἄλλος, –η, –ο",  gloss: "other, another, different (allomorph)"},
        {greek : "δίκαιος, –α, –ον",  gloss: "righteous, just"},
        {greek : "ἕτερος, –α, –ον",  gloss: "other, another, different 	(heterosexual)"},
        {greek : "καλός, –ή, –όν",  gloss: "good, beautiful (calligraphy)"},
        {greek : "μέγας, μεγάλη, μέγα",  gloss: "large, great 	(mega-market)"},
        {greek : "νεκρός, –ά, –όν",  gloss: "dead (necromancy, 	necropolis)"},
        {greek : "πᾶς, πᾶσα, πᾶν",  gloss: "every, all (pantheism)"},
        {greek : "πιστός, –ή, –όν",  gloss: "faithful, believing"},
        {greek : "πολύς, πολλή, πολύ",  gloss: "much, many, large, 	great (polygon)"},
        {greek : "πονηρός, –ά, –όν",  gloss: "evil, wicked"},
        {greek : "νῦν",  gloss: "now, at present"},
        {greek : "πάλιν",  gloss: "again"},
        {greek : "ἤ",  gloss: "or, than "}
]

const lessonSixteen = [
    {greek: "εὐαγγελίζω",  gloss: " I announce good news, preach  	(evangelist)"},
    {greek: "θεωρέω ",  gloss: "I gaze, behold, look at"},
    {greek: "κάθημαι",  gloss: " I sit (cathedral—where the “seat” 	of 	the bishop is)"},
    {greek: "κηρύσσω",  gloss: " I herald, proclaim, preach (kerygma)"},
    {greek: "ὑπάρχω ",  gloss: "I exist, am"},
    {greek: "αἰώνιος –α, -ο",  gloss: " eternal (aeon)"},
    {greek: "ἕκαστος –η, –ον",  gloss: "each"},
    {greek: "ἔξω ",  gloss: "outside (exoskeleton)"},
    {greek: "ἕως ",  gloss: "until, while"},
    {greek: "οὐδέ ",  gloss: "and not, neither, nor"},
    {greek: "οὔτε ",  gloss: "and not, neither, nor"},
    {greek: "τότε ",  gloss: "then"},
    {greek: "οὐδείς, οὐδεμία, οὐδέν ",  gloss: "no one, nothing (subst)"},
    {greek: "πρεσβύτερος, –α, –ον ",  gloss: "elder, older 	(Presbyterian)"},
    {greek: "ἀμήν ",  gloss: "amen, truly, so be it (Amen)"}

]

const lessonSeventeen = [
        
    {greek: "φανερόω ",  gloss: "I reveal, make known, manifest (phantom, epiphany)"},
    {greek: "κρατέω",  gloss: " I grasp, seize, arrest (democracy)"},
    {greek: "εἷς, μία, ἕν ",  gloss: "one (hendiadys)"},
    {greek: "δύο ",  gloss: "two (duet)"},
    {greek: "τρεῖς ",  gloss: "three (triad)"},
    {greek: "τέσσαρες ",  gloss: "four (tesseract)"},
    {greek: "πέντε",  gloss: " five (Pentagon)"},
    {greek: "ἑπτά ",  gloss: "seven (heptagon)"},
    {greek: "δέκα ",  gloss: "ten (decimeter)"},
    {greek: "δώδεκα ",  gloss: "twelve (dodecagon)"},
    {greek: "πρῶτος, –η, –ον ",  gloss: "first (prototype)"},
    {greek: "δεύτερος, –α, –ον",  gloss: " second (Deuteronomy)"},
    {greek: "τρίτος, –η, –ον",  gloss: " third (tricycle)"},
    {greek: "τέταρτος, –η, –ον ",  gloss: "fourth (tetrarch)"},
    {greek: "μή ",  gloss: "no, not (employed with non-	indicative verbs)"}
    
]

const lessonEighteen = [
        
    {greek: "προσφέρω",  gloss: "I bring to, offer (fertile, metaphor)"},
    {greek: "ἑτοιμάζω",  gloss: "I prepare"},
    {greek: "δέω",  gloss: "I bind"},
    {greek: "παιδίον, τό",  gloss: "child (pedagogy)"},
    {greek: "ὄρος, –ους, τό",  gloss: "mountain, hill (orology)"},
    {greek: "ἐλπίς, –ίδος, ἡ",  gloss: "hope"},
    {greek: "μόνος, –η, –ον",  gloss: "only, single, alone 	(monocle, monograph)"},
    {greek: "ὅλος, –η, –ον",  gloss: "whole, entire, complete 	(wholistic)"},
    {greek: "ἀγαπητός, –ή, –όν",  gloss: "beloved"},
    {greek: "μέσος, –η, –ον",  gloss: "middle, midst (Mesopotamia)"},
    {greek: "λοιπός, –ή, –όν",  gloss: "remaining, rest"},
    {greek: "δεξιός, –ά, –όν",  gloss: "right (ambidextrous—	having “both right” hands)"},
    {greek: "ἄρα",  gloss: "so then"},
    {greek: "ἤδη",  gloss: "already, now"},
    {greek: "ὧδε",  gloss: "here"}

]
const lessonNineteen = [
        
    {greek: "ἀλλήλων",  gloss: "of one another (alien)"},
    {greek: "ἑαυτοῦ, –ῆς, –οῦ",  gloss: "(of) himself, herself, itself"},
    {greek: "ἐκεῖνος, –η, –ο",  gloss: "that; those (pl)"},
    {greek: "ἐμαυτοῦ, –ῆς",  gloss: "myself"},		
    {greek: "οὗτος, αὕτη, τοῦτο",  gloss: "this; these (pl)"},
    {greek: "σεαυτοῦ, –ῆς",  gloss: "(of) yourself"},
    {greek: "τις, τι",  gloss: "someone, certain"},
    {greek: "τίς, τί",  gloss: "who? which? what?"},
    {greek: "ἴδιος, –α, –ον",  gloss: "one’s own, peculiar (idiot)"},
    {greek: "κακός, –ή, –όν",  gloss: "bad, evil (cacophony)"},
    {greek: "ὅσος, –η, –ον",  gloss: "as much as "},
    {greek: "τοιοῦτος, –αύτη, οῦτον",  gloss: "of such a kind, 	such as this"},
    {greek: "πῶς",  gloss: "how?"}, 
    {greek: "ἐμός, –ή, –όν",  gloss: "my, mine"},
    {greek: "ἔσχατος, –η, –ον",  gloss: "last (eschatology)"}
]
const lessonTwenty = [
        
    {greek: "ἁμαρτάνω",  gloss: "I sin (ἥμαρτον) (hamartology)"},
    {greek: "βούλομαι",  gloss: "I wish, want, desire (volition)"},
    {greek: "δεῖ",  gloss: "It is necessary, one must/should"}, 
    {greek: "δοκέω",  gloss: "I seem, suppose, think (Docetism)"},
    {greek: "δύναμαι",  gloss: "I am able, can (dynamic)"},
    {greek: "θέλω",  gloss: "I want, wish, desire 	(Monothelitism)"},
    {greek: "μέλλω",  gloss: "I am about to, am going to"},
    {greek: "θέλημα, –ατος, τό",  gloss: "will, wish, desire"},
    {greek: "νύξ, νυκτός, ἡ",  gloss: "night"},
    {greek: "μακάριος, –α, –ον",  gloss: "blessed, happy (macarism)"},
    {greek: "μηδείς, μηδεία, μηδέν",  gloss: "no one, nothing (subst)"},
    {greek: "τυφλός, –ή, –όν",  gloss: "blind; blind person 	(subst)"},
    {greek: "πρό",  gloss: "before, in front of (gen) (prologue)"},
    {greek: "μηδέ",  gloss: "and not, nor"},
    {greek: "ὥστε",  gloss: "so that"}
]


const lessonTwentyOne = [
    {greek: "δέχομαι",  gloss: " I take, receive, welcome"},
    {greek: "δικαιόω",  gloss: " I declare righteous, justify"},
    {greek: "λογίζομαι",  gloss: " I consider, reckon (theology, 	apologetics)"},
    {greek: " σταυρόω",  gloss: " I crucify"},
    {greek: "ἄν",  gloss: " (particle of indefiniteness: untranslated)"},
    {greek: "ἐάν",  gloss: " if, when"},
    {greek: "ἐὰν μή",  gloss: " unless"},
    {greek: "ἕως",  gloss: " until, while"},
    {greek: "ὅπως",  gloss: " in order that, that"},
    {greek: "ὅστις, ἥτις, ὅ τι",  gloss: " whoever, whatever, who"},
    {greek: "ὅταν",  gloss: " whenever, when (ὅτε + ἄν)"},
    {greek: "ὅτε",  gloss: " when "},
    {greek: "ποῦ",  gloss: " where?"},
    {greek: "ἵνα",  gloss: " in order that, so that, that"},
    {greek: "ὅπου",  gloss: " where"}
]


const lessonTwentyTwo = [
    {greek: "ἀσπάζομαι",  gloss: " I greet"},
    {greek: "ἐπιγινώσκω",  gloss: " I know, understand 	(Gnostic, agnostic, prognosis)"},
    {greek: "ἐργάζομαι",  gloss: " I work, do, perform 	(ergometer, ergonomics, energy)"},
    {greek: " καθίζω",  gloss: " I sit (cathedral [seat of bishop])"},
    {greek: "κατοικέω",  gloss: " I live, dwell (economy)"},
    {greek: "χαίρω",  gloss: " I rejoice; greetings (charity)"},
    {greek: "ἔτος, –ους, τό",  gloss: " year"},
    {greek: "θηρίον, τό",  gloss: " animal, beast"},
    {greek: "κρίσις, –εως, ἡ",  gloss: " judgment, condemnation 	(crisis)"},
    {greek: "φόβος, ὁ",  gloss: " fear, reverence, respect (phobia)"},
    {greek: "φυλακή, ἡ",  gloss: " watch, guard, prison (prophylactic)"},
    {greek: "ἔμπροσθεν",  gloss: " in front of, before"},
    {greek: "ἰδού",  gloss: " behold, look, see"},
    {greek: "θλῖψις, –εως, ἡ",  gloss: " tribulation, affliction"},
   {greek: " χρεία, ἡ",  gloss: " need"}
 
]

const lessonTwentyThree = [
    {greek: "ἀνίστημι",  gloss: "  I stand up, arise (Anastasia)"},
    {greek: "ἀποδίδωμι",  gloss: "  I give back, pay "},
    {greek: "ἀπόλλυμι",  gloss: "  I destroy, am lost (mid) (Apollyon)"},
   {greek: " ἀφίημι",  gloss: "  I forgive, let go, divorce"},
    {greek: "δίδωμι",  gloss: "  I give (donation)"},
    {greek: "ἵστημι",  gloss: "  I stand, set (stand)"},
    {greek: "παραδίδωμι",  gloss: "  I hand over, betray, entrust"},
    {greek: "τίθημι",  gloss: "  I put, place, appoint "},
    {greek: "φημί",  gloss: "  I say, affirm (prophet)"},
    {greek: "ἁμαρτωλός, –όν",  gloss: "  sinful, sinner (subst)"},
    {greek: "γενεά, –ᾶς, ἡ",  gloss: "  generation, family (generation)"},
    {greek: "μικρός, –ά, –όν",  gloss: "  small (microphone, 	micrometer)"},
    {greek: "ὅμοιος, –α, –ον",  gloss: "  same nature, similar "},
    {greek: "ἄχρι",  gloss: "  until"},
    {greek: "οὐαί",  gloss: "  woe"}
]









reviewVocabs.addEventListener('click', () => {
    mainReview.classList.add("hide");
    lessonSection.classList.add("show-lesson")
    goBack.style.display = 'block';
    mainTitle.classList.add('hide');
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
lessonNineBtn.addEventListener('click', () => {
    addNewLessonNine();
    lessonNineEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 9";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});

lessonTenBtn.addEventListener('click', () => {
    addNewLessonTen();
    lessonTenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 10";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});

lessonElevenBtn.addEventListener('click', () => {
    addNewLessonEleven();
    lessonElevenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 11";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonTwelveBtn.addEventListener('click', () => {
    addNewLessonTwelve();
    lessonTwelveEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "LESSON 12";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonIrregBtn.addEventListener('click', () => {
    addNewLessonIrreg();
    lessonIrregEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "Irreg Verbs 1";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonIrregTwoBtn.addEventListener('click', () => {
    addNewLessonIrregTwo();
    lessonIrregTwoEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "Irreg Verbs 2";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonThirteenBtn.addEventListener('click', () => {
    addNewLessonThirteen();
    lessonThirteenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "Lesson 13";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonFourteenBtn.addEventListener('click', () => {
    addNewLessonFourteen();
    lessonFourteenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "Lesson 14";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonFifteenBtn.addEventListener('click', () => {
    addNewLessonFifteen();
    lessonFifteenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "Lesson 15";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonSixteenBtn.addEventListener('click', () => {
    addNewLessonSixteen();
    lessonSixteenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "Lesson 16";
    review.classList.add('lesson-added');
    toReview.appendChild(review);
});
lessonSeventeenBtn.addEventListener('click', () => {
    addNewLessonSeventeen();
    lessonSeventeenEl.classList.add("hide")
    const review = document.createElement("div")
    review.innerHTML = "Lesson 17";
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
        // vocabulary.concat(lessonTwo);
        loadReview()
    }
}
function addNewLessonNine() {
    if(lessonNineBtn.checked) {
        vocabulary.push(...lessonNine);
        loadReview()
    }
}

function addNewLessonTen() {
    if(lessonTenBtn.checked) {
        vocabulary.push(...lessonTen);
        loadReview()
    }
}

function addNewLessonEleven() {
    if(lessonElevenBtn.checked) {
        vocabulary.push(...lessonEleven);
        loadReview()
    }
}

function addNewLessonTwelve() {
    if(lessonTwelveBtn.checked) {
        vocabulary.push(...lessonTwelve);
        loadReview()
    }
}

function addNewLessonIrreg() {
    if(lessonIrregBtn.checked) {
        vocabulary.push(...lessonIrreg);
        loadReview()
    }
}

function addNewLessonIrregTwo() {
    if(lessonIrregTwoBtn.checked) {
        vocabulary.push(...lessonIrregTwo);
        loadReview()
    }
}

function addNewLessonThirteen() {
    if(lessonThirteenBtn.checked) {
        vocabulary.push(...lessonThirteen);
        loadReview()
    }
}

function addNewLessonFourteen() {
    if(lessonFourteenBtn.checked) {
        vocabulary.push(...lessonFourteen);
        loadReview()
    }
}

function addNewLessonFifteen() {
    if(lessonFifteenBtn.checked) {
        vocabulary.push(...lessonFifteen);
        loadReview()
    }
}
function addNewLessonSixteen() {
    if(lessonSixteenBtn.checked) {
        vocabulary.push(...lessonSixteen);
        loadReview()
    }
}
function addNewLessonSeventeen() {
    if(lessonSeventeenBtn.checked) {
        vocabulary.push(...lessonSeventeen);
        loadReview()
    }
}
function addNewLessonEighteen() {
    if(lessonEighteenBtn.checked) {
        vocabulary.push(...lessonEighteen);
        loadReview()
    }
}

function addNewLessonNineteen() {
    if(lessonNineteenBtn.checked) {
        vocabulary.push(...lessonNineteen);
        loadReview()
    }
}

function addNewLessonTwenty() {
    if(lessonTwentyBtn.checked) {
        vocabulary.push(...lessonTwenty);
        loadReview()
    }
}


function addNewLessonTwentyOne() {
    if(lessonTwentyOneBtn.checked) {
        vocabulary.push(...lessonTwentyOne);
        loadReview()
    }
}


function addNewLessonTwentyTwo() {
    if(lessonTwentyTwoBtn.checked) {
        vocabulary.push(...lessonTwentyTwo);
        loadReview()
    }
}


function addNewLessonTwentyThree() {
    if(lessonTwentyThreeBtn.checked) {
        vocabulary.push(...lessonTwentyThree);
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



// show all vocabulary

const allVocabs = document.querySelector('.all-vocabs');

let allVocabList = [];
allVocabs.addEventListener('click', () => {
    
    const allVocabsEl = document.querySelector('.all-vocabsEl')
    lessonsEL.classList.add('hide')
    document.querySelector(".reviewing-section").style.display = 'none'
    allVocabList.push(...lessonOne, ...lessonTwo, ...lessonThree, ...lessonFour, ...lessonFive, ...lessonSix, ...lessonSeven, ...lessonEight, ...lessonNine, ...lessonTen, ...lessonEleven, ...lessonTwelve, ...lessonIrreg, ...lessonIrregTwo, ...lessonThirteen, lessonFourteen, lessonFifteen);

    let vocabularyList = allVocabList.map(vocab => {
        return `
        <ul class="vocabulary-list">
            <li><span>${vocab.greek}</span> : ${vocab.gloss} </li>
        </ul>
           
           
        `;
        // <div class="vocabulary-list"><span>${vocab.greek}</span> : ${vocab.gloss} </div>
    })

    allVocabsEl.innerHTML = vocabularyList;


})

function loadVocabulary() {
    if(vocabulary.length == 0) {
        greekVocab.innerHTML = 'Select lesson/s';
    } else {
        greekVocab.innerText = vocabulary[currentVocab].greek;
        englishVocab.innerText = vocabulary[currentVocab].gloss;
    }
}
const wrongVocabs = [];

const totalScore = document.querySelector(".total-score")

correct.addEventListener("click", ()  => {
    currentVocab++;
    currentCountEL.innerText = currentCount + currentVocab;
    if(currentVocab < vocabulary.length) {
        loadVocabulary();
        englishVocab.classList.remove("show");
        showAnswer.classList.remove('hide');
        hideAnswer.classList.remove('show');
    } else if(wrongVocabs != '') {
        totalScore.innerHTML = `You've scored: ${vocabulary.length - wrongVocabs.length}/${vocabulary.length}`;
        reviewingTitle.innerText = "REVIEWED:";
        vocabulary.length = 0;
        currentCount = 1;
        currentVocab = 0;
        reviewWrongAnswers.classList.add('show');
        vocabEL.classList.add('hide')
        
    } else {
        retake.classList.add('show');
        vocabEL.classList.add('hide')
        reset.classList.remove('show');
        totalScore.innerHTML = `You've scored: ${currentVocab}/${vocabulary.length}`;
        reviewingTitle.innerText = "REVIEWED:";
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
        totalScore.innerHTML = `You've scored: ${vocabulary.length - wrongVocabs.length}/${vocabulary.length}`;
        reviewingTitle.innerText = "REVIEWED:";
        vocabulary.length = 0;
        currentCount = 1;
        currentVocab = 0;
        reviewWrongAnswers.classList.add('show');
        vocabEL.classList.add('hide')
        
    } else {
        retake.classList.add('show');
        vocabEL.classList.add('hide')
        totalScore.innerHTML = `You've scored: ${currentVocab}/${vocabulary.length}`;
        reviewingTitle.innerText = "REVIEWED:";
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
    totalScore.classList.add("hide");

})

function wrongVocabsReview() {
    greekVocab.innerHTML = wrongVocabs[currentVocab].greek;
    englishVocab.innerHTML = wrongVocabs[currentVocab].gloss;
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
        reset.classList.remove('show');
    
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

const mainTitle = document.querySelector(".main-title")
const reviewingTitle = document.querySelector(".reviewing-title");
reviewNow.addEventListener('click', () => {
    if(vocabulary == '') {
        alert('choose lessons')
    } else {
        vocabEL.classList.add("show");
        lessonsEL.classList.add('hide')
        reset.classList.add('show');
        mainTitle.classList.add('hide');
        reviewingTitle.innerText = "REVIEWING:";
        reviewTimer()
    }
 
})

let finalTime = []
const reviewTime = document.querySelector(".review-time")
function reviewTimer() {
    let start = 0;
    const interval = setInterval(myTimer, 1000)
           
        function myTimer() {
            if(currentVocab == vocabulary.length) {
                clearInterval(interval);
                reviewTime.innerHTML = `Review time: <br> ${Math.round(finalTime.length/60)} m ${finalTime.length % 60} s`;
            } else {
                const timeStamp = start++; 
                finalTime.push(timeStamp);  
            }
    }
}
// PARADIGMS TABLE //

const nounParadigmsTable = document.querySelector('.noun-paradigms-table');
const otherParadigmsTable = document.querySelector('.other-paradigms-table');
const verbParadigmsTable = document.querySelector('.verb-paradigms-table');
const paradigmsSection = document.querySelector('.paradigms-section');
const paradigmReview = document.querySelector('.paradigm-review');

paradigmReview.addEventListener('click', () => {
    mainReview.classList.add("hide");
    paradigmsSection.style.display = "block";
    nounParadigmsTable.style.display = 'flex';
    otherParadigmsTable.style.display = 'flex';
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
        "Acc-Plural" : "τὰς οἰκίας"
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
    },
    {
        "Paradigm": "3rd Declension: Feminine (–κ stem) ",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "ἡ σάρξ",
        "Gen-Singular" : "τῆς σαρκός",
        "Dat-Singular" : "τῇ σαρκί",
        "Acc-Singular" : "τὴν σάρκα",
        "Nom-Plural" : "αἱ σάρκες",
        "Gen-Plural" : "τῶν σαρκῶν",
        "Dat-Plural" : "ταῖς σαρξί(ν)",
        "Acc-Plural" : "τὰς σάρκας"
    },
    {
        "Paradigm": "3rd Declension: Masculine  (–ρ stem) ",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "ὁ πατήρ",
        "Gen-Singular" : "τοῦ πατρός",
        "Dat-Singular" : "τῷ πατρί",
        "Acc-Singular" : "τὸν πατέρα",
        "Nom-Plural" : "οἱ πατέρες",
        "Gen-Plural" : "τῶν πατέρων",
        "Dat-Plural" : "τοις πατράσιν",
        "Acc-Plural" : "τοὺς πατέρας"
    },
    {
        "Paradigm": "3rd Declension: Neuter (–ματ stem)",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "τὸ πνεῦμα",
        "Gen-Singular" : "τοῦ πνεύματος",
        "Dat-Singular" : "τῷ πνεύματι",
        "Acc-Singular" : "τὸ πνεῦμα",
        "Nom-Plural" : "τὰ πνεύματα",
        "Gen-Plural" : "τῶν πνευμάτων",
        "Dat-Plural" : "τοις πνεύμασι(ν)",
        "Acc-Plural" : "τὰ πνεύματα"
    },
    {
        "Paradigm": "First Person Personal Pronoun",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "ἐγώ",
        "Gen-Singular" : "μου",
        "Dat-Singular" : "μοι",
        "Acc-Singular" : "με",
        "Nom-Plural" : "ἡμεῖς",
        "Gen-Plural" : "ἡμῶν",
        "Dat-Plural" : "ἡμῖν",
        "Acc-Plural" : "ἡμᾶς"
    },
    {
        "Paradigm": "Second Person Personal Pronoun",
        "Case1" : "Nominative",
        "Case2" : "Genitive",
        "Case3" : "Dative",
        "Case4" : "Accusative",
        "Nom-Singular" : "σύ",
        "Gen-Singular" : "σοῦ",
        "Dat-Singular" : "σοί",
        "Acc-Singular" : "σέ",
        "Nom-Plural" : "ὑμεῖς",
        "Gen-Plural" : "ὑμῶν",
        "Dat-Plural" : "ὑμῖν",
        "Acc-Plural" : "ὑμᾶς"
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

let otherParadigms = [
    {
        "Paradigm": "Third Person Personal Pronoun ",
        "Case1s" : "NS",
        "Case2s" : "GS",
        "Case3s" : "DS",
        "Case4s" : "AS",
        "Case1p" : "NP",
        "Case2p" : "GP",
        "Case3p" : "DP",
        "Case4p" : "AP",
        "NMS" : "αὐτός",
        "NFS" : "αὐτή",
        "NNS" : "αὐτό",
        "GMS" : "αὐτοῦ",
        "GFS" : "αὐτῆς",
        "GNS" : "αὐτοῦ",
        "DMS" : "αὐτῷ",
        "DFS" : "αὐτῇ",
        "DNS" : "αὐτῷ",
        "AMS" : "αὐτόν",
        "AFS" : "αὐτήν",
        "ANS" : "αὐτό",
        "NMP" : "αὐτοί",
        "NFP" : "αὐταί",
        "NNP" : "αὐτά",
        "GMP" : "αὐτῶν",
        "GFP" : "αὐτῶν",
        "GNP" : "αὐτῶν",
        "DMP" : "αὐτοῖς",
        "DFP" : "αὐταῖς",
        "DNP" : "αὐτοῖς",
        "AMP" : "αὐτούς",
        "AFP" : "αὐτάς",
        "ANP" : "αὐτά"
    },
    {
        "Paradigm": "Article",
        "Case1s" : "NS",
        "Case2s" : "GS",
        "Case3s" : "DS",
        "Case4s" : "AS",
        "Case1p" : "NP",
        "Case2p" : "GP",
        "Case3p" : "DP",
        "Case4p" : "AP",
        "NMS" : "ὁ",
        "NFS" : "ἡ",
        "NNS" : "τό",
        "GMS" : "τοῦ",
        "GFS" : "τῆς",
        "GNS" : "τοῦ",
        "DMS" : "τῷ",
        "DFS" : "τῇ",
        "DNS" : "τῷ",
        "AMS" : "τόν",
        "AFS" : "τήν",
        "ANS" : "τό",
        "NMP" : "οἱ",
        "NFP" : "αἱ",
        "NNP" : "τά",
        "GMP" : "τῶν",
        "GFP" : "τῶν",
        "GNP" : "τῶν",
        "DMP" : "τοῖς",
        "DFP" : "ταῖς",
        "DNP" : "τοῖς",
        "AMP" : "τούς",
        "AFP" : "τάς",
        "ANP" : "τά"
    },
    {
        "Paradigm": "Relative Pronoun",
        "Case1s" : "NS",
        "Case2s" : "GS",
        "Case3s" : "DS",
        "Case4s" : "AS",
        "Case1p" : "NP",
        "Case2p" : "GP",
        "Case3p" : "DP",
        "Case4p" : "AP",
        "NMS" : "ὅς",
        "NFS" : "ἥ",
        "NNS" : "ὅ",
        "GMS" : "οὗ",
        "GFS" : "ἧς",
        "GNS" : "οὗ",
        "DMS" : "ᾧ",
        "DFS" : "ᾗ",
        "DNS" : "ᾧ",
        "AMS" : "ὅν",
        "AFS" : "ἥν",
        "ANS" : "ὅ",
        "NMP" : "οἵ",
        "NFP" : "αἵ",
        "NNP" : "ἅ",
        "GMP" : "ὧν",
        "GFP" : "ὧν",
        "GNP" : "ὧν",
        "DMP" : "οἷς",
        "DFP" : "αἷς",
        "DNP" : "οἷς",
        "AMP" : "οὕς",
        "AFP" : "ἅς",
        "ANP" : "ἅ"
    }
    
]
const otherParadigmEl = otherParadigms.map(otherParadigm => 
    ` <details>
            <summary> ${otherParadigm.Paradigm}</summary>
            <table>
                <tr>

                    <th>Case</th>
                    <th>Masculine</th>
                    <th>Feminine</th>
                    <th>Neuter</th>
                </tr>
                <tr>
                    <td>${otherParadigm.Case1s}</td>
                    <td>${otherParadigm.NMS}</td>
                    <td>${otherParadigm.NFS}</td>
                    <td>${otherParadigm.NNS}</td>
                </tr>
                <tr>
                    <td>${otherParadigm.Case2s}</td>
                    <td>${otherParadigm.GMS}</td>
                    <td>${otherParadigm.GFS}</td>
                    <td>${otherParadigm.GNS}</td>
                </tr>
                <tr>
                    <td>${otherParadigm.Case3s}</td>
                    <td>${otherParadigm.DMS}</td>
                    <td>${otherParadigm.DFS}</td>
                    <td>${otherParadigm.DNS}</td>
                </tr>
                <tr>
                    <td>${otherParadigm.Case4s}</td>
                    <td>${otherParadigm.AMS}</td>
                    <td>${otherParadigm.AFS}</td>
                    <td>${otherParadigm.ANS}</td>
                </tr>
                <tr>
                    <td>${otherParadigm.Case1p}</td>
                    <td>${otherParadigm.NMP}</td>
                    <td>${otherParadigm.NFP}</td>
                    <td>${otherParadigm.NNP}</td>
                </tr>
                <tr>
                    <td>${otherParadigm.Case2p}</td>
                    <td>${otherParadigm.GMP}</td>
                    <td>${otherParadigm.GFP}</td>
                    <td>${otherParadigm.GNP}</td>
                </tr>
                <tr>
                    <td>${otherParadigm.Case3p}</td>
                    <td>${otherParadigm.DMP}</td>
                    <td>${otherParadigm.DFP}</td>
                    <td>${otherParadigm.DNP}</td>
                </tr>
                <tr>
                    <td>${otherParadigm.Case4p}</td>
                    <td>${otherParadigm.AMP}</td>
                    <td>${otherParadigm.AFP}</td>
                    <td>${otherParadigm.ANP}</td>
                </tr>
                
                
            </table>
    </details>`  
)

console.log()
otherParadigmsTable.innerHTML = otherParadigmEl;
  

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
        "1s-translation" : "I am being loosed (P) + for myself (M)",
        "2s-translation" : "You are being loosed (P) + for yourself (M)",
        "3s-translation" : "He/she/it is being loosed (P) + for he/she/itself (M)",
        "1p-translation" : "We are being loosed (P) + for ourselves (M)",
        "2p-translation" : "You (all) are being loosed (P) + for yourselves (M)",
        "3p-translation" : "They are being loosed (P) + for themselves (M)"
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
        "1s-translation" : "I was being loosed (P) + for myself (M)",
        "2s-translation" : "You were being loosed (P) + for yourself (M)",
        "3s-translation" : "He/she/it was being loosed (P) + for he/she/itself (M)",
        "1p-translation" : "We were being loosed (P) + for ourselves (M)",
        "2p-translation" : "You (all) were being loosed (P) + for yourselves (M)",
        "3p-translation" : "They were being loosed (P) + for themselves (M)"
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
    },
    {
        "Paradigm": "Future Active Tense-Form",
        "1s" : "λύσω",
        "2s" : "λύσεις",
        "3s" : "λύσει",
        "1p" : "λύσομεν",
        "2p" : "λύσετε",
        "3p" : "λύσουσι(ν)",
        "1s-translation" : "I will loose",
        "2s-translation" : "You will loose",
        "3s-translation" : "He/she/it will loose",
        "1p-translation" : "You (all) will loose",
        "2p-translation" : "They will loose",
        "3p-translation" : ""
    },
    {
        "Paradigm": "Future Middle Tense-Form",
        "1s" : "λύσομαι",
        "2s" : "λύσῃ",
        "3s" : "λύσεται",
        "1p" : "λυσόμεθα",
        "2p" : "λύσεσθε",
        "3p" : "λύσονται",
        "1s-translation" : "I will loose for myself",
        "2s-translation" : "You will loose for yourself",
        "3s-translation" : "He/she/it will loose for him/her/itself",
        "1p-translation" : "We will loose for ourselves",
        "2p-translation" : "You (all) will loose for yourself",
        "3p-translation" : "They will loose for themselves"
    },
    {
        "Paradigm": "Future Passive Tense-Form",
        "1s" : "λυθήσομαι",
        "2s" : "λυθήσῃ",
        "3s" : "λυθήσεται",
        "1p" : "λυθησόμεθα",
        "2p" : "λυθήσεσθε",
        "3p" : "λυθήσονται",
        "1s-translation" : "I will be loosed",
        "2s-translation" : "You will be loosed",
        "3s-translation" : "He/she/it will be loosed",
        "1p-translation" : "We will be loosed",
        "2p-translation" : "You (all) will be loosed",
        "3p-translation" : "They will be loosed"
    },
    {
        "Paradigm": "Future Active Indicative of εἰμί",
        "1s" : "ἔσομαι",
        "2s" : "ἔσῃ",
        "3s" : "ἔσται",
        "1p" : "ἐσόμεθα",
        "2p" : "ἔσεσθε",
        "3p" : "ἔσονται",
        "1s-translation" : "I will",
        "2s-translation" : "You will",
        "3s-translation" : "He/she/it will",
        "1p-translation" : "We will",
        "2p-translation" : "You (all) will",
        "3p-translation" : "They will"
    },
    {
        "Paradigm": "First Aorist Active Indicative",
        "1s" : "ἔλυσα",
        "2s" : "ἔλυσας",
        "3s" : "ἔλυσε(ν)",
        "1p" : "ἐλύσαμεν",
        "2p" : "ἐλύσατε",
        "3p" : "ἔλυσαν",
        "1s-translation" : "I loosed",
        "2s-translation" : "You loosed",
        "3s-translation" : "He/she/it loosed",
        "1p-translation" : "We loosed",
        "2p-translation" : "You (all) loosed",
        "3p-translation" : "They loosed"
    },
    {
        "Paradigm": "First Aorist Middle Indicative",
        "1s" : "ἐλυσάμην",
        "2s" : "ἐλύσω",
        "3s" : "ἐλύσατο",
        "1p" : "ἐλυσάμεθα",
        "2p" : "ἐλύσασθε",
        "3p" : "ἐλύσαντο",
        "1s-translation" : "I loosed for myself",
        "2s-translation" : "You loosed for yourself",
        "3s-translation" : "He/she/it loosed for him/her/itself",
        "1p-translation" : "We loosed for ourselves",
        "2p-translation" : "You (all) loosed for yourselves",
        "3p-translation" : "They loosed for themselves"
    },
    {
        "Paradigm": "First Aorist Passive Indicative",
        "1s" : "ἐλύθην",
        "2s" : "ἐλύθης",
        "3s" : "ἐλύθη",
        "1p" : "ἐλύθημεν",
        "2p" : "ἐλύθητε",
        "3p" : "ἐλύθησαν",
        "1s-translation" : "I was loosed",
        "2s-translation" : "You were loosed",
        "3s-translation" : "He/she/it was loosed",
        "1p-translation" : "We were loosed",
        "2p-translation" : "You (all) were loosed",
        "3p-translation" : "They were loosed"
    },
    {
        "Paradigm": "Second Aorist Active Indicative (λαμβάνω)",
        "1s" : "ἔλαβον",
        "2s" : "ἔλαβες",
        "3s" : "ἔλαβεν",
        "1p" : "ἐλάβομεν",
        "2p" : "ἐλάβετε",
        "3p" : "ἔλαβον",
        "1s-translation" : "I received",
        "2s-translation" : "You received",
        "3s-translation" : "He/she/it received",
        "1p-translation" : "We received",
        "2p-translation" : "You (all) received",
        "3p-translation" : "They received"
    },
    {
        "Paradigm": "Second Aorist Middle Indicative (γίνομαι)",
        "1s" : "ἐλαβόμην",
        "2s" : "ἐλαβου",
        "3s" : "ἐλαβετο",
        "1p" : "ἐλαβόμεθα",
        "2p" : "ἐλαβεσθε",
        "3p" : "ἐλαβοντο",
        "1s-translation" : "I received for myself",
        "2s-translation" : "You received for yourself",
        "3s-translation" : "He/she/it received for him/her/itself",
        "1p-translation" : "We received for ourselves",
        "2p-translation" : "You (all) received for yourselves",
        "3p-translation" : "They received for themselves"
    },
    {
        "Paradigm": "Second Aorist Passive Indicative",
        "1s" : "ἐγραφην",
        "2s" : "ἐγραφης",
        "3s" : "ἐγράφη",
        "1p" : "ἐγραφημεν",
        "2p" : "ἐγραφητε",
        "3p" : "ἐγραφησαν",
        "1s-translation" : "I was written",
        "2s-translation" : "You were written",
        "3s-translation" : "He/she/it was written",
        "1p-translation" : "We received were written",
        "2p-translation" : "You (all) were written",
        "3p-translation" : "They received were written"
    },
    {
        "Paradigm": "Liquid Future Active",
        "1s" : "μενῶ",
        "2s" : "μενεῖς",
        "3s" : "μενεῖ",
        "1p" : "μενοῦμεν",
        "2p" : "μενεῖτε",
        "3p" : "μενοῦσι(ν)",
        "1s-translation" : "I will remain",
        "2s-translation" : "You will remain",
        "3s-translation" : "He/she/it will remain",
        "1p-translation" : "We will remain",
        "2p-translation" : "You (all) will remain",
        "3p-translation" : "They will remain"
    },
    {
        "Paradigm": "Liquid Aorist Active",
        "1s" : "ἔμεινα",
        "2s" : "ἔμεινας",
        "3s" : "ἔμεινεν",
        "1p" : "ἐμείναμεν",
        "2p" : "ἐμείνατε",
        "3p" : "ἔμειναν",
        "1s-translation" : "I remained",
        "2s-translation" : "You remained",
        "3s-translation" : "He/she/it remained",
        "1p-translation" : "We remained",
        "2p-translation" : "You (all) remained",
        "3p-translation" : "They remained"
    },
    {
        "Paradigm": "Perfect Active Indicative",
        "1s" : "λέλυκα",
        "2s" : "λέλυκας",
        "3s" : "λέλυκε(ν)",
        "1p" : "λελύκαμεν",
        "2p" : "λελύκατε",
        "3p" : "λελύκασι(ν)",
        "1s-translation" : "I have loosed",
        "2s-translation" : "You have loosed",
        "3s-translation" : "He/she/it has loosed",
        "1p-translation" : "We have loosed",
        "2p-translation" : "You (all) have loosed",
        "3p-translation" : "They have loosed"
    },
    {
        "Paradigm": "Perfect Mid/Pass Indicative",
        "1s" : "λέλυμαι",
        "2s" : "λέλυσαι",
        "3s" : "λέλυται",
        "1p" : "λελύμεθα",
        "2p" : "λέλυσθε",
        "3p" : "λέλυνται",
        "1s-translation" : "I have been loosed",
        "2s-translation" : "You have been loosed",
        "3s-translation" : "He/she/it has been loosed",
        "1p-translation" : "We have been loosed",
        "2p-translation" : "You (all) have been loosed",
        "3p-translation" : "They have been loosed"
    },
    {
        "Paradigm": "Pluperfect Active Indicative",
        "1s" : "(ἐ)λελύκειν",
        "2s" : "(ἐ)λελύκεις",
        "3s" : "(ἐ)λελύκει(ν)",
        "1p" : "(ἐ)λελύκειμεν",
        "2p" : "(ἐ)λελύκειτε",
        "3p" : "(ἐ)λελύκεισαν",
        "1s-translation" : "I had loosed",
        "2s-translation" : "You had loosed",
        "3s-translation" : "He/she/it had loosed",
        "1p-translation" : "We had loosed",
        "2p-translation" : "You (all) had loosed",
        "3p-translation" : "They had loosed"
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

  //

const videoLessonsBtn = document.querySelector(".video-lessons-btn")
const videoLessonsEl = document.querySelector(".video-lessons-element")
const back = document.querySelector(".back")


videoLessonsBtn.addEventListener('click', ()=> {
    videoLessonsEl.classList.add('show-video-lessons')
    mainReview.classList.add("hide");
    document.querySelector(".love-greek").style.display = 'none';
})

