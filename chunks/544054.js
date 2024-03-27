function(t, e, n) {
    var r = n("524556"),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return i.call(e, t) ? e[t] : void 0
    }
}