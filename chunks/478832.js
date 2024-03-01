function(t, e, n) {
    var Symbol = n("330206"),
        r = n("564414"),
        i = n("725502"),
        o = Symbol ? Symbol.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return i(t) || r(t) || !!(o && t && t[o])
    }
}