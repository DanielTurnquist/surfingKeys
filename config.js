// an example to create a new mapping `ctrl-y`
api.mapkey('<ctrl-y>', 'Show me the money', function () {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});
api.addSearchAlias('v', 'wiktionary', '"https://en.wiktionary.org/w/index.php?search=",', 's', '"https://en.wiktionary.org/w/api.php?action=query&format=json&generator=prefixsearch&gpssearch="', function (response) {
    Object.values(JSON.parse(response.text).query.pages).map((p) => p.title)
})
// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
api.map('gt', 'T');
settings.hintCharacters = "fjdkslauriemvc";
settings.hintAlign = "left";

// Hint styling with Roboto and Darcula colors
api.Hints.style('border: solid 2px #555555; color: #ffc66d; background: #2b2b2b; font-family: Roboto, sans-serif !important;');
api.Hints.style('border: solid 2px #555555 !important; padding: 1px !important; color: #a9b7c6 !important; background: #2b2b2b !important; font-family: Roboto, sans-serif !important;', 'text');

// Visual mode styling
api.Visual.style('marks', 'background-color: #214283;');
api.Visual.style('cursor', 'background-color: #287bde;');

// Set Roboto font and JetBrains Darcula theme
settings.theme = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
    font-family: 'Roboto', sans-serif !important;
}

.sk_theme {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background: #2b2b2b;
    color: #a9b7c6;
}

.sk_theme tbody {
    color: #a9b7c6;
}

.sk_theme input {
    color: #a9b7c6;
    background: #3c3f41;
    border: 1px solid #555555;
}

.sk_theme .url {
    color: #287bde;
}

.sk_theme .annotation {
    color: #808080;
}

.sk_theme .omnibar_highlight {
    color: #ffc66d;
    background: #214283;
}

.sk_theme .omnibar_timestamp {
    color: #6a8759;
}

.sk_theme .omnibar_visitcount {
    color: #9876aa;
}

.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #313335;
}

.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #214283;
    border: 1px solid #4b6eaf;
}

.sk_theme #sk_status, .sk_theme #sk_find {
    font-size: 14px;
    background: #3c3f41;
    color: #a9b7c6;
    border: 1px solid #555555;
}

.sk_theme #sk_keystroke {
    background: #3c3f41;
    color: #a9b7c6;
}

.sk_theme .expandRichHints span.annotation {
    color: #cc7832;
}
`;
