function(t, r, n) {
    "use strict";
    var e = n("106295"),
        o = n("936940"),
        i = n("161581").String;
    t.exports = !!Object.getOwnPropertySymbols && !o(function() {
        var t = Symbol("symbol detection");
        return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && e && e < 41
    })
}