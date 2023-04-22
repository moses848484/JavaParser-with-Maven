



let sentences = []
function generate() {
    var data = {
    	"start": ["#NP# #VP#."],
    	"NP": ["#Det# #Adj# #character# #Verb# #N# in the  #place#", "#Det# #charater# that #VP#", "#Det# #Adj# #N#"],
    	"VP": ["#Verb# #Adverb#"],

        "character": ["hero","villan","chief","cat","dog","cow","frog","nerd","genius"],

        "Adverb": ["loudly","quietly","swiftly","slowly","proudly","lovingly","madly"],

    	"Det": ["The", "This", "That"],

    	"N": ["Luyando", "Hassan", "Paul", "Moses", "Abel", "Genn", "Beatrice", "Victoire"],

    	"Adj": ["cool", "lazy", "amazed", "sweet","beautiful","ugly","tedious","treacherous","cunning"],

    	"Verb": ["computes", "cries", "helps", "fights", "sends", "plays","runs","walks","shouts","robbs","rescues",

                   "slobbers", "appears", "disappears", "exists", "cries", "laughs",],

        "place": ["fied","ice-berg","mountain","bush","trench","hell","another dimension","city","town"]
    }
    
    let grammar = tracery.createGrammar(data);
    let expansion = grammar.flatten('#start#');

    sentences.push(expansion);

    printSentences(sentences);
}

function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}
