const bad_words = [
    "females are objects",
    "females are parasites",
    "females are gold diggers",
    "females are gold-diggers",
    "women are objects",
    "women are parasites",
    "women are gold diggers",
    "women are gold-diggers",
    "women belong in the kitchen",
    "toxic femininity",
    "high body count",
    "female respondants take the opposite side to the male",
    "female nature",
    "gynocentrism",
    "feminazi",
    "women are inferior",
    "females are emotional, men are logical",
    "marriage is a trap",
    "no more beta males",
    "reject modern women",
    "women should be submissive",
    "women are submissive",
    "destroy feminism",
    "false rape accusations",
    "feminism is cancer",
    "equality is a lie",
    "equality isn't real",
    "equality isn't an issue",
    "misandry is the issue",
    "misandry is the real issue",
    "women's rights are a plot against men",
    "feminists target men",
    "trophy wife",
    "gyatt",
    "mewing",
    "mewingstreak",
    "skibidi",
    "rizz",
    "redpill",
    "bluepill",
    "blackpill",
    "alpha",
    "sigma",
    "beta",
    "alpha male",
    "sigma male",
    "beta male",
    "gigachad",
    "giga",
    "cuck",
    "simp",
    "mogged",
    "mogging",
    "mog",
    "incel",
    "incels",
    "hypergamy",
    "mgtow",
    "pua",
    "awalt",
    "smv",
    "foid",
    "foids",
    "neomasculinity",
    "negging",
    "andrewtate",
    "andrew tate",
    "ben shapiro",
    "benshapiro",
    "christiantate",
    "christian tate",
    "jordanpeterson",
    "jordan peterson",
    "brettcooper",
    "brett cooper",
    "freshandfit",
    "freshandfitpodcast",
    "sneako",
    "pearldavis",
    "pearl davis",
    "justpearlythings",
];

var n = bad_words.length;

//BLOCK WORDS
var found = false;
findString = function findText(text) {
    if(window.find(text)) {
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = '\
        <head> \
            <meta charset="UTF-8"> \
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
            <title>Blocked Content</title> \
        </head> \
        <body> \
            <h1>I\'m sorry, Dave. I\'m afraid I can\'t load this page for you.</h1> \
            <p><b>Why can\'t I access the contents of this page?</b> The content on this website contains manosphere content, which can be harmful to your mental health.</p> \
            <p>Read more about it here: <a href="https://guidetothemanosphere.com" target="_blank">guidetothemanosphere.com</a></p> \
        </body> \
    ';
      document.documentElement.scrollTop = 0;
      found = true;
    };
}

for (let i=0; i<n; i++) {
    findString(bad_words[i]);
    if (found) {
        break;
    };
};
found=false;
