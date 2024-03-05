function(e, t, r) {
    var Symbol = r("330206"),
        n = Symbol ? Symbol.prototype : void 0,
        u = n ? n.valueOf : void 0;
    e.exports = function(e) {
        return u ? Object(u.call(e)) : {}
    }
}