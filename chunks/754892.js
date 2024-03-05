function(e, t, r) {
    var Symbol = r("506264"),
        n = Object.prototype,
        u = n.hasOwnProperty,
        a = n.toString,
        o = Symbol ? Symbol.toStringTag : void 0;
    e.exports = function(e) {
        var t = u.call(e, o),
            r = e[o];
        try {
            e[o] = void 0;
            var n = !0
        } catch (e) {}
        var i = a.call(e);
        return n && (t ? e[o] = r : delete e[o]), i
    }
}