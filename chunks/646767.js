function(e, t, n) {
    var Symbol = n("506264"),
        r = Symbol ? Symbol.prototype : void 0,
        i = r ? r.valueOf : void 0;
    e.exports = function(e) {
        return i ? Object(i.call(e)) : {}
    }
}