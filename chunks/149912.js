function(t, n, e) {
    var r = e("466293"),
        i = e("443735"),
        o = e("402428"),
        s = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return o(t) || i(t) || !!(s && t && t[s])
    }
}