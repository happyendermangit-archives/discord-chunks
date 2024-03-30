function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("973361"),
        o = n("812497");
    n("211604");
    var i = new o.default({
        initialLocale: r.parse(document.cookie).locale,
        getMessages: function(e) {
            return n("479187")("./messages/".concat(e).replace("./messages/", "./"))
        },
        getLanguages: function() {
            return n("34859")
        }
    });
    i.addListener("locale", function(e) {
        document.cookie = "locale=".concat(e, ";path=/")
    }), t.default = i
}