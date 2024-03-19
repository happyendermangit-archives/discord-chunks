function(e, a, t) {
    var Symbol = t("506264"),
        d = t("971433"),
        s = t("486036"),
        n = Symbol ? Symbol.isConcatSpreadable : void 0;
    e.exports = function(e) {
        return s(e) || d(e) || !!(n && e && e[n])
    }
}