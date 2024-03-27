function(e, t, n) {
    var r = n("352644");
    e.exports = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}