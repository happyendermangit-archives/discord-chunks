function(e, a, t) {
    var Symbol = t("506264"),
        s = t("971433"),
        d = t("486036"),
        n = Symbol ? Symbol.isConcatSpreadable : void 0;
    e.exports = function(e) {
        return d(e) || s(e) || !!(n && e && e[n])
    }
}