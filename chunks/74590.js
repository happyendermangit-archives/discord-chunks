function(t, r, n) {
    var e = n("963201");
    t.exports = function(t, r) {
        var n = t.__data__;
        return e(r) ? n["string" == typeof r ? "string" : "hash"] : n.map
    }
}