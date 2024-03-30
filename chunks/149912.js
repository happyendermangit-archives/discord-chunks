function(t, e, n) {
    var r = n("466293"),
        i = n("443735"),
        o = n("402428"),
        s = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return o(t) || i(t) || !!(s && t && t[s])
    }
}