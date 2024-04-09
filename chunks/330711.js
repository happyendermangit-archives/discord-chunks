function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("973361"),
        r = n("627420");
    n("211604");
    let s = new r.default({
        initialLocale: i.parse(document.cookie).locale,
        getMessages: e => n("677762")("./messages/".concat(e).replace("./messages/", "./")),
        getLanguages: () => n("34859")
    });
    s.addListener("locale", e => {
        document.cookie = "locale=".concat(e, ";path=/")
    }), t.default = s
}