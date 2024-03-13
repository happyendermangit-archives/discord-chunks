function(t, r, e) {
    var n = e("876905"),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var r = this.__data__;
        if (n) {
            var e = r[t];
            return "__lodash_hash_undefined__" === e ? void 0 : e
        }
        return o.call(r, t) ? r[t] : void 0
    }
}