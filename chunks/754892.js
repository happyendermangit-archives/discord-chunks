function(e, t, r) {
    var Symbol = r("506264"),
        n = Object.prototype,
        i = n.hasOwnProperty,
        o = n.toString,
        a = Symbol ? Symbol.toStringTag : void 0;
    e.exports = function(e) {
        var t = i.call(e, a),
            r = e[a];
        try {
            e[a] = void 0;
            var n = !0
        } catch (e) {}
        var u = o.call(e);
        return n && (t ? e[a] = r : delete e[a]), u
    }
}