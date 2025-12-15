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
